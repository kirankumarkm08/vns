import type { EnquiryStatus } from "@/types/admin";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";
const STORAGE_KEY = "vns-admin-api-key";

export function getStoredAdminKey(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(STORAGE_KEY);
}

export function storeAdminKey(key: string) {
  window.localStorage.setItem(STORAGE_KEY, key);
}

export function clearAdminKey() {
  window.localStorage.removeItem(STORAGE_KEY);
}

type ApiResponse<T> = {
  success: boolean;
  data: T;
};

export class AdminApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const key = getStoredAdminKey();
  const headers = new Headers(init?.headers);
  headers.set("Content-Type", "application/json");
  if (key) {
    headers.set("x-admin-api-key", key);
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers,
  });

  if (response.status === 401) {
    clearAdminKey();
    throw new AdminApiError("Your admin key is invalid or has expired", 401);
  }

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;
    try {
      const body = (await response.json()) as { error?: { message?: string } };
      if (body.error?.message) {
        message = body.error.message;
      }
    } catch {
      // ignore parse errors
    }
    throw new AdminApiError(message, response.status);
  }

  const body = (await response.json()) as ApiResponse<T>;
  return body.data;
}

export async function validateAdminKey(key: string): Promise<void> {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("x-admin-api-key", key);

  const response = await fetch(`${API_BASE}/admin/stats`, { headers });
  if (!response.ok) {
    throw new AdminApiError("Invalid admin key", response.status);
  }
}

export function adminFetch<T>(path: string, init?: RequestInit) {
  return request<T>(path, init);
}

export async function downloadCsvExport(params: {
  status?: EnquiryStatus;
  search?: string;
}): Promise<void> {
  const key = getStoredAdminKey();
  const url = new URL(`${API_BASE}/enquiries/export.csv`);
  if (params.status) url.searchParams.set("status", params.status);
  if (params.search) url.searchParams.set("search", params.search);
  url.searchParams.set("limit", "10000");

  const response = await fetch(url.toString(), {
    headers: key ? { "x-admin-api-key": key } : undefined,
  });

  if (!response.ok) {
    throw new Error(`Export failed with status ${response.status}`);
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = `enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(objectUrl);
}

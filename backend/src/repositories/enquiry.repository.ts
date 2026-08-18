import type { RowDataPacket, ResultSetHeader } from "mysql2";
import { pool } from "../db/mysql.js";
import type { CreateEnquiryInput, EnquiryRecord, EnquiryStatus } from "../types/enquiry.js";

type EnquiryRow = RowDataPacket & {
  id: number;
  name: string;
  phone: string;
  event_type: string;
  preferred_date: string;
  guest_count: string;
  package_preference: string;
  message: string | null;
  source_page: string | null;
  status: EnquiryStatus;
  created_at: Date;
  updated_at: Date;
};

function mapEnquiry(row: EnquiryRow): EnquiryRecord {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    eventType: row.event_type,
    preferredDate: row.preferred_date,
    guestCount: row.guest_count,
    packagePreference: row.package_preference,
    message: row.message,
    sourcePage: row.source_page,
    status: row.status,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  };
}

export async function createEnquiry(input: CreateEnquiryInput): Promise<number> {
  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO enquiries (
      name,
      phone,
      event_type,
      preferred_date,
      guest_count,
      package_preference,
      message,
      source_page,
      ip_address,
      user_agent
    ) VALUES (
      :name,
      :phone,
      :eventType,
      :preferredDate,
      :guestCount,
      :packagePreference,
      :message,
      :sourcePage,
      :ipAddress,
      :userAgent
    )`,
    {
      name: input.name,
      phone: input.phone,
      eventType: input.eventType,
      preferredDate: input.preferredDate,
      guestCount: input.guestCount,
      packagePreference: input.packagePreference,
      message: input.message || null,
      sourcePage: input.sourcePage || null,
      ipAddress: input.ipAddress || null,
      userAgent: input.userAgent || null,
    },
  );

  return result.insertId;
}

export async function findEnquiryById(id: number): Promise<EnquiryRecord | null> {
  const [rows] = await pool.execute<EnquiryRow[]>(
    `SELECT
      id,
      name,
      phone,
      event_type,
      DATE_FORMAT(preferred_date, '%Y-%m-%d') AS preferred_date,
      guest_count,
      package_preference,
      message,
      source_page,
      status,
      created_at,
      updated_at
    FROM enquiries
    WHERE id = :id
    LIMIT 1`,
    { id },
  );

  return rows[0] ? mapEnquiry(rows[0]) : null;
}

export async function listEnquiries(filters: {
  status?: EnquiryStatus;
  limit: number;
  offset: number;
}): Promise<EnquiryRecord[]> {
  const where = filters.status ? "WHERE status = :status" : "";
  const params: { status?: EnquiryStatus; limit: number; offset: number } = {
    limit: filters.limit,
    offset: filters.offset,
  };

  if (filters.status) {
    params.status = filters.status;
  }

  const [rows] = await pool.execute<EnquiryRow[]>(
    `SELECT
      id,
      name,
      phone,
      event_type,
      DATE_FORMAT(preferred_date, '%Y-%m-%d') AS preferred_date,
      guest_count,
      package_preference,
      message,
      source_page,
      status,
      created_at,
      updated_at
    FROM enquiries
    ${where}
    ORDER BY created_at DESC
    LIMIT :limit OFFSET :offset`,
    params,
  );

  return rows.map(mapEnquiry);
}

"use client";

import { useState } from "react";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { AdminLogin } from "@/components/admin/admin-login";
import { getStoredAdminKey } from "@/lib/admin-api";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(() => Boolean(getStoredAdminKey()));

  if (!authenticated) {
    return <AdminLogin onAuthenticated={() => setAuthenticated(true)} />;
  }

  return <AdminDashboard onLogout={() => setAuthenticated(false)} />;
}

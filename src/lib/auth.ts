import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const ADMIN_COOKIE = "heat_auto_admin";

export function getAdminSecret() {
  return process.env.ADMIN_SESSION_SECRET || "dev-secret-change-me";
}

export function isAdminAuthenticated() {
  return cookies().get(ADMIN_COOKIE)?.value === getAdminSecret();
}

export function requireAdmin() {
  if (!isAdminAuthenticated()) {
    redirect("/admin/login");
  }
}

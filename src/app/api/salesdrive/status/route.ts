import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    databaseUrl: Boolean(process.env.DATABASE_URL),
    salesdriveDomain: Boolean(process.env.SALESDRIVE_DOMAIN),
    salesdriveApiKey: Boolean(process.env.SALESDRIVE_API_KEY),
    telegram: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
    email: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS),
    message: "Секрети не показуються, тільки статус підключення."
  });
}

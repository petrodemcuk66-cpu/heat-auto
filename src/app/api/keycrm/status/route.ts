import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    databaseUrl: Boolean(process.env.DATABASE_URL),
    keycrmApiKey: Boolean(process.env.KEYCRM_API_KEY),
    keycrmPipelineId: Boolean(process.env.KEYCRM_PIPELINE_ID),
    keycrmSourceId: Boolean(process.env.KEYCRM_SOURCE_ID),
    keycrmManagerId: Boolean(process.env.KEYCRM_MANAGER_ID),
    telegram: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
    email: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS),
    message: "Секрети не показуються, тільки статус підключення."
  });
}

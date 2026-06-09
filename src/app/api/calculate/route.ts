import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  const price = Number(body.price || 0);
  const delivery = Number(body.delivery || 0);
  const customs = Number(body.customs || 0);
  const service = Number(body.service || 0);

  return NextResponse.json({
    ok: true,
    total: price + delivery + customs + service
  });
}

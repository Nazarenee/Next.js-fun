import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(reuqest: NextRequest) {
  const token = await getToken({ req: reuqest });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 400 });
  }
  return NextResponse.json({
    email: token.email,
    name: token.name,
  });
}

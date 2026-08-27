import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const body = await req.json();
  if (!body.name || !body.email || !body.message) return NextResponse.json({error:"Name, email and message are required."},{status:400});
  // Connect this handler to Prisma/email/CRM in production.
  return NextResponse.json({success:true});
}
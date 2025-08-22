// app/actions.ts
"use server";

import { sql } from "@/lib/db";

export async function getData() {
  const rows = await sql`SELECT NOW()`;
  return rows;
}
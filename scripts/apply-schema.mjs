import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error(
    "Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before applying schema.",
  );
  process.exit(1);
}

const sqlPath = resolve(
  "supabase/migrations/20260802140000_church_market_schema.sql",
);
const sql = readFileSync(sqlPath, "utf8");

// Prefer PostgREST rpc if available; otherwise use SQL via Management-less postgres query endpoint is not public.
// Use Supabase Database API through pg-meta when linked; fallback message for dashboard paste.
const endpoint = `${url}/rest/v1/rpc/`;

console.log("Schema file ready at:", sqlPath);
console.log(
  "Automated SQL apply requires database password or MCP project access.",
);
console.log(
  "Paste the migration SQL into Supabase Dashboard → SQL Editor → Run.",
);
console.log("Project:", url);
console.log("Endpoint probe:", endpoint);
process.exit(0);

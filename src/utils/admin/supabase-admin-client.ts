import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase-types";

export const supabaseAdmin = createClient<any>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

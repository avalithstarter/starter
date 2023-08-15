import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import handleSupabaseErrors from "../handle-supabase-errors";
import { Database } from "@/types/supabase-types";

export type UseDashboardOverviewResponse = {
  team_name: string;
  account_id: string;
  account_role: Database["public"]["Tables"]["account_user"]["Row"]["account_role"];
  subscription_active: boolean;
  subscription_status: Database["public"]["Tables"]["billing_subscriptions"]["Row"]["status"];
  personal_account: boolean;
  team_account: boolean;
}[];


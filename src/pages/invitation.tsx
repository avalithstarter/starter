import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Button } from "react-daisyui";
import { useMutation } from "@tanstack/react-query";
import handleSupabaseErrors from "@/utils/handle-supabase-errors";
import Loader from "@/components/core/loader";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "@/types/supabase-types";

const Invitation = () => {
  const router = useRouter();
  const { token } = router.query;
  const { t } = useTranslation("dashboard");
  const supabaseClient = useSupabaseClient<Database>();

  const acceptInvitation = useMutation(
    async (invitationToken: string) => {
      const { data, error } = await supabaseClient.rpc("accept_invitation", {
        lookup_invitation_token: invitationToken,
      });

      handleSupabaseErrors(data, error);
      return data;
    },
    {
      onSuccess(accountId) {
        router.push(`/dashboard/teams/${accountId}`);
      },
    }
  );

  return (
    <div className="max-w-md mx-auto my-12 bg-base-500 grid gap-y-4">
     
    </div>
  );
};

export default Invitation;

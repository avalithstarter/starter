/* eslint-disable */
import SettingsCard from "@/components/dashboard/shared/settings-card";
import useTranslation from "next-translate/useTranslation";
import { Button } from "react-daisyui";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabaseAdmin } from "@/utils/admin/supabase-admin-client";

const AccountSubscription = ({user}:any) => {
  const { t } = useTranslation("dashboard");
  const router = useRouter()
  const [type, setType] = useState('')

  const handlePayment = () =>{
    router.push('/pricing')
  }

  useEffect(()=>{
    async function fetchSubscription() {
      const { data, error } = await supabaseAdmin
        .from('subscriptions')
        .select('*')
        .eq('email', user.email)
        .single();

      if (error) {
        console.error('Error fetching subscription:', error);
      } else {
        console.log(data)
        setType(data.type)
      }
    }

    fetchSubscription();
  },[])

  return (
    <>
      <SettingsCard
        title={t("accountSubscription.title")}
        description={t("accountSubscription.description")}
      >
        <SettingsCard.Body>
          <h2 className="h4">
            {type.toUpperCase()}
          </h2>
          <p>
            {t("accountSubscription.billingEmail", {
              email: user?.email,
            })}
          </p>
        </SettingsCard.Body>
        <SettingsCard.Footer>
          <Button
            color="primary"
      
            onClick={handlePayment}
          >
            {t("accountSubscription.updatePlan")}
          </Button>
        </SettingsCard.Footer>
      </SettingsCard>
    </>
  );
};

export default AccountSubscription;

/* eslint-disable */
import useTranslation from "next-translate/useTranslation";
import DashboardMeta from "@/components/dashboard/dashboard-meta";
import { useEffect, useState } from "react";
import { supabaseAdmin } from "@/utils/admin/supabase-admin-client";
import { useUser } from "@supabase/auth-helpers-react";

const DashboardContent = ({email}:any) =>{

  const [expired, setExpired] = useState(false);

  const checkExpired = (createdAt) =>{

    const newTimestamp = Date.now();
    const oldDateNumber = new Date(createdAt).getTime() - (3 * 60 * 60 * 1000);

    const timeDifference = newTimestamp - oldDateNumber;
    
    if (timeDifference >= 60000) {
      console.log('The new timestamp is 1 minutes or more older than the old timestamp.');
      setExpired(true)
    } else {
      console.log('The new timestamp is less than 1 minutes older than the old timestamp.');
      setExpired(false)
    }
  }

  useEffect(() => {
    async function fetchSubscription() {
      const { data, error } = await supabaseAdmin
        .from('subscriptions')
        .select('*')
        .eq('email', email)
        .single();

      if (error) {
        console.error('Error fetching subscription:', error);
      } else {
        console.log(data)
        if(data.type === 'trial'){
          checkExpired(data.created_at)
        }
      }
    }

    fetchSubscription();
  }, []);

  return(
    <div>
      {
        expired ? (<h1 className="text-4xl font-extrabold text-error sm:text-center sm:text-6xl">
          Expired subscription. Go to settings to update your plan.
        </h1>) : (<h1 className="text-4xl font-extrabold text-primary sm:text-center sm:text-6xl">
          This is your dashboard.
        </h1>)
      }
    </div>
  )
}

const DashboardIndex = () => {
 
  const { t } = useTranslation("dashboard");

  const user = useUser()

  return (
    <>
      <DashboardMeta title={t("dashboardMeta.dashboard")} />
      {
        user ? <DashboardContent email={user?.email}/> : <h1>Loading...</h1>
      }
    </>
  );
};

export default DashboardIndex;

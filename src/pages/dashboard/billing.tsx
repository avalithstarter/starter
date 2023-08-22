import DashboardContent from "@/components/dashboard/shared/dashboard-content";
import useTranslation from "next-translate/useTranslation";
import AccountSubscription from "@/components/dashboard/accounts/settings/account-subscription";
import usePersonalAccount from "@/utils/api/use-personal-account";
import DashboardMeta from "@/components/dashboard/dashboard-meta";
import { useUser } from "@supabase/auth-helpers-react";

const PersonalAccountBilling = () => {
  const { t } = useTranslation("dashboard");

  const user = useUser()

  return (
    <DashboardContent>
      <DashboardMeta title={t("dashboardMeta.billing")} />
      <DashboardContent.Title>{t("billing.pageTitle")}</DashboardContent.Title>
      <DashboardContent.Content>
        <AccountSubscription user={user}/>
      </DashboardContent.Content>
    </DashboardContent>
  );
};

export default PersonalAccountBilling;

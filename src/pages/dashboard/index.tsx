import useTranslation from "next-translate/useTranslation";
import DashboardMeta from "@/components/dashboard/dashboard-meta";

const DashboardIndex = () => {
 
  const { t } = useTranslation("dashboard");
  /**
   * This page does the heavy lifting for handling the fact that
   * Basejump supports personal accounts, team accounts and a combination
   * of both. If no personal account is loaded, it means that personal
   * accounts are deactivated. In that case, we show current teams and
   * prompt them to create one if none exist. If a personal account is
   * loaded, we show the personal account dashboard page
   */

  return (
    <>
      <DashboardMeta title={t("dashboardMeta.dashboard")} />
        {/* This is where we add the content for the dashboard */}
        <div className="max-w-md mx-auto pt-10">
          <h1>Dashboard</h1>
        </div>
    </>
  );
};

export default DashboardIndex;

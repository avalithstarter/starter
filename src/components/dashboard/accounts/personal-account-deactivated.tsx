import useTeamAccounts from "@/utils/api/use-team-accounts";
import NewAccountForm from "@/components/dashboard/accounts/new-account-form";
import Loader from "@/components/core/loader";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const PersonalAccountDeactivated = () => {
  const { data, isLoading } = useTeamAccounts();
  const router = useRouter();
  const { t } = useTranslation("dashboard");
  return (
    <div className="max-w-md mx-auto pt-10">
        <div>
          <h2 className="h2">
            {t("personalAccountDeactivated.createFirstAccount")}
          </h2>
          <p className="mb-4">
            {t("personalAccountDeactivated.firstAccountDescription")}
          </p>
          <NewAccountForm
            onComplete={(accountId) =>
              router.push(`/dashboard/teams/${accountId}`)
            }
          />
        </div>
    </div>
  );
};

export default PersonalAccountDeactivated;

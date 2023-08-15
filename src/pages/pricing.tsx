import LoginPassword from "@/components/dashboard/authentication/login-password";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuthCheck from "@/utils/use-auth-check";
import { useEffect } from "react";
import PricingSection from "@/components/pricing/pricing";

const PricingPage = () => {
  const { t } = useTranslation("authentication");
  const router = useRouter();
  const { redirectedFrom } = router.query;

  useEffect(()=>{
    document.title = 'Pricing'
  },[])

  useAuthCheck(redirectedFrom as string);

  return (
    <div className="max-h-md mx-4 md:mx-auto my-12 bg-base-500 grid gap-y-4">
      <PricingSection />
    </div>
  );
};

export default PricingPage;

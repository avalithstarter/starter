import SignupPassword from "@/components/dashboard/authentication/signup-password";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useAuthCheck from "@/utils/use-auth-check";
import { useEffect } from "react";

const SignUpPage = () => {
  const { t } = useTranslation("authentication");
  const router = useRouter();
  const { redirectedFrom } = router.query;

  useAuthCheck(redirectedFrom as string);

  useEffect(()=>{
    document.title = 'Sign Up'
  },[])
  
  return (
    <div className="max-w-md mx-auto my-12 bg-base-500 grid gap-y-4" style={{height:'45vh'}}>
      <SignupPassword />
      <Link href="/login" passHref>
        {t("shared.alreadyRegistered")}
      </Link>
    </div>
  );
};

export default SignUpPage;

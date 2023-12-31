import { useForm } from "react-hook-form";
import { Button } from "react-daisyui";
import useTranslation from "next-translate/useTranslation";
import Input from "@/components/core/input";
import { toast } from "react-toastify";
import { DASHBOARD_PATH } from "@/types/auth";
import { useRouter } from "next/router";
import getFullRedirectUrl from "@/utils/get-full-redirect-url";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabaseAdmin } from "@/utils/admin/supabase-admin-client";
type LOGIN_FORM = {
  email: string;
  password: string;
};

type Props = {
  redirectTo?: string;
  buttonText?: string;
  metadata?: {
    [key: string]: string | number | boolean;
  };
};

async function insertSubscription(email: string, type: string) {
  const { data, error } = await supabaseAdmin.from('subscriptions').insert([
    { email, type },
  ]);

  if (error) {
    console.error('Error inserting subscription:', error);
  } else {
    console.log('Subscription inserted successfully:', data);
  }
}

const SignupPassword = ({
  redirectTo = DASHBOARD_PATH,
  buttonText,
  metadata,
}: Props) => {
  const { t } = useTranslation("authentication");
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LOGIN_FORM>();

  async function onSubmit({ email, password }: LOGIN_FORM) {
    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          ...metadata,
        },
        emailRedirectTo: getFullRedirectUrl(redirectTo),
      },
    });
    await insertSubscription(email, 'trial')
    if (error) toast.error(error.message);
    if (!error) {
      await router.push(redirectTo);
    }
  }

  return (
    <div className="flex flex-col justify-around">
      <p className="max-w-2xl mx-auto my-0 mt-5 text-xl text-grey-200 sm:text-center sm:text-2xl">
        Start building with your 15 days trial! No credit card required
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <Input
          label={t("shared.email")}
          type="email"
          {...register("email", { required: true })}
        />
        <Input
          label={t("shared.password")}
          type="password"
          {...register("password", { required: true })}
        />
        <Button
          type="submit"
          color="primary"
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          {buttonText || t("signupPassword.buttonText")}
        </Button>
      </form>
    </div>
  );
};

export default SignupPassword;

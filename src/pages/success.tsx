/* eslint-disable */
import { supabaseAdmin } from "@/utils/admin/supabase-admin-client";
import useAuthCheck from "@/utils/use-auth-check";
import { useUser } from "@supabase/auth-helpers-react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SuccessPageContent = ({email}:any) =>{

    const router = useRouter();
    const checkoutType = router.asPath.split('=')[1]

    useEffect(()=>{

        const updateSubscriptionStatus = async() =>{
            await supabaseAdmin
            .from('subscriptions')
            .update({ type: checkoutType })
            .eq('email', email);
        }

        updateSubscriptionStatus()
            .then((res)=>{
                console.log(res)
                router.push('/dashboard')
            })

    },[])

    return(
    <section style={{ height: '30dvh', width: '40dvw', margin: '0 auto' }}>
        <div className="card bg-base-100 shadow-xl w-full lg:w-auto">
            <div className="card-body items-center text-center gap-3">
                <h2 className="card-title">Your payment was successful!✅</h2>
                <p>You'll be redirected to your dashboard soon</p>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        </div>
    </section>)
}

const SuccessPage = () => {
    
    const user = useUser()

    useEffect(()=>{
        document.title = 'Success!'
    },[])
    
    const { t } = useTranslation("authentication");
    const router = useRouter();
    const { redirectedFrom } = router.query;

    useAuthCheck(redirectedFrom as string);

    return (
        <>
         {
            user ?  <SuccessPageContent email={user?.email}/> : <h1>Loading...</h1>
         }
        </>
    );
};

export default SuccessPage;

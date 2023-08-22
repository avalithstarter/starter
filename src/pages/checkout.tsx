import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useAuthCheck from "@/utils/use-auth-check";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(`${process.env.PUBLISHABLE_KEY}`);

const CheckoutForm = ({type}:any) =>{

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, []);

    const urlCheckout = `/api/checkout_${type}`

    return (
        <form action={urlCheckout} method="POST">
            <div className="max-w-md mx-auto my-12 bg-base-500 flex justify-center gap-y-4">
                <button style={{alignSelf:'center'}} className="btn btn-primary btn-wide" type="submit" role="link">Checkout</button>
            </div>
        </form>
    )
}

const CheckoutPage = () => {

    useEffect(()=>{
        document.title = 'Checkout'
    },[])
    
    const { t } = useTranslation("authentication");
    const router = useRouter();
    const { redirectedFrom } = router.query;

    const checkoutType = router.asPath.split('=')[1]

    useAuthCheck(redirectedFrom as string);

    return (
        <section style={{height:'30dvh', width:'40dvw', margin:'0 auto'}}>
            <Elements stripe={stripePromise} >
                <div className="card bg-base-100 shadow-xl w-full lg:w-auto">
                    <div className="card-body items-center text-center gap-3">
                        <h2 className="card-title">You are about to checkout for the {checkoutType} subscription</h2>
                        <p>Click checkout to go to the payment platform</p>
                    </div>
                    <CheckoutForm type={checkoutType} />
                </div>

            </Elements>
        </section>
        
    );
};

export default CheckoutPage;

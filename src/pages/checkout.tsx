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

const CheckoutForm = () =>{

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

    return (
        <form action="/api/checkout" method="POST">
            <div className="max-w-md mx-auto my-12 bg-base-500 grid gap-y-4">
                <button className="btn btn-primary btn-wide" type="submit" role="link">Checkout</button>
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

    useAuthCheck(redirectedFrom as string);
    return (
        <Elements stripe={stripePromise} >
            <CheckoutForm />
        </Elements>
    );
};

export default CheckoutPage;

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

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const CheckoutForm = () =>{
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <div className="max-w-md mx-auto my-12 bg-base-500 grid gap-y-4">
            <button className="btn btn-primary btn-wide">Checkout</button>
            {errorMessage && <div>{errorMessage}</div>}
        </div>
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

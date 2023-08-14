import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useAuthCheck from "@/utils/use-auth-check";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from "react";



const PricingSection = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  
  const { t } = useTranslation("authentication");
  const router = useRouter();
  const { redirectedFrom } = router.query;

  const products = [
    {
        unit_amount: 12,
        interval: 'month',
        currency: 'USD',
        id:'asdfas1231',
        description:'All the basics for starting a new business!',
        name: 'Hobby'
    },
    {
        unit_amount: 24,
        interval: 'month',
        currency: 'USD',
        id:'asd1312fasdfa',
        description:'All the basics for starting a new business!',
        name: 'Freelancer'
    },
    {
        unit_amount: 32,
        interval: 'month',
        currency: 'USD',
        id:'asdf132123asdfa',
        description:'All the basics for starting a new business!',
        name: 'Startup'
    }
  ]

  useAuthCheck(redirectedFrom as string);

  const handlePayment = (data) =>{
    console.log('pagado', data)
  }

  return (
    <div className="max-w-md mx-4 md:mx-auto my-12 bg-base-500 grid gap-y-4" style={{maxWidth:'100rem', height:'100vh'}}>
      <section className="bg-base-100" style={{height:'auto', minHeight:'75vh'}}>
          <div className="max-w-6xl py-8" style={{height:'100%', display:'flex'}}>
            <div className="sm:flex sm:flex-col flex-col sm:align-center flex justify-center" style={{gap:'3rem'}}>
              <h1 className="text-4xl font-extrabold text-primary sm:text-center sm:text-6xl">
                Pricing Plans
              </h1>
              <p className="max-w-2xl mx-auto my-0 mt-5 text-xl text-grey-200 sm:text-center sm:text-2xl">
                Start building for free, then add a site plan to go live. Account
                plans unlock additional features.
              </p>
              <div className="flex flex-col sm:flex-row" style={{display:'flex', justifyContent:'space-between', gap: '3rem'}}>
                {products?.map((price) => {
                  const priceString =
                    price.unit_amount &&
                    new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: price.currency!,
                      minimumFractionDigits: 0
                    }).format(price.unit_amount);

                  return (
                      <div key={price.id} className="relative flex self-center mt-12 border rounded-lg border-zinc-800">
                          <div style={{width: '100%'}} className="border border-opacity-50 divide-y rounded-lg shadow-sm divide-zinc-600">
                              <div
                                  key={price.interval}
                                  className="divide-y rounded-lg shadow-sm divide-zinc-600"
                              >
                                  <div className="p-6 py-2 m-1 text-2xl font-medium text-grey-300 rounded-md shadow-sm border-zinc-800 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8">
                                      {price.name}
                                  </div>
                                  <div className="p-6">
                                      <p>
                                          <span className="text-5xl font-extrabold text-primary">
                                              {priceString}
                                          </span>
                                          <span className="text-base font-medium text-primary">
                                              /{price.interval}
                                          </span>
                                      </p>
                                      <p className="mt-4 mb-5 text-grey-300">{price.description}</p>
                                      <button className="btn btn-outline btn-primary btn-wide" onClick={()=>{handlePayment(price)}}>Subscribe</button>
                                      {errorMessage && <div>{errorMessage}</div>}
                                  </div>
                              </div>
                          </div>
                      </div>
                  );
                })}
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
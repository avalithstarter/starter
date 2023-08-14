/* istanbul ignore file */
import Logo from "@/components/basejump-default-content/logo";
import ContentMeta from "@/components/content-pages/content-meta";
import PricingSection from "../pricing/pricing";
import GeneralContent from "./general-content";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

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

const BasejumpHomepage = () => (
  <Elements stripe={stripePromise} >
    <div className="max-w-screen-lg mx-auto bg-base-100">
    <ContentMeta
      title="YourBrand"
      description="To be defined"
      socialImage={`/api/og?title=Basejump`}
    />
    <div className="pt-8 pb-24 md:pt-36 md:pb-48">
      <div style={{minHeight:'80vh'}}>
        <Logo size="lg" className="mx-auto" />
        <h2 className="h2 text-center my-2">
          Dashboard template for future {' '}
          <span className="text-primary">E-commerce</span>
        </h2>
      </div>
      
      <GeneralContent />
      <PricingSection />
    </div>
  </div>
  </Elements>
  
);

export default BasejumpHomepage;

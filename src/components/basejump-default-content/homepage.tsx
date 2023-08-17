/* istanbul ignore file */
import Logo from "@/components/basejump-default-content/logo";
import ContentMeta from "@/components/content-pages/content-meta";
import PricingSection from "../pricing/pricing";
import GeneralContent from "./general-content";
import { useRouter } from "next/router";

const BasejumpHomepage = () => {

  const router = useRouter()

  const handleNavigation = () =>{
    router.push('/signup')
  }

  return(
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
          <div className="flex justify-center mt-10">
            <div className="tooltip" data-tip="No credit card required!">
              <button onClick={handleNavigation} className="btn btn-primary btn-wide">Get started for free</button>
            </div>
          </div>
        </div>
        
        <GeneralContent />
        <PricingSection />
      </div>
    </div>
  )
};

export default BasejumpHomepage;

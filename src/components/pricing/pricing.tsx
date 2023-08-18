import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useAuthCheck from "@/utils/use-auth-check";
import { useEffect, useState } from "react";
import { useUser } from "@supabase/auth-helpers-react";




const PricingSection = ({checkout}:any) => {
  
  const { t } = useTranslation("authentication");
  const router = useRouter();
  const user = useUser()
  const { redirectedFrom } = router.query;
  const [minHeight, setMinHeight] = useState('50vh')

  const products = [
    {
        unit_amount: 12,
        interval: 'month',
        currency: 'USD',
        id:'asdfas1231',
        description:'All the basics for starting a new business!',
        name: 'Hobby',
        perks:[
          '5 Documents p/ month',
          'Profile Search',
          'Technical Support'
        ]
    },
    {
        unit_amount: 24,
        interval: 'month',
        currency: 'USD',
        id:'asd1312fasdfa',
        description:'All the basics for starting a new business!',
        name: 'Freelancer',
        perks:[
          '100 Documents p/ month',
          'Profile Search',
          'Technical Support',
          'Profiles Back Up'
        ]
    },
    {
        unit_amount: 32,
        interval: 'month',
        currency: 'USD',
        id:'asdf132123asdfa',
        description:'All the basics for starting a new business!',
        name: 'Startup',
        perks:[
          '500 Documents p/ month',
          'Profile Search',
          'Technical Support',
          'Profiles Back Up',
          'AI Job Description Matching',
        ]
    }
  ]

  useAuthCheck(redirectedFrom as string);

  const handlePayment = (price) =>{
    // esto es momentaneo, ya se que es re feo
    if(user){
      if(price === 12){
        router.push('/checkout?type=hobby')
      } else if(price === 24){
        router.push('/checkout?type=freelance')
      } else if(price === 32){
        router.push('/checkout?type=startup')
      }
    } else {
      handleNavigation()
    }
  }

  const handleNavigation = () =>{
    router.push('/signup') 
  }

  useEffect(()=>{
    const getDimensions = () =>{
      if(window.innerHeight < 883){
        setMinHeight('70vh')
      } else {
        setMinHeight('50vh')
      }
    }

    window.addEventListener('resize', getDimensions)

    return ()=> window.removeEventListener('resize', getDimensions)
  },[])

  return (
    <div className="max-w-md mx-4 md:mx-auto my-12 bg-base-500 grid gap-y-4" style={{maxWidth:'100rem', height:'100vh'}}>
      <section className="bg-base-100" style={{height:'auto', minHeight:'75vh', display:'flex', justifyContent:'flex-start'}}>
          <div className="max-w-6xl py-8" style={{display:'flex', maxHeight:'80vh'}}>
            <div className="sm:flex sm:flex-col flex-col sm:align-center flex justify-start" style={{gap:'3rem'}}>
              <h1 className="text-4xl font-extrabold text-primary sm:text-center sm:text-6xl">
                Pricing Plans
              </h1>
              <p className="max-w-2xl mx-auto my-0 mt-5 text-xl text-grey-200 sm:text-center sm:text-2xl">
                Start building for free, then add a site plan to go live. Account
                plans unlock additional features.
              </p>

              {
                !user ? (
                  <div className="tooltip" data-tip="No credit card required!">
                    <button onClick={handleNavigation} className="btn btn-primary btn-wide" style={{alignSelf:'center'}}>Get started for free</button>
                  </div>
                ) : (<></>) 
              }
              
              
              <div className="flex flex-col sm:flex-row" style={{display:'flex', justifyContent:'flex-start', gap: '3rem'}}>
                {products?.map((price) => {
                  const priceString =
                    price.unit_amount &&
                    new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: price.currency!,
                      minimumFractionDigits: 0
                    }).format(price.unit_amount);

                  return (
                      <div key={price.id} className="relative flex self-center mt-12 border rounded-lg border-zinc-800" style={{minHeight}}>
                          <div style={{width: '100%'}} className="border border-opacity-50 divide-y rounded-lg shadow-sm divide-zinc-600">
                              <div
                                  key={price.interval}
                                  className="divide-y rounded-lg shadow-sm divide-zinc-600"
                                  style={{height:'100%'}}
                              >
                                  <div className="p-6 py-2 m-1 text-2xl font-medium text-grey-300 rounded-md shadow-sm border-zinc-800 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8">
                                      {price.name}
                                  </div>
                                  <div className="p-6 flex flex-col gap-1 justify-between" style={{height:'90%'}}>
                                      <p>
                                          <span className="text-5xl font-extrabold text-primary">
                                              {priceString}
                                          </span>
                                          <span className="text-base font-medium text-primary">
                                              /{price.interval}
                                          </span>
                                      </p>
                                      <p className="mt-4 mb-5 text-grey-300">{price.description}</p>
                                      <ul className="flex flex-col gap-1" style={{height:'40%', listStyleType:'disc', width:'85%', margin:'0 auto'}}>
                                        {
                                          price.perks.map((perk)=>{
                                            return (<li key={perk + price.id}>{perk}</li>)
                                          })
                                        }
                                      </ul>
                                      
                                      <button className="btn btn-outline btn-primary btn-wide" style={{margin:'0 auto'}} onClick={()=>{handlePayment(price.unit_amount)}}>Subscribe</button>
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
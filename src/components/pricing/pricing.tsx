import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useAuthCheck from "@/utils/use-auth-check";

const PricingSection = () => {
  const { t } = useTranslation("authentication");
  const router = useRouter();
  const { redirectedFrom } = router.query;

  const products = [
    {
        unit_amount: 12,
        interval: 'month',
        currency: 'USD',
        id:'asdfasdfa',
        description:'All the basics for starting a new business!',
        name: 'Hobby'
    },
    {
        unit_amount: 24,
        interval: 'month',
        currency: 'USD',
        id:'asdfasdfa',
        description:'All the basics for starting a new business!',
        name: 'Freelancer'
    },
    {
        unit_amount: 32,
        interval: 'month',
        currency: 'USD',
        id:'asdfasdfa',
        description:'All the basics for starting a new business!',
        name: 'Startup'
    }
  ]

  useAuthCheck(redirectedFrom as string);

  return (
    <div className="max-w-md mx-4 md:mx-auto my-12 bg-base-500 grid gap-y-4" style={{maxWidth:'100rem'}}>
      <section className="bg-base-100">
          <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
            <div className="sm:flex sm:flex-col sm:align-center" style={{gap:'3rem'}}>
              <h1 className="text-4xl font-extrabold text-grey sm:text-center sm:text-6xl">
                Pricing Plans
              </h1>
              <p className="max-w-2xl m-auto mt-5 text-xl text-grey-200 sm:text-center sm:text-2xl">
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
                      <div className="relative flex self-center mt-12 border rounded-lg border-zinc-800">
                          <div style={{width: '100%'}} className="border border-opacity-50 divide-y rounded-lg shadow-sm divide-zinc-600">
                              <div
                                  key={price.interval}
                                  className="divide-y rounded-lg shadow-sm divide-zinc-600"
                              >
                                  <div className="p-6 py-2 m-1 text-2xl font-medium text-black rounded-md shadow-sm border-zinc-800 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8">
                                      {price.name}
                                  </div>
                                  <div className="p-6">
                                      <p>
                                          <span className="text-5xl font-extrabold text-black">
                                              {priceString}
                                          </span>
                                          <span className="text-base font-medium text-grey-100">
                                              /{price.interval}
                                          </span>
                                      </p>
                                      <p className="mt-4 text-grey-300">{price.description}</p>
                                      <button
                                          type="button"
                                          disabled={false}
                                          className="block w-full py-2 mt-12 text-sm font-semibold text-center text-black rounded-md hover:text-white hover:bg-zinc-900 "
                                      >
                                          Subscribe
                                      </button>
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
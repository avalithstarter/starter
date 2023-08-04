/* istanbul ignore file */
import Logo from "@/components/basejump-default-content/logo";
import ContentMeta from "@/components/content-pages/content-meta";

const BasejumpHomepage = () => (
  <div className="max-w-screen-lg mx-auto bg-base-100">
    <ContentMeta
      title="YourBrand"
      description="To be defined"
      socialImage={`/api/og?title=Basejump`}
    />
    <div className="pt-8 pb-24 md:pt-36 md:pb-48">
      <Logo size="lg" className="mx-auto" />
      <h2 className="h2 text-center my-2">
        Dashboard template for future {' '}
        <span className="text-accent">E-commerce</span>
      </h2>
    </div>
  </div>
);

export default BasejumpHomepage;

import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useAuthCheck from "@/utils/use-auth-check";
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import CloudSyncIcon from '@mui/icons-material/CloudSync';


const GeneralContent = () => {
  const { t } = useTranslation("authentication");
  const router = useRouter();
  const { redirectedFrom } = router.query;

  useAuthCheck(redirectedFrom as string);

  return (
    <div className="max-w-md mx-4 md:mx-auto my-12 bg-base-500 grid gap-y-4" style={{maxWidth:'100rem'}}>
        <section className="flex flex-col justify-center" style={{height:'auto', width:'auto', gap:'4rem', minHeight:'95vh'}}>
            <h1 className="text-4xl font-extrabold text-primary sm:text-center sm:text-6xl">
                What can we do for you?
            </h1>
            <p className="max-w-2xl mx-auto my-0 mt-5 text-xl text-grey-200 sm:text-center sm:text-2xl">
                Embark on a journey of innovation with our personalized range of technology services, designed to empower and fulfill your unique needs.
            </p>
            <div className="flex flex-col lg:flex-row justify-between" style={{gap:'1rem'}}>
                <div className="card bg-base-100 shadow-xl w-full lg:w-auto">
                    <figure className="px-10 pt-10">
                        <CodeIcon fontSize="large" />
                    </figure>
                    <div className="card-body items-center text-center gap-3">
                        <h2 className="card-title">Web Development</h2>
                        <p>Building tailored web solutions</p>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-wide">Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl w-full lg:w-auto">
                    <figure className="px-10 pt-10">
                        <DeveloperModeIcon fontSize="large" />
                    </figure>
                    <div className="card-body items-center text-center gap-3">
                        <h2 className="card-title">Mobile Development</h2>
                        <p>Feature-rich mobile applications</p>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-wide">Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl w-full lg:w-auto">
                    <figure className="px-10 pt-10">
                        <CloudSyncIcon fontSize="large" />
                    </figure>
                    <div className="card-body items-center text-center gap-3">
                        <h2 className="card-title">Cloud Migration</h2>
                        <p>Businesses to the cloud</p>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-wide">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default GeneralContent;
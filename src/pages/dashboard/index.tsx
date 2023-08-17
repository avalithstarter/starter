import useTranslation from "next-translate/useTranslation";
import DashboardMeta from "@/components/dashboard/dashboard-meta";

const Profiles = () =>{
  return(
    <div className="mx-auto my-auto px-10 flex flex-col justify-center" style={{height:'100vh', gap:'7rem'}}>
      <h1 className="text-4xl font-extrabold text-primary sm:text-center sm:text-6xl">
        Upload. Generate.<span className="text-error"> Deliver.</span>
      </h1>
      <div className="flex flex-col justify-evenly" style={{height:'60%', width:'80%', border:'3px dashed #003D82', margin:'0 auto'}}>
        <p className="max-w-2xl mx-auto my-0 mt-5 text-2xl text-black sm:text-center sm:text-3xl">
          Drop your pdf file or select from your computer
        </p>
        <button className="btn btn-primary btn-wide" style={{margin:'0 auto'}}>Upload File</button>
      </div>
    </div>
  )
}

const DashboardIndex = () => {
 
  const { t } = useTranslation("dashboard");

  return (
    <>
      <DashboardMeta title={t("dashboardMeta.dashboard")} />
    </>
  );
};

export default DashboardIndex;

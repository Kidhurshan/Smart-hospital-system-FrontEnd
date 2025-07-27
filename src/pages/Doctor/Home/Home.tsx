import Card_PatientsCounts from "../../../components/components_Doctor/Doctor_GUI_elements/Card_PatientsCounts";
import BarChart_PatientCounts from "../../../components/components_Doctor/Doctor_GUI_elements/BarChart_PatientCounts";
import CurveProgressLineBar from "../../../components/components_Doctor/Doctor_GUI_elements/CurveProgressLineBar";
import ShortTable_RecentPatient from "../../../components/components_Doctor/Doctor_GUI_elements/ShortTable_RecentlyAccess";
import PageMeta from "../../../components/common_components/PageMeta";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { APP_ROUTES } from "../../../constants/appRoutes";



export default function Home() {

  const { user } = useSelector(state => state.authState);

  const navigate = useNavigate();

  const username = user?.name ?? "";

  useEffect(() => {
    if (!user) {
      navigate(APP_ROUTES.SIGNIN);
    }
  }, [user, navigate]);
  
  return (
    <>
      <PageMeta
        title="Doctor Home"
        description="This is Doctor Dashboard"
      />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 space-y-6 xl:col-span-12 flex justify-center">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-end justify-between mt-5">
              <div>
                <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                  Welcome, Dr. {username}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Have a nice day at work 
                </span>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-8">
          <Card_PatientsCounts />
          <BarChart_PatientCounts />
        </div>


        <div className="col-span-12 xl:col-span-8">
          <ShortTable_RecentPatient />
        </div>
      </div>
    </>
  );
}

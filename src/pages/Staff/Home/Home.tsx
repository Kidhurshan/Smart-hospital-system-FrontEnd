import UserCounts from "../../../components/components_Staff/Staff_GUI_elements/Card_UserCounts";
import Barchart_patientCounts from "../../../components/components_Staff/Staff_GUI_elements/BarChart_PatientCount";
import StatisticsChart from "../../../components/components_Staff/Staff_GUI_elements/StatisticsChart";
import CurveProgressBar from "../../../components/components_Staff/Staff_GUI_elements/CurveProgressLineBar";
import Piechart from "../../../components/components_Staff/Staff_GUI_elements/PieChart_DropDown";
import ShortTableList from "../../../components/components_Staff/Staff_GUI_elements/ShortTableList";
import ProgressBar from "../../../components/components_Staff/Staff_GUI_elements/ProgressLineBar";
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
      <PageMeta title="Patient Home" description="This is Dashboard" />

{/* Top and center welcome message */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-12 flex justify-center">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-end justify-between mt-5">
              <div>
                <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                  Welcome, {username}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Have a nice day at work 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt -5 md:gap-6">
        <div className="col-span-12 space-y-6 mt-5 xl:col-span-7">
          <UserCounts />

          <Barchart_patientCounts />
        </div>


        <div className="col-span-12">
          <StatisticsChart />
        </div>
       <div className="col-span-12 xl:col-span-7">
          <ShortTableList />
        </div>
      </div>
    </>
  );
}

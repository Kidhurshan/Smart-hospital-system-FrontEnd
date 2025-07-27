import CardUserCount from "../../../components/components_MA/MA_GUI_elements/Card_UserCounts";
import BarChartPatientCount from "../../../components/components_MA/MA_GUI_elements/BarChart_PatientCount";
import StatisticsChart from "../../../components/components_MA/MA_GUI_elements/StatisticsChart";
import ProgressBar from "../../../components/components_MA/MA_GUI_elements/ProgressLineBar";
import PageMeta from "../../../components/common_components/PageMeta";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { APP_ROUTES } from "../../../constants/appRoutes";
import { useEffect } from "react";

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
      <PageMeta title="MA Home" description="This is Dashboard" />

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

      {/* Existing dashboard components */}
      <div className="grid grid-cols-12 gap-4 mt-5 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-12">
          <CardUserCount />
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-8">
          <BarChartPatientCount />
        </div>
        <div className="col-span-12">
          <StatisticsChart />
        </div>
      </div>
    </>
  );
}

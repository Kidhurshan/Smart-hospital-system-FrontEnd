import Card_Patient_BMI from "../../../components/components_Patients/Patient_GUI_elements/Medical Analysis/Card_Patient_BMI";
import BarChart_Blood_Counts from "../../../components/components_Patients/Patient_GUI_elements/Medical Analysis/BarChart_Blood_Counts";
import CurveProgressBar_Patient_Health from "../../../components/components_Patients/Patient_GUI_elements/Medical Analysis/CurveProgressBar_Patient_Health";
import LineGraph_Blood_Cholesterol from "../../../components/components_Patients/Patient_GUI_elements/Medical Analysis/LineGraph_Blood_Cholesterol";
import LineGraph_Blood_Pressure from "../../../components/components_Patients/Patient_GUI_elements/Medical Analysis/LineGraph_Blood_Pressure";
import LineGraph_Blood_Sugar from "../../../components/components_Patients/Patient_GUI_elements/Medical Analysis/LineGraph_Blood_Sugar";
import PieChart_Cholesterol from "../../../components/components_Patients/Patient_GUI_elements/Medical Analysis/PieChart_Cholesterol";
import ProgressLineBar_Liver_Function from "../../../components/components_Patients/Patient_GUI_elements/Medical Analysis/ProgressLineBar_Liver_Function";
import ProgressLineBar_Thyroid_Function from "../../../components/components_Patients/Patient_GUI_elements/Medical Analysis/ProgressLineBar_Thyroid_Function";
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
        title="Patient Home"
        description="This is Doctor Dashboard"
      />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 space-y-6 xl:col-span-12 flex justify-center">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-end justify-between mt-5">
              <div>
                <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">

                  Welcome Patient: {username}

                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Have a nice day
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-12 flex justify-center">
          <Card_Patient_BMI />
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-12 justify-center">
          <BarChart_Blood_Counts/>
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-6">
          <CurveProgressBar_Patient_Health />

        </div>
        <div className="col-span-12 space-y-6 xl:col-span-6">
          <PieChart_Cholesterol/>
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-6">
          <LineGraph_Blood_Cholesterol/>
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-6">
          <LineGraph_Blood_Pressure/>
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-12">
          <LineGraph_Blood_Sugar/>
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-6">

          <ProgressLineBar_Liver_Function/>
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-6">
          <ProgressLineBar_Thyroid_Function/>
        </div>

      </div>
    </>
  );
}

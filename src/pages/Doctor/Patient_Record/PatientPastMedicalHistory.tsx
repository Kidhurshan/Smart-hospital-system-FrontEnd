import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import PageMeta from "../../../components/common_components/PageMeta";
import ComponentCard from "../../../components/common_components/ComponentCard";
import TableSurgicalHistory from "../../../components/components_Doctor/Doctor_GUI_elements/Table_Patient_Surgical_History";
import TableDiseaseHistory from "../../../components/components_Doctor/Doctor_GUI_elements/Table_Patient_Disease_History";
import { useLocation } from "react-router";



export default function Blank() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("patientId");
  const patient = queryParams.get("patient");
 

  // useEffect(() => {
  //   setPatientId(id);
  // }, [id, setPatientId]);
  
  return (
    <div>
      <PageMeta
        title="Patients medical history"
        description="This is medical history Tables"
      />
      <PageBreadcrumb pageTitle="Patient Medical History" />
        <div className="grid grid-cols-12 gap-8 md:gap-8">
          <div className="col-span-12 space-y-8 xl:col-span-12 flex justify-center">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-end justify-between mt-5 mr-20">
              <div>
                <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800 ml-45 ">
                  <img src="/images/user/user-02.jpg" alt="user" />
                </div>
                <div className="flex justify-center ml-20">
                  <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90 text-center">
                    Patient {patient}
                  </h4> 
                </div>            
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 mt-5">
        <ComponentCard title="Past Disease History">
          <TableDiseaseHistory patientId={id}/>
        </ComponentCard>
      </div>
      <div className="space-y-6 mt-5">
        <ComponentCard title="Past Surgical History">
          <TableSurgicalHistory patientId={id}/>
        </ComponentCard>
      </div>
    </div>
  );
}

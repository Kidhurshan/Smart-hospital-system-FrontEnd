import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import ComponentCard from "../../../components/common_components/ComponentCard";
import PageMeta from "../../../components/common_components/PageMeta";
import Table_patientList from "../../../components/components_Patients/Patient_GUI_elements/TableMedicalReports";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="Medical report List"
        description="Medical patient report list"
      />
      <PageBreadcrumb pageTitle="Medical Report List" />
      <div className="space-y-6">
        <ComponentCard title="">
          <Table_patientList />
        </ComponentCard>
      </div>
    </>
  );
}

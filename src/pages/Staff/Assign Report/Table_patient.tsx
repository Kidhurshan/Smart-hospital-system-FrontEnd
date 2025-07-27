import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import ComponentCard from "../../../components/common_components/ComponentCard";
import PageMeta from "../../../components/common_components/PageMeta";
import BasicTableOne from "../../../components/components_Staff/Staff_GUI_elements/Table_PatientsList";

export default function PatientTable() {
  return (
    <>
      <PageMeta
        title="Patients table"
        description="Patients table for assigning report"
      />
      <PageBreadcrumb pageTitle="Assigning Patient's Report" />
      <div className="space-y-6">
        <ComponentCard title="Patient List">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}

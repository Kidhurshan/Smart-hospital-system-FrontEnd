import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import ComponentCard from "../../../components/common_components/ComponentCard";
import PageMeta from "../../../components/common_components/PageMeta";
import BasicTableOne from "../../../components/components_Doctor/Doctor_GUI_elements/Table_PatientsList";

export default function BasicTables() {

  return (
    <>
      <PageMeta
        title="Patients Table"
        description="This is Tables Dashboard"
      />
      <PageBreadcrumb pageTitle="Patient Record" />
      <div className="space-y-6">
        <ComponentCard title="Patients List">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}

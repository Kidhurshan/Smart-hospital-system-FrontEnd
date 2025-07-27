import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import ComponentCard from "../../../components/common_components/ComponentCard";
import PageMeta from "../../../components/common_components/PageMeta";
import Table_Report from "../../../components/components_Doctor/Doctor_GUI_elements/Table_Patient_Medical_Reports";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="Patients Table"
        description="This is Tables Dashboard"
      />
      <PageBreadcrumb pageTitle="Patient Medical Reports" />
      <div className="space-y-6">
        <ComponentCard title="Medical Report List">
          <Table_Report/>
        </ComponentCard>
      </div>
    </>
  );
}

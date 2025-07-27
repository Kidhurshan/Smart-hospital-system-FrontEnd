import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import ComponentCard from "../../../components/common_components/ComponentCard";
import PageMeta from "../../../components/common_components/PageMeta";
import CheckupTable from "../../../components/components_Doctor/Doctor_GUI_elements/Table_Patient_Checkup";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="Patients Table"
        description="This is Tables Dashboard"
      />
      <PageBreadcrumb pageTitle="Checkup Records" />
      <div className="space-y-6">
        <ComponentCard title="Checkup Form">
          <CheckupTable />
        </ComponentCard>
      </div>
    </>
  );
}

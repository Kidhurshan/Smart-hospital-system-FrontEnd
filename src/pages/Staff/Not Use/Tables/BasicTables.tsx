import PageBreadcrumb from "../../../../components/common_components/PageBreadCrumb";
import ComponentCard from "../../../../components/common_components/ComponentCard";
import PageMeta from "../../../../components/common_components/PageMeta";
import BasicTableOne from "../../../../components/components_Staff/Staff_GUI_elements/Table_PatientsList";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Basic Tables" />
      <div className="space-y-6">
        <ComponentCard title="Basic Table 1">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}

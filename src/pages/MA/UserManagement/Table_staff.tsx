import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import ComponentCard from "../../../components/common_components/ComponentCard";
import PageMeta from "../../../components/common_components/PageMeta";
import BasicTableOne from "../../../components/components_MA/MA_GUI_elements/Table_StaffList";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Managing Medical Staffs" />
      <div className="space-y-6">
        <ComponentCard title="Medical Staff List">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}

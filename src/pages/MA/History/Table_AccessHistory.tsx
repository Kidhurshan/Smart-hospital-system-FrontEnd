import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import ComponentCard from "../../../components/common_components/ComponentCard";
import PageMeta from "../../../components/common_components/PageMeta";
import Table from "../../../components/components_MA/MA_GUI_elements/Table_AccessHistory";

export default function DoctorTable() {
  return (
    <>
      <PageMeta
        title="Access history Table"
        description="This is Access History Tables "
      />
      <PageBreadcrumb pageTitle="Access History" />
      <div className="space-y-6">
        <ComponentCard title="Access History">
          <Table />
        </ComponentCard>
      </div>
    </>
  );
}

import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import ComponentCard from "../../../components/common_components/ComponentCard";
import PageMeta from "../../../components/common_components/PageMeta";
import Table from "../../../components/components_MA/MA_GUI_elements/Table_ReportHistory";

export default function DoctorTable() {
  return (
    <>
      <PageMeta
        title="Report History Table"
        description="This is report History Table"
      />
      <PageBreadcrumb pageTitle="Report History" />
      <div className="space-y-6">
        <ComponentCard title="Report History">
          <Table />
        </ComponentCard>
      </div>
    </>
  );
}

import ComponentCard from "../../../../components/common_components/ComponentCard";
import PageBreadcrumb from "../../../../components/common_components/PageBreadCrumb";
import PageMeta from "../../../../components/common_components/PageMeta";
import FourIsToThree from "../../../../components/common_components/ui_components/videos/FourIsToThree";
import OneIsToOne from "../../../../components/common_components/ui_components/videos/OneIsToOne";
import SixteenIsToNine from "../../../../components/common_components/ui_components/videos/SixteenIsToNine";
import TwentyOneIsToNine from "../../../../components/common_components/ui_components/videos/TwentyOneIsToNine";

export default function Videos() {
  return (
    <>
      <PageMeta
        title="React.js Videos Tabs | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Videos page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Videos" />
      <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2">
        <div className="space-y-5 sm:space-y-6">
          <ComponentCard title="Video Ratio 16:9">
            <SixteenIsToNine />
          </ComponentCard>
          <ComponentCard title="Video Ratio 4:3">
            <FourIsToThree />
          </ComponentCard>
        </div>
        <div className="space-y-5 sm:space-y-6">
          <ComponentCard title="Video Ratio 21:9">
            <TwentyOneIsToNine />
          </ComponentCard>
          <ComponentCard title="Video Ratio 1:1">
            <OneIsToOne />
          </ComponentCard>
        </div>
      </div>
    </>
  );
}

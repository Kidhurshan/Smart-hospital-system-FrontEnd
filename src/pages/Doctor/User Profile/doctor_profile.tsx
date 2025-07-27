import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import UserInfoCard from "../../../components/components_Doctor/UserInfoCard_Doctor";
import PageMeta from "../../../components/common_components/PageMeta";
import { useParams } from "react-router";

export default function UserProfiles() {
  const {role} = useParams();
  console.log("Role:: ", role);
  
  return (
    <>
      <PageMeta
        title="Profile Dashboard"
        description="This is React.js Profile Dashboard page"
      />
      <PageBreadcrumb pageTitle="Profile" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserInfoCard />

        </div>
      </div>
    </>
  );
}

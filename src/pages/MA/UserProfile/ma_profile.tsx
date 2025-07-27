import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import UserInfoCard from "../../../components/components_MA/UserInfoCard_MA";
import PageMeta from "../../../components/common_components/PageMeta";

export default function UserProfiles() {
  return (
    <>
      <PageMeta
        title="Profile Dashboard"
        description="Profile Dashboard page"
      />
      <PageBreadcrumb pageTitle="User Profile" />
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

import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import UserInfoCard from "../../../components/components_Staff/UserInfoCard_Staff";
import PageMeta from "../../../components/common_components/PageMeta";

export default function UserProfiles() {
  return (
    <>
      <PageMeta
        title="Staff Profile "
        description="This is Staff Profile "
      />
      <PageBreadcrumb pageTitle="User Profile" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Staff Profile
        </h3>
        <div className="space-y-6">
          <UserInfoCard />
        </div>
      </div>
    </>
  );
}

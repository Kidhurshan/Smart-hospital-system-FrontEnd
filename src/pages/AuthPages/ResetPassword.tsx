import PageMeta from "../../components/common_components/PageMeta";
import AuthLayout from "./AuthPageLayout";
import ResetPassword from "../../components/auth_components/ResetPassword";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="React.js SignUp Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js SignUp Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <ResetPassword />
      </AuthLayout>
    </>
  );
}

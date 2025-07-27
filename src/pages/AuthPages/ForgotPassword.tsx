import PageMeta from "../../components/common_components/PageMeta";
import AuthLayout from "./AuthPageLayout";
import ForgotPasswordForm from "../../components/auth_components/ForgotPassword";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Forgot Password"
        description="This is forgot password Page"
      />
      <AuthLayout>
        <ForgotPasswordForm />
      </AuthLayout>
    </>
  );
}

import PageMeta from "../../components/common_components/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth_components/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="SignIn"
        description="This is SignIn Page"
      />
      <AuthLayout>
        <SignInForm role="employee"/>
      </AuthLayout>
    </>
  );
}

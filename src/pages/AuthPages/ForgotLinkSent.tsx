import PageMeta from "../../components/common_components/PageMeta";
import AuthLayout from "./AuthPageLayout";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "../../icons";

export default function ForgotLinkSent() {
  return (
    <>
      <PageMeta
        title="Forgot Password Sent"
        description="This is forgot password link sent page"
      />
      <AuthLayout>
        <SentLink />
      </AuthLayout>
    </>
  );
}


 function SentLink() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 sm:p-10">
        {/* Animation wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Password Reset Link Sent
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            We’ve sent a password reset link to your email. Please check your inbox and follow the instructions to reset your password.
          </p>

          <Link
            to="/signin"
            className="mt-6 inline-block text-brand-600 hover:text-brand-700 dark:text-brand-400 font-medium text-sm"
          >
            &larr; Back to Sign In
          </Link>
        </motion.div>
      </div>
    </div>
  );
}


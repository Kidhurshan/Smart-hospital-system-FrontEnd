import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../common_components/form_components/Label";
import Input from "../common_components/form_components/input/InputField";
import Checkbox from "../common_components/form_components/input/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { APP_ROUTES } from "../../constants/appRoutes";
import { APP_ROLE } from "../../constants/appRoles";
import {
  resetPassword,
  clearAuthError,
  clearAuthMessage,
} from "../../actions/authActions";
import { toast } from "react-toastify";
import PageMeta from "../common_components/PageMeta";
import AuthLayout from "../../pages/AuthPages/AuthPageLayout";

export default function ForgotResetPassword() {
  return (
    <>
      <PageMeta
        title="Forgot Password"
        description="This is forgot password Page"
      />
      <AuthLayout>
        <ForgotResetPasswordForm />
      </AuthLayout>
    </>
  );
}

function ForgotResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const { id } = useParams();

  const [token, role] = id.split("&role=");

  const params = {
    token,
    role,
  };

  const { user, error } = useSelector((state) => state.authState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();

    dispatch(resetPassword(formData, params));
  };

  useEffect(() => {
    if (user) {
      toast("Password successfully reset.", {
        type: "success",
        position: "bottom-center",
      });
      const dashboardRoute =
        user.role === APP_ROLE.ADMIN
          ? APP_ROUTES.ADMIN_DASHBOARD
          : role === APP_ROLE.DOCTOR
          ? APP_ROUTES.DOCTOR_DASHBOARD
          : role === APP_ROLE.STAFF
          ? APP_ROUTES.STAFF_DASHBOARD
          : APP_ROUTES.PATIENT_DASHBOARD;

      navigate(dashboardRoute);
      return;
    }

    if (error) {
      toast(error, {
        type: "error",
        position: "bottom-center",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [user, navigate, role, error, dispatch]);

  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Reset Password
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Set your new Password!
            </p>
          </div>
          <div>
            <form>
              <div className="space-y-5">
                {/* <!-- Password --> */}

                <div>
                  <Label>
                    New Password<span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Enter your new password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => handleChange("password", e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                <div>
                  <Label>
                    Conform Password<span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) =>
                        handleChange("confirmPassword", e.target.value)
                      }
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>

                {/* <!-- Button --> */}
                <div>
                  <button
                    onClick={handleSave}
                    type="submit"
                    className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-red-700 sm:text-center">
                After resetting your password, you will be redirected to your
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

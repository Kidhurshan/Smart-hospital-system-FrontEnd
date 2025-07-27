import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../common_components/form_components/Label";
import Input from "../common_components/form_components/input/InputField";
import Checkbox from "../common_components/form_components/input/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { APP_ROUTES } from "../../constants/appRoutes";
import { APP_ROLE } from "../../constants/appRoles";
import {
  changePassword,
  clearAuthError,
  clearAuthMessage,
} from "../../actions/authActions";
import { toast } from "react-toastify";

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const { user, error, message } = useSelector((state) => state.authState);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(changePassword(formData));
  };

  const profileRoute =
    role === APP_ROLE.ADMIN
      ? APP_ROUTES.MA_PROFILE
      : role === APP_ROLE.DOCTOR
      ? APP_ROUTES.DOCTOR_PROFILE
      : role === APP_ROLE.STAFF
      ? APP_ROUTES.STAFF_PROFILE
      : APP_ROUTES.PATIENT_PROFILE;

  useEffect(() => {
    if (message) {
      toast(message, {
        type: "success",
        position: "bottom-center",
        onOpen: () => {
          dispatch(clearAuthMessage);
        },
      });

      setTimeout(() => {
        navigate(profileRoute);
      }, 1500);

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
  }, [user, navigate, role, error, message, dispatch]);

  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Reset Password
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Change your new Password!
            </p>
          </div>
          <div>
            <form>
              <div className="space-y-5">
                {/* <!-- Password --> */}
                <div>
                  <Label>
                    Old Password<span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Enter your old password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) =>
                        handleChange("oldPassword", e.target.value)
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
                <div>
                  <Label>
                    New Password<span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Enter your new password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) =>
                        handleChange("newPassword", e.target.value)
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
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Back to the ? {""}
                <Link
                  to={profileRoute}
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Profile
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

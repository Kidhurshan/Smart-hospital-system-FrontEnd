import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Label from "../common_components/form_components/Label";
import Input from "../common_components/form_components/input/InputField";
import Button from "../common_components/ui_components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  forgotPassword,
  clearAuthError,
  clearAuthSuccess,
} from "../../actions/authActions";
import { APP_ROUTES } from "../../constants/appRoutes";
import { toast } from "react-toastify";

export default function SignInForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role");
  const { loading, error, success } = useSelector((state) => state.authState);

  const [formData, setFormData] = useState({
    role,
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (formData.email === "" && role === "employee") {
      toast("Please enter email", {
        type: "error",
        position: "bottom-center",
      });
      return;
    }
    if (formData.phone === "" && role === "patient") {
      toast("Please enter email", {
        type: "error",
        position: "bottom-center",
      });
      return;
    }

    dispatch(forgotPassword(formData));
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      toast(error, {
        type: "error",
        position: "bottom-center",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
    if (success) {
      dispatch(clearAuthSuccess);
      navigate("/forgot_password_success");
    }
  }, [error, dispatch, navigate, success]);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Forgot Password
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email to change the password!
            </p>
          </div>
          <div>
            <form>
              <div className="space-y-6">
                {role === "employee" ? (
                  <div>
                    <Label>
                      Email <span className="text-error-500">*</span>{" "}
                    </Label>
                    <Input
                      placeholder="info@gmail.com"
                      type="email"
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </div>
                ) : (
                  <div>
                    <Label>
                      Phone <span className="text-error-500">*</span>{" "}
                    </Label>
                    <Input
                      placeholder="+94XXXXXXXXX"
                      type="tel"
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </div>
                )}

                <div>
                  <Button className="w-full" size="sm" onClick={handleSave}>
                    Submit
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Go back to {""}
                <Link
                  to={
                    role === "employee"
                      ? APP_ROUTES.SIGNIN
                      : APP_ROUTES.SIGNIN_PATIENT
                  }
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

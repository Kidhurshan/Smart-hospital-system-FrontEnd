import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../common_components/form_components/Label";
import Input from "../common_components/form_components/input/InputField";
import Checkbox from "../common_components/form_components/input/Checkbox";
import Button from "../common_components/ui_components/button/Button";
import { login, clearAuthError } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { APP_ROUTES } from "../../constants/appRoutes";
import { APP_ROLE } from "../../constants/appRoles";

export default function SignInForm({ role }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, isAuthenticated, user } = useSelector(
    (state) => state.authState
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("CALLING LOGIN API");
    console.log(loading);

    if (!email && role === "employee") {
      toast("Please enter your email", {
        type: "error",
        position: "bottom-center",
      });
      return;
    } else if (!phone && role === "patient") {
      toast("Please enter your phone number", {
        type: "error",
        position: "bottom-center",
      });
      return;
    } else if (!password) {
      toast("Please enter your password", {
        type: "error",
        position: "bottom-center",
      });
      return;
    } else if (!isChecked) {
      toast("Please accept the terms & conditions", {
        type: "error",
        position: "bottom-center",
      });
      return;
    } else {
      dispatch(login(email, phone, password, role));
    }

    console.log(loading);
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === APP_ROLE.ADMIN) {
        navigate(APP_ROUTES.ADMIN_DASHBOARD);
      } else if (user.role === APP_ROLE.DOCTOR) {
        navigate(APP_ROUTES.DOCTOR_DASHBOARD);
      } else if (user.role === APP_ROLE.STAFF) {
        navigate(APP_ROUTES.STAFF_DASHBOARD);
      } else if (user.role === APP_ROLE.PATIENT) {
        navigate(APP_ROUTES.PATIENT_DASHBOARD);
      }
      console.log(user.role);
    }

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
  }, [error, isAuthenticated, dispatch]);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>
          <div>
            <form onSubmit={submitHandler}>
              <div className="space-y-6">
                {role === "employee" ? (
                  <div>
                    <Label>
                      Email <span className="text-error-500">*</span>{" "}
                    </Label>
                    <Input
                      placeholder="info@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                ) : (
                  <div>
                    <Label>
                      Phone <span className="text-error-500">*</span>{" "}
                    </Label>
                    <Input
                      type="tel"
                      placeholder="+94XXXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                )}
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                <div className="mt-5">
                  <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                    Did you forgot the password? {""}
                    <Link
                      to={`/forgot_password?role=${role}`}
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                    >
                      Forgot password
                    </Link>
                  </p>
                </div>

                <div>
                  <Button className="w-full" size="sm" disabled={loading}>
                    Sign in
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
                      By creating an account means you agree to the{" "}
                      <span className="text-gray-800 dark:text-white/90">
                        Terms and Conditions,
                      </span>{" "}
                      and our{" "}
                      <span className="text-gray-800 dark:text-white">
                        Privacy Policy
                      </span>
                    </p>
                  </div>
                </div>
                {role === "patient" ? <div className="mt-20">
                  <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-center">
                    Management login?{" "}
                    <Link
                      to={APP_ROUTES.SIGNIN}
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                    >
                      Access here
                    </Link>
                  </p>
                </div> : <div className="mt-20">
                  <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-center">
                    Are you patient?{" "}
                    <Link
                      to={APP_ROUTES.SIGNIN_PATIENT}
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                    >
                      Login here
                    </Link>
                  </p>
                </div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

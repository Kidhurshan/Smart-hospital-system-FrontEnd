import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import PageBreadcrumb from "../../../../components/common_components/PageBreadCrumb";
import PageMeta from "../../../../components/common_components/PageMeta";
import ComponentCard from "../../../../components/common_components/ComponentCard";
import Label from "../../../../components/common_components/form_components/Label";
import Input from "../../../../components/common_components/form_components/input/InputField";
import Select from "../../../../components/common_components/form_components/Select";
import PhoneInput from "../../../../components/common_components/form_components/group-input/PhoneInput";
import FileInput from "../../../../components/common_components/form_components/input/FileInput";
import { CalenderIcon, EnvelopeIcon } from "../../../../icons";
import Flatpickr from "react-flatpickr";
import Button from "../../../../components/common_components/ui_components/button/Button";
import { CheckCircleIcon, AlertIcon } from "../../../../icons";
import { registerDoctor } from "../../../../actions/MA_Actions/usersActions.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  clearAuthError,
  clearAuthMessage,
} from "../../../../actions/authActions.js";

import { APP_ROUTES } from "../../../../constants/appRoutes.js";

/* Main FormElements Component */
export default function FormElements() {
  const { error, loading, message } = useSelector((state) => state.authState);

  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    dob: "",
    nic: "",
    address: "",
    yearOfExperience: "",
    email: "",
    phone: "",
  });

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    dispatch(registerDoctor(formData));
  };

  const genderOptions = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "other", label: "other" },
  ];

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const countries = [{ code: "SL", label: "+94" }];

  useEffect(() => {
    if (error) {
      const er = error.split(",");

      console.log(error);
      toast(er.length > 1 ? "Please fill all the fields" : error, {
        type: "error",
        position: "bottom-center",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
    if (message) {
      console.log(message);
      toast(message, {
        type: "success",
        position: "bottom-center",
        onOpen: () => {
          dispatch(clearAuthMessage);
        },
      });
      navigate("/ma_tables_doctor");
      return;
    }
  }, [error, message]);

  return (
    <div>
      <PageMeta title="Doctor Register Form" description="Register Form" />
      <PageBreadcrumb pageTitle="Register new Doctor" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="">
            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="nic">NIC</Label>
                <Input
                  type="text"
                  id="nic"
                  onChange={(e) => handleChange("nic", e.target.value)}
                />
              </div>
              <div>
                <Label>Gender</Label>
                <Select
                  options={genderOptions}
                  placeholder="Select an option"
                  onChange={(val) => handleChange("sex", val)}
                  className="dark:bg-dark-900"
                />
              </div>
              <div>
                <Label htmlFor="dob">Date of Birth</Label>
                <div className="relative w-full flatpickr-wrapper">
                  <Flatpickr
                    options={{ dateFormat: "Y-m-d" }}
                    onChange={(e) =>
                      handleChange("dob", e[0].toLocaleDateString())
                    }
                    placeholder="Select an option"
                    className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
                  />
                  <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                    <CalenderIcon className="size-6" />
                  </span>
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  id="address"
                  onChange={(e) => handleChange("address", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="years">Years of Experience</Label>
                <Input
                  type="number"
                  id="years"
                  onChange={(e) =>
                    handleChange("yearOfExperience", e.target.value)
                  }
                />
              </div>
            </div>
          </ComponentCard>
        </div>

        <div className="space-y-6">
          <ComponentCard title="">
            <div className="space-y-6">
              <div>
                <Label>Email</Label>
                <div className="relative">
                  <Input
                    placeholder="info@gmail.com"
                    type="text"
                    className="pl-[62px]"
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                    <EnvelopeIcon className="size-6" />
                  </span>
                </div>
              </div>
              {/* <div>
                <Label>Password Input</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                    ) : (
                      <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                    )}
                  </button>
                </div>
              </div> */}
              <div>
                <Label>Phone (optional)</Label>
                <PhoneInput
                  selectPosition="start"
                  countries={countries}
                  placeholder="+94"
                  onChange={(val) => handleChange("phone", val)}
                />
              </div>
              {/* <div>
                <Label>Upload file</Label>
                <FileInput onChange={(e) => handleChange("file", e.target.files?.[0])} className="custom-class" />
              </div> */}
            </div>
          </ComponentCard>

          {/* Submit & Back Buttons */}
          <div className="flex items-center gap-5 ml-15">
            <Button
              disabled={loading}
              size="sm"
              variant="outline"
              startIcon={<CheckCircleIcon className="size-5" />}
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Link to={APP_ROUTES.DOCTOR_TABLE_PAGE} className="DoctorTable">
              <Button
                disabled={loading}
                size="sm"
                variant="outline"
                startIcon={<AlertIcon className="size-5" />}
              >
                Go Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

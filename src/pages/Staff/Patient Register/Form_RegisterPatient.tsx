import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import PageMeta from "../../../components/common_components/PageMeta";
import ComponentCard from "../../../components/common_components/ComponentCard";
import Label from "../../../components/common_components/form_components/Label";
import Input from "../../../components/common_components/form_components/input/InputField";
import Select from "../../../components/common_components/form_components/Select";
import PhoneInput from "../../../components/common_components/form_components/group-input/PhoneInput";
import { getAllUsers } from "../../../actions/usersActions";
import {
  CalenderIcon,
  EyeCloseIcon,
  EyeIcon,
  EnvelopeIcon,
} from "../../../icons";
import Flatpickr from "react-flatpickr";
import Button from "../../../components/common_components/ui_components/button/Button";
import { CheckCircleIcon, AlertIcon } from "../../../icons";
import { useDispatch, useSelector } from "react-redux";
import { registerPatient } from "../../../actions/Staff_Actions/patientActions.js";
import {
  clearAuthError,
  clearAuthMessage,
} from "../../../actions/authActions.js";
import { toast } from "react-toastify";
import { APP_ROUTES } from "../../../constants/appRoutes";

/* DefaultInputs Component */
function DefaultInputs({ handleChange, dateOfBirth, handleDateChange }) {
  const options = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "other", label: "other" },
  ];

  return (
    <ComponentCard title="">
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Full Name</Label>
          <Input
            type="text"
            id="input"
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="input">NIC</Label>
          <Input
            type="text"
            id="input"
            onChange={(e) => handleChange("nic", e.target.value)}
          />
        </div>
        <div>
          <Label>Gender</Label>
          <Select
            options={options}
            placeholder="Select an option"
            onChange={(val) => handleChange("sex", val)}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <Label htmlFor="datePicker">Date of birth</Label>
          <div className="relative w-full flatpickr-wrapper">
            <Flatpickr
             
              onChange={(e)=> handleChange('dob', e[0].toLocaleDateString())}
              options={{ dateFormat: "Y-m-d" }}
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
      </div>
    </ComponentCard>
  );
}

/* InputGroup Component */
function InputGroup({ handleChange }) {
  const countries = [{ code: "SL", label: "+94" }];
  const handlePhoneNumberChange = (phoneNumber: string) => {
    console.log("Updated phone number:", phoneNumber);
    handleChange("phone", phoneNumber);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };
  return (
    <ComponentCard title="">
      <div className="space-y-6">
        <div>
          <Label>Email (optional)</Label>
          <div className="relative">
            <Input
              placeholder="info@gmail.com"
              type="text"
              className="pl-[62px]"
              onChange={(val) => handleChange("email", val.target.value)}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <EnvelopeIcon className="size-6" />
            </span>
          </div>
        </div>

        <div>
          <Label>Phone</Label>
          <PhoneInput
            selectPosition="start"
            countries={countries}
            placeholder="+94"
            onChange={handlePhoneNumberChange}
          />
        </div>
        {/* <div>
          <Label>Upload file</Label>
          <FileInput onChange={handleFileChange} className="custom-class" />
        </div> */}
      </div>
    </ComponentCard>
  );
}

/* Main FormElements Component */
export default function FormElements() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, message } = useSelector((state) => state.authState);
  

  const [dateOfBirth, setDateOfBirth] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    dob: "",
    nic: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleDateChange = (date: Date[]) => {
    setDateOfBirth(date[0].toLocaleDateString());
    console.log(dateOfBirth);
    
    handleChange("dob", dateOfBirth);
  };

  const handleChange = (field: string, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    dispatch(registerPatient(formData));
  };

  useEffect(() => {
    if (error) {
      const er = error.split(",");

      console.log(error);
      toast(er.length > 1 ? "Please fill the feilds" : error, {
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
      navigate(APP_ROUTES.STAFF_HOME);
      dispatch(getAllUsers);
      return;
    }
  }, [error, message]);

  return (
    <div>
      <PageMeta title="Patient Register Form" description="Register Form" />
      <PageBreadcrumb pageTitle="Register new Patient" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs
            handleChange={handleChange}
            dateOfBirth={dateOfBirth}
            handleDateChange={handleDateChange}
          />
        </div>
        <div className="space-y-6">
          <InputGroup handleChange={handleChange} />
          <div className="flex items-center gap-5 ml-15">
            <Button
              size="sm"
              variant="outline"
              startIcon={<CheckCircleIcon className="size-5" />}
              type="submit"
              onClick={handleSubmit}
            >
              Register
            </Button>
            <Link to={APP_ROUTES.STAFF_HOME} className="DoctorTable">
              <Button
                size="sm"
                variant="outline"
                startIcon={<AlertIcon className="size-5" />}
              >
                Clear
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Button Section */}
    </div>
  );
}

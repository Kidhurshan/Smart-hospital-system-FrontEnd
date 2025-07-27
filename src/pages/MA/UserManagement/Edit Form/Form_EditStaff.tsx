import React, { useState } from "react";
import { Link } from "react-router";
import PageBreadcrumb from "../../../../components/common_components/PageBreadCrumb";
import PageMeta from "../../../../components/common_components/PageMeta";
import ComponentCard from "../../../../components/common_components/ComponentCard";
import Label from "../../../../components/common_components/form_components/Label";
import Input from "../../../../components/common_components/form_components/input/InputField";
import Select from "../../../../components/common_components/form_components/Select";
import PhoneInput from "../../../../components/common_components/form_components/group-input/PhoneInput";
import FileInput from "../../../../components/common_components/form_components/input/FileInput";
import { CalenderIcon, EyeCloseIcon, EyeIcon, EnvelopeIcon } from "../../../../icons";
import Flatpickr from "react-flatpickr";
import Button from "../../../../components/common_components/ui_components/button/Button";
import { CheckCircleIcon, AlertIcon } from "../../../../icons";

/* DefaultInputs Component */
function DefaultInputs() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const options = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "other", label: "other" },
  ];

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const handleDateChange = (date: Date[]) => {
    setDateOfBirth(date[0].toLocaleDateString());
  };

  return (
    <ComponentCard title="">
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Full Name</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label htmlFor="input">NIC</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label>Gender</Label>
          <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <Label htmlFor="datePicker">Date Picker Input</Label>
          <div className="relative w-full flatpickr-wrapper">
            <Flatpickr
              value={dateOfBirth}
              onChange={handleDateChange}
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
          <Label htmlFor="input">Years of Work</Label>
          <Input type="text" id="input" />
        </div>
      </div>
    </ComponentCard>
  );
}

/* InputGroup Component */
function InputGroup() {
  const [showPassword, setShowPassword] = useState(false);
  const countries = [{ code: "SL", label: "+94" }];
  const handlePhoneNumberChange = (phoneNumber: string) => {
    console.log("Updated phone number:", phoneNumber);
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
          <Label>Email</Label>
          <div className="relative">
            <Input
              placeholder="info@gmail.com"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <EnvelopeIcon className="size-6" />
            </span>
          </div>
        </div>
        <div>
          <Label>Password Input</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
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
        <div>
          <Label>Upload file</Label>
          <FileInput onChange={handleFileChange} className="custom-class" />
        </div>
      </div>
    </ComponentCard>
  );
}

/* Main FormElements Component */
export default function FormElements() {
  return (
    <div>
      <PageMeta title="Staff Edit Form" description="Edit Form" />
      <PageBreadcrumb pageTitle="Edit Staff Details" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
        </div>
        <div className="space-y-6">
          <InputGroup />
          <div className="flex items-center gap-5 ml-15">
            <Button size="sm" variant="outline" startIcon={<CheckCircleIcon className="size-5" />} type="submit">
              Submit
            </Button>
            <Link to="/ma_tables_staff" className="DoctorTable">
              <Button size="sm" variant="outline" startIcon={<AlertIcon className="size-5" />}>
                Go Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Button Section */}
      
    </div>
  );
}

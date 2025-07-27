import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import PageMeta from "../../../components/common_components/PageMeta";
import ComponentCard from "../../../components/common_components/ComponentCard";
import Label from "../../../components/common_components/form_components/Label";
import FileInput from "../../../components/common_components/form_components/input/FileInput";
import Button from "../../../components/common_components/ui_components/button/Button";
import { CalenderIcon, CheckCircleIcon, AlertIcon } from "../../../icons";
import { useDispatch, useSelector } from "react-redux";
import Flatpickr from "react-flatpickr";
import { toast } from "react-toastify";
import {
  clearReportError,
  addMedicalReport,
  clearReportSuccess,
} from "../../../actions/reportActions";
import { APP_ROUTES } from "../../../constants/appRoutes";

function InputGroup() {
  const { patients } = useSelector((state) => state.usersState);
  const [reportName, setReportName] = useState("");
  const [reportDate, setReportDate] = useState(new Date());
  const [file, setFile] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const { error, success } = useSelector((state) => state.reportState);

  const patient = patients?.find((user) => user._id === id);
  const name = patient?.name ?? "-";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  const handleSubmit = () => {
    const formData = {
      name: reportName,
      date: reportDate,
      patientId: id,
      report: file,
    };

    dispatch(addMedicalReport(formData));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const er = error.split(",");
      console.log(error);
      toast(er.length > 1 ? "Please fill all the fields" : error, {
        type: "error",
        position: "bottom-center",
        onOpen: () => {
          dispatch(clearReportError());
        },
      });
      return;
    } else if (success) {
      toast("Successfully assigned", {
        type: "success",
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        onClose: () => {
          navigate(APP_ROUTES.ASSIGN_REPORT_TABLE);
          window.location.reload();
        },
      });

      return;
    }
  }, [error, success, dispatch, navigate]);

  return (
    <ComponentCard title="">
      <PageMeta title="Assigning Report" description="Assigning Report" />
      <PageBreadcrumb pageTitle="Assigning Patient report" />

      {/* Patient Name Card */}
      <div className="mx-auto w-1/2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-end justify-between mt-5">
            <div className="text-center w-full">
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                Patient : {name}
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Upload the Medical record Pdf here
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Report Details Card */}
      <div className="mx-auto w-1/2 mt-8">
        <div className="space-y-6">
          <div className="flex flex-col">
            <Label>Medical Report Name</Label>
            <input
              type="text"
              placeholder="Enter report name"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <Label>Date</Label>
            <div className="relative w-full flatpickr-wrapper">
              <Flatpickr
                value={reportDate}
                onChange={(date) => setReportDate(date[0])}
                options={{ dateFormat: "Y-m-d" }}
                placeholder="Select an option"
                className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
              />
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <CalenderIcon className="size-6" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* File Upload Card */}
      <div className="mx-auto w-1/2 mt-8">
        <div className="space-y-12">
          <div className="col-span-12 space-y-6 xl:col-span-12 flex justify-center">
            <Label>Upload file</Label>
            <FileInput onChange={handleFileChange} className="custom-class" />
          </div>
        </div>
      </div>

      {/* Button Group */}
      <div className="mx-auto w-1/2 mt-8">
        <div className="flex items-center gap-5 justify-center">
          <Button
            onClick={handleSubmit}
            size="sm"
            variant="outline"
            startIcon={<CheckCircleIcon className="size-5" />}
            type="submit"
          >
            Submit
          </Button>
          <Link to="/staff_assign_report_table" className="DoctorTable">
            <Button
              size="sm"
              variant="outline"
              startIcon={<AlertIcon className="size-5" />}
            >
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    </ComponentCard>
  );
}

export default InputGroup;

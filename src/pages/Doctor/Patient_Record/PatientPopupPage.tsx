import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import PageMeta from "../../../components/common_components/PageMeta";
import Label from "../../../components/common_components/form_components/Label";
import Select from "../../../components/common_components/form_components/Select";
import Button from "../../../components/common_components/ui_components/button/Button";
import { BoxIcon } from "../../../icons";
import { useDispatch } from "react-redux";
import { addReason } from "../../../actions/usersActions";
import { usePatientContext } from "../../../context/PatientContext";

export default function Patient_Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [selectedReason, setSelectedReason] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");
  const [formData, setFormData] = useState({
    reason: "",
    patientId: "",
  });
  const { setPatientId } = usePatientContext();

  // Assume doctorId and patientId are passed from the previous page via location state.
  const { doctorId, patientId } = location.state || {};

  const options = [
    { value: "Direct Patient Care", label: "Direct Patient Care" },
    {
      value: "Incorrect Patient Selection",
      label: "Incorrect Patient Selection",
    },
    { value: "Audit", label: "Audit" },
    { value: "Legal Inquiry", label: "Legal Inquiry" },
  ];

  const handleSelectChange = (value: string) => {
    setSelectedReason(value);
    setFormData({
      reason: value,
      patientId: id,
    });
    console.log("Selected value:", value);
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (selectedReason) {
      setPatientId(id);
      console.log("patientId", id);

      dispatch(addReason(formData));

      setIsPopupOpen(false);
      navigate(
        `/patient_recordPage/medicalPastHistory?patientId=${id}&patient=${name}`,
        {
          state: { doctorId, patientId, reason: selectedReason },
        }
      );
    } else {
      alert("Please select a reason");
    }
  };

  return (
    <div>
      <PageMeta title="Patient Record" description="Patient Record Page" />
      <PageBreadcrumb pageTitle="Patient Record" />

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70">
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
            <h3 className="mb-4 text-center font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
              Please Select Reason
            </h3>
            <div className="space-y-6">
              <div>
                <Label>Select Reason</Label>
                <Select
                  options={options}
                  placeholder="Select Option"
                  onChange={handleSelectChange}
                  className="dark:bg-dark-900"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <Button
                size="sm"
                variant="outline"
                startIcon={<BoxIcon className="size-5" />}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

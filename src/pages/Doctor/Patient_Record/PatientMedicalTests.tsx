import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageBreadcrumb from "../../../components/common_components/PageBreadCrumb";
import ComponentCard from "../../../components/common_components/ComponentCard";
import PageMeta from "../../../components/common_components/PageMeta";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/common_components/ui_components/table";
import Button from "../../../components/common_components/ui_components/button/Button";
import { BoxCubeIcon } from "../../../icons";
import { addTest, allTests } from "../../../actions/reportActions";
import { usePatientContext } from "../../../context/PatientContext";

// Mapping of test type to table column headers
const columnsMapping = {
  BMI: ["Date", "Weight (Kg)", "Height (m)", "BMI"],
  BloodPressure: ["Date", "Systolic", "Diastolic"],
  BloodSugar: ["Date", "Fasting", "Postprandial"],
  Cholesterol: [
    "Date",
    "Total Cholesterol",
    "LDL",
    "HDL",
    "Triglycerides",
  ],
  BloodCount: [
    "Date",
    "RBC",
    "WBC",
    "Hemoglobin",
    "Hematocrit",
    "Platelets",
  ],
  LiverFunction: ["Date", "ALT", "AST", "Bilirubin"],
  Thyroid: ["Date", "TSH", "T3", "T4"],
  Other: ["Date", "Checkup Test", "Test Value"],
};

const testTypes = [
  { value: "BMI", label: "BMI Test" },
  { value: "BloodPressure", label: "Blood Pressure Test" },
  { value: "BloodSugar", label: "Blood Sugar Test" },
  { value: "Cholesterol", label: "Cholesterol Test" },
  { value: "BloodCount", label: "Blood Count Test" },
  { value: "LiverFunction", label: "Liver Function Test" },
  { value: "Thyroid", label: "Thyroid Test" },
  { value: "Other", label: "Other Test" },
];

// Mapping to convert test type from the front‑end to the expected backend value
const backendTestMapping = {
  BMI: "bmi",
  BloodPressure: "bloodPressure",
  BloodSugar: "bloodSugar",
  Cholesterol: "cholesterol",
  BloodCount: "bloodCount",
  LiverFunction: "liverFunction",
  Thyroid: "thyroid",
  Other: "other",
};

// Mapping to convert backend test 'name' to display-friendly type
const displayMapping = {
  bmi: "BMI",
  bloodPressure: "BloodPressure",
  bloodSugar: "BloodSugar",
  cholesterol: "Cholesterol",
  bloodCount: "BloodCount",
  liverFunction: "LiverFunction",
  thyroid: "Thyroid",
  other: "Other",
};

// Helper function to transform a single test record from backend format 
// to the format expected by our front-end table.
function transformTestRow(backendTest) {
  // Date field for every record:
  const rowData = {
    Date: backendTest.createdAt
      ? new Date(backendTest.createdAt).toISOString().split("T")[0]
      : "",
  };

  // Transform the values based on the test name
  switch (backendTest.name) {
    case "bmi":
      rowData["Weight (Kg)"] = backendTest.weight || "";
      rowData["Height (m)"] = backendTest.height || "";
      rowData["BMI"] = backendTest.bmi || "";
      break;
    case "bloodPressure":
      rowData["Systolic"] = backendTest.systolic || "";
      rowData["Diastolic"] = backendTest.diastolic || "";
      break;
    case "bloodSugar":
      rowData["Fasting"] = backendTest.fasting || "";
      rowData["Postprandial"] = backendTest.postprandial || "";
      break;
    case "cholesterol":
      rowData["Total Cholesterol"] = backendTest.totalCholestrol || "";
      rowData["LDL"] = backendTest.ldl || "";
      rowData["HDL"] = backendTest.hdl || "";
      rowData["Triglycerides"] = backendTest.triglycerides || "";
      break;
    case "bloodCount":
      rowData["RBC"] = backendTest.rbc || "";
      rowData["WBC"] = backendTest.wbc || "";
      rowData["Hemoglobin"] = backendTest.hemoglobin || "";
      rowData["Hematocrit"] = backendTest.hematocrit || "";
      rowData["Platelets"] = backendTest.platelets || "";
      break;
    case "liverFunction":
      rowData["ALT"] = backendTest.alt || "";
      rowData["AST"] = backendTest.ast || "";
      rowData["Bilirubin"] = backendTest.bilirubin || "";
      break;
    case "thyroid":
      rowData["TSH"] = backendTest.tsh || "";
      rowData["T3"] = backendTest.t3 || "";
      rowData["T4"] = backendTest.t4 || "";
      break;
    case "other":
    default:
      rowData["Checkup Test"] = backendTest.checkupTest || "";
      rowData["Test Value"] = backendTest.testValue || "";
      break;
  }
  // Keep a reference to the original ID for the key prop.
  rowData._id = backendTest._id || backendTest.id;
  return rowData;
}

// Component to display a table for a given test type group.
function DynamicTestTable({ title, tests, type }) {
  const columns = columnsMapping[type] || columnsMapping.Other;
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[600px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-gray-600">
              <TableRow>
                {columns.map((col) => (
                  <TableCell
                    key={col}
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-xs dark:text-gray-300"
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-gray-700">
              {tests.map((test) => (
                <TableRow
                  key={test._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {columns.map((col) => (
                    <TableCell
                      key={col}
                      className="px-5 py-4 text-left text-gray-800 text-sm dark:text-white"
                    >
                      {test[col] || ""}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

// Component to add a new test record.
function NewTestForm() {
  const dispatch = useDispatch();
  const { patientId } = usePatientContext();
  const [selectedTestType, setSelectedTestType] = useState("");
  const [formData, setFormData] = useState({});

  // Get the column definitions for the selected test type.
  const columns = useMemo(() => {
    if (!selectedTestType) return [];
    return columnsMapping[selectedTestType] || columnsMapping.Other;
  }, [selectedTestType]);

  // Reset the form when the test type changes.
  useEffect(() => {
    if (selectedTestType) {
      const initial = {};
      columns.forEach((col) => {
        initial[col] =
          col === "Date"
            ? new Date().toISOString().split("T")[0]
            : "";
      });
      setFormData(initial);
    }
  }, [selectedTestType, columns]);

  // Automatically compute BMI when test type is BMI.
  const computedBMI = useMemo(() => {
    if (
      selectedTestType === "BMI" &&
      formData["Weight (Kg)"] &&
      formData["Height (m)"]
    ) {
      const weight = parseFloat(formData["Weight (Kg)"]);
      const height = parseFloat(formData["Height (m)"]);
      if (weight > 0 && height > 0) {
        return (weight / (height * height)).toFixed(2);
      }
    }
    return "";
  }, [selectedTestType, formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submission, dispatch addTest and then re-fetch tests.
  const handleSubmit = async () => {
    if (!selectedTestType) {
      alert("Please select a test type.");
      return;
    }
    let dataToSubmit = {
      patientId,
      name: backendTestMapping[selectedTestType],
    };

    if (selectedTestType === "BMI") {
      dataToSubmit = {
        ...dataToSubmit,
        weight: formData["Weight (Kg)"],
        height: formData["Height (m)"],
        bmi: computedBMI,
      };
    } else if (selectedTestType === "BloodPressure") {
      dataToSubmit = {
        ...dataToSubmit,
        systolic: formData["Systolic"],
        diastolic: formData["Diastolic"],
      };
    } else if (selectedTestType === "BloodSugar") {
      dataToSubmit = {
        ...dataToSubmit,
        fasting: formData["Fasting"],
        postprandial: formData["Postprandial"],
      };
    } else if (selectedTestType === "Cholesterol") {
      dataToSubmit = {
        ...dataToSubmit,
        totalCholestrol: formData["Total Cholesterol"],
        ldl: formData["LDL"],
        hdl: formData["HDL"],
        triglycerides: formData["Triglycerides"],
      };
    } else if (selectedTestType === "BloodCount") {
      dataToSubmit = {
        ...dataToSubmit,
        rbc: formData["RBC"],
        wbc: formData["WBC"],
        hemoglobin: formData["Hemoglobin"],
        hematocrit: formData["Hematocrit"],
        platelets: formData["Platelets"],
      };
    } else if (selectedTestType === "LiverFunction") {
      dataToSubmit = {
        ...dataToSubmit,
        alt: formData["ALT"],
        ast: formData["AST"],
        bilirubin: formData["Bilirubin"],
      };
    } else if (selectedTestType === "Thyroid") {
      dataToSubmit = {
        ...dataToSubmit,
        tsh: formData["TSH"],
        t3: formData["T3"],
        t4: formData["T4"],
      };
    } else if (selectedTestType === "Other") {
      dataToSubmit = {
        ...dataToSubmit,
        checkupTest: formData["Checkup Test"],
        testValue: formData["Test Value"],
      };
    }

    // Dispatch the addTest action and then refresh the test table.
    await dispatch(addTest(dataToSubmit));
    dispatch(allTests({ patientId }));

    // Clear form fields after save.
    setSelectedTestType("");
    setFormData({});
  };

  return (
    <div className="mb-6 p-4 border rounded-lg bg-white dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-semibold dark:text-white">
        Add New Test
      </h2>
      <div className="mb-4">
        <label className="block mb-2 dark:text-white">Test Type</label>
        <select
          value={selectedTestType}
          onChange={(e) => setSelectedTestType(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        >
          <option value="">Select Test Type</option>
          {testTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      {selectedTestType && (
        <div className="grid grid-cols-2 gap-4">
          {columns.map((col) => (
            <div key={col}>
              <label className="block mb-1 dark:text-white">{col}</label>
              {selectedTestType === "BMI" && col === "BMI" ? (
                // For BMI test, show a read-only field with the computed BMI value.
                <input
                  type="text"
                  value={computedBMI}
                  disabled
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              ) : col === "Date" ? (
                <input
                  type="date"
                  name={col}
                  value={formData[col] || ""}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              ) : (
                <input
                  type="text"
                  name={col}
                  placeholder={col}
                  value={formData[col] || ""}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              )}
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <Button variant="outline" onClick={handleSubmit}>
          Save Test
        </Button>
      </div>
    </div>
  );
}

export default function MedicalTestsPage() {
  const dispatch = useDispatch();
  const { patientId } = usePatientContext();
  const { tests } = useSelector((state) => state.reportState);

  // Fetch tests when the component mounts or the patientId changes.
  useEffect(() => {
    if (patientId) {
      dispatch(allTests({ patientId }));
    }
  }, [dispatch, patientId]);

  // Group and transform tests using the helper so that the table displays correct fields.
  const groupedTests = useMemo(() => {
    const groups = {};
    if (tests && Array.isArray(tests)) {
      tests.forEach((test) => {
        // Convert the backend record to front-end row format.
        const testRow = transformTestRow(test);
        const typeKey = displayMapping[test.name] || "Other";
        if (!groups[typeKey]) {
          groups[typeKey] = [];
        }
        groups[typeKey].push(testRow);
      });
    }
    return groups;
  }, [tests]);

  return (
    <>
      <PageMeta
        title="Patients Test Tables"
        description="This is Test Records"
      />
      <PageBreadcrumb pageTitle="Patient Test Records" />
      <div className="space-y-6">
        <ComponentCard title="">
          {/* New Test Form to add test records */}
          <NewTestForm />
          {/* Render a DynamicTestTable for each test group */}
          {Object.keys(groupedTests).length > 0 ? (
            Object.keys(groupedTests).map((type) => {
              // Find the display label for the test type.
              const titleObj =
                testTypes.find((t) => t.value === type) || { label: type };
              return (
                <div key={type} className="mb-6">
                  <h2 className="mb-2 text-xl font-semibold dark:text-white">
                    {titleObj.label}
                  </h2>
                  <DynamicTestTable
                    title={titleObj.label}
                    type={type}
                    tests={groupedTests[type]}
                  />
                </div>
              );
            })
          ) : (
            <p className="dark:text-white">No tests available.</p>
          )}
        </ComponentCard>
      </div>
    </>
  );
}

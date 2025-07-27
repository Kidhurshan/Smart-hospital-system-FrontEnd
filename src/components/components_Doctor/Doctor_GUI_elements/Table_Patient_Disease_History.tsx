import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../common_components/ui_components/table";
import Button from "../../common_components/ui_components/button/Button";
import { BoxCubeIcon } from "../../../icons";
import {
  addMedicalHistory,
  allMedicalHistory,
  clearReportError,
} from "../../../actions/reportActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";



export default function DiseaseHistoryTable({ patientId }) {
  const [isAdding, setIsAdding] = useState(false);
  const { error, success, diseaseHistories } = useSelector((state) => state.reportState);

  const [newDisease, setNewDisease] = useState({
    name: "",
    patientId,
    type: "disease",
    year: 0,
    medication: "",
    note: "",
  });

  const params = {
    patientId,
  }

  const handleInputChange = (feild, value) => {
    setNewDisease({ ...newDisease, [feild]: value });
  };

  const dispatch = useDispatch();

  const handleSaveRow = () => {
    dispatch(addMedicalHistory(newDisease));
  };

  useEffect(() => {
    
    dispatch(allMedicalHistory(params));

    console.log("diseaseHistories", diseaseHistories);
    
  
    if (error) {
      const er = error.split(",");
      toast(er.length > 1 ? "Please fill all the fields" : error, {
        type: "error",
        position: "bottom-center",
        onOpen: () => {
          dispatch(clearReportError());
        },
      });
      return;
    }
  
    if (success) {
      dispatch(allMedicalHistory(params));
      setNewDisease({
        name: "",
        year: 0,
        medication: "",
        note: "",
        patientId,
        type: "disease",
      });
      setIsAdding(false);
    }
  }, [error, success]);
  

  return (
    <div className="space-y-4">
      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[600px]">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                  >
                    Disease Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                  >
                    How many Years
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                  >
                    Medications
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                  >
                    Notes
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {Array.isArray(diseaseHistories) && diseaseHistories.map((disease) => (
                  <TableRow
                    key={disease._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <TableCell className="px-5 py-4 text-left text-gray-800 text-theme-sm dark:text-white/90">
                      {disease.name}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm dark:text-gray-400">
                      {disease.year}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm dark:text-gray-400">
                      {disease.medication}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm dark:text-gray-400">
                      {disease.note}
                    </TableCell>
                  </TableRow>
                ))}
                {/* Inline adding row */}
                {isAdding && (
                  <TableRow className="bg-gray-100 dark:bg-gray-700">
                    <TableCell className="px-5 py-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Disease Name"
                        value={newDisease.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-5 py-4">
                      <input
                        type="text"
                        name="years"
                        placeholder="How many Years"
                        value={newDisease.year}
                        onChange={(e) =>
                          handleInputChange("year", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-5 py-4">
                      <input
                        type="text"
                        name="medications"
                        placeholder="Medications"
                        value={newDisease.medication}
                        onChange={(e) =>
                          handleInputChange("medication", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-5 py-4">
                      <input
                        type="text"
                        name="notes"
                        placeholder="Notes"
                        value={newDisease.note}
                        onChange={(e) =>
                          handleInputChange("note", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      />
                    </TableCell>
                  </TableRow>
                )}
                {/* Last row with ADD / SAVE button */}
                <TableRow>
                  <TableCell colSpan={4} className="px-5 py-4">
                    <div className="flex items-center justify-center gap-5">
                      {isAdding ? (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleSaveRow}
                        >
                          SAVE
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          startIcon={<BoxCubeIcon className="size-5" />}
                          onClick={() => setIsAdding(true)}
                        >
                          ADD
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

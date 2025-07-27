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
import { useDispatch, useSelector } from "react-redux";
import {
  addCheckup,
  allCheckups,
  clearReportError,
} from "../../../actions/reportActions";
import { toast } from "react-toastify";
import { usePatient, usePatientContext } from "../../../context/PatientContext";

export default function CheckupHistoryTable() {
  const { error, success, checkups } = useSelector(
    (state) => state.reportState
  );

  const { patientId } = usePatientContext();

  const [isAdding, setIsAdding] = useState(false);
  const [newCheckup, setNewCheckup] = useState({
    date: new Date().toISOString().split("T")[0],
    reason: "",
    patientId,
    note: "",
  });

  const params = {
    patientId,
  };

  const handleInputChange = (feild, value) => {
    setNewCheckup({ ...newCheckup, [feild]: value });
  };

  const dispatch = useDispatch();

  const handleSaveRow = () => {
    dispatch(addCheckup(newCheckup));
  };

  useEffect(() => {
    dispatch(allCheckups(params));

    console.log("patientId", patientId);

    if (error) {
      const er = error.split(",");
      toast(er.length > 1 ? "Please fill all the fields" : error, {
        type: "error",
        position: "bottom-center",
        onOpen: () => {
          dispatch(clearReportError);
        },
      });
      return;
    }

    if (success) {
      dispatch(allCheckups(params));
      setNewCheckup({
        reason: "",
        date: new Date().toISOString().split("T")[0],

        note: "",
        patientId,
      });
      setIsAdding(false);
    }
  }, [error, success, patientId]);

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
                    Date
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                  >
                    Checkup Reason
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
                {Array.isArray(checkups) &&
                  checkups.map((checkup) => (
                    
                    <TableRow
                      key={checkup._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <TableCell className="px-5 py-4 text-left text-gray-800 text-theme-sm dark:text-white/90">
                        {new Date(checkup.createdAt).toLocaleDateString("en-CA")}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm dark:text-gray-400">
                        {checkup.reason}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm dark:text-gray-400">
                        {checkup.note}
                      </TableCell>
                    </TableRow>
                  ))}
                {/* Inline adding row */}
                {isAdding && (
                  <TableRow className="bg-gray-100 dark:bg-gray-700">
                    <TableCell className="px-5 py-4">
                      <input
                        type="date"
                        name="date"
                        value={newCheckup.date}
                        onChange={(e) =>
                          handleInputChange("date", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-5 py-4">
                      <input
                        type="text"
                        name="reason"
                        placeholder="Checkup Reason"
                        value={newCheckup.reason}
                        onChange={(e) =>
                          handleInputChange("reason", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-5 py-4">
                      <input
                        type="text"
                        name="notes"
                        placeholder="Notes"
                        value={newCheckup.note}
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
                  <TableCell colSpan={3} className="px-5 py-4">
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

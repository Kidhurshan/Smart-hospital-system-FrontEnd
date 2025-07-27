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
  addMedicalHistory,
  allMedicalHistory,
  clearReportError,
} from "../../../actions/reportActions";
import { toast } from "react-toastify";

interface Surgery {
  id: number;
  name: string;
  year: number;
  notes: string;
}

export default function SurgicalHistoryTable({ patientId }) {
  const [isAdding, setIsAdding] = useState(false);
  const { error, success, surgicalHistories } = useSelector(
    (state) => state.reportState
  );
  const [newSurgery, setNewSurgery] = useState({
    name: "",
    patientId,
    type: "surgical",
    year: new Date().getFullYear(),
    note: "",
  });

  const params = {
    patientId,
  };

  const handleInputChange = (feild, value) => {
    setNewSurgery({ ...newSurgery, [feild]: value });
  };

  const dispatch = useDispatch();

  const handleSaveRow = () => {
    dispatch(addMedicalHistory(newSurgery));
  };

  useEffect(() => {
    dispatch(allMedicalHistory(params));

    console.log("diseaseHistories", surgicalHistories);

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
      setNewSurgery({
        name: "",
        year: new Date().getFullYear(),
        note: "",
        patientId,
        type: "surgical",
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
                    Name of Surgeries
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                  >
                    Year that happened
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
                {Array.isArray(surgicalHistories) &&
                  surgicalHistories.map((surgery) => (
                    <TableRow
                      key={surgery._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <TableCell className="px-5 py-4 text-left text-gray-800 text-theme-sm dark:text-white/90">
                        {surgery.name}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm dark:text-gray-400">
                        {surgery.year}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm dark:text-gray-400">
                        {surgery.note}
                      </TableCell>
                    </TableRow>
                  ))}
                {/* Row for inline adding */}
                {isAdding && (
                  <TableRow className="bg-gray-100 dark:bg-gray-700">
                    <TableCell className="px-5 py-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Surgery Name"
                        value={newSurgery.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-5 py-4">
                      <input
                        type="text"
                        name="year"
                        placeholder="Year"
                        value={newSurgery.year}
                        onChange={(e) =>
                          handleInputChange("year", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-5 py-4">
                      <input
                        type="text"
                        name="notes"
                        placeholder="Notes"
                        value={newSurgery.note}
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

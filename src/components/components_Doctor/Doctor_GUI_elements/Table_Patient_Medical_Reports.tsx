import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../common_components/ui_components/table";
import { DocsIcon } from "../../../icons";
import { PatientProvider, usePatientContext } from "../../../context/PatientContext";
import { useDispatch, useSelector } from "react-redux";
import { allMedicalReports } from "../../../actions/reportActions"

interface MedicalReport {
  id: number;
  reportName: string;
  date: string;
  submittedStaff: string;
  pdfUrl: string;
}

const initialTableData: MedicalReport[] = [
  {
    id: 1,
    reportName: "Blood Test Report",
    date: "2025-01-01",
    submittedStaff: "Dr. John Doe",
    pdfUrl: "/pdfs/report1.pdf",
  },
  {
    id: 2,
    reportName: "X-Ray Report",
    date: "2025-02-15",
    submittedStaff: "Dr. Jane Smith",
    pdfUrl: "/pdfs/report2.pdf",
  },
  {
    id: 3,
    reportName: "MRI Report",
    date: "2025-03-20",
    submittedStaff: "Dr. Emily Davis",
    pdfUrl: "/pdfs/report3.pdf",
  },
];

export default function MedicalReportsTable() {
 
  const [searchTerm, setSearchTerm] = useState("");
  const { patientId } = usePatientContext();
  const dispatch = useDispatch();
  const { medicalReports } = useSelector((state)=> state.reportState);

  const params = {
    patientId,
  }
  useEffect(()=>{
    dispatch(allMedicalReports(params));
  },[])

  // Filter reports by report name, date, or submitted staff
  const filteredData = medicalReports?.filter((report) => {
    const term = searchTerm.toLowerCase();
    return (
      report.name.toLowerCase().includes(term) ||
      report.createdAt.toLowerCase().includes(term) ||
      report.name.toLowerCase().includes(term)
    );
  });

  // Opens the pdf in a new browser tab
  const openPdf = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="space-y-4">
      {/* Centered Search Bar */}
      <div className="flex justify-center">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <svg
              className="fill-gray-500 dark:fill-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2a8 8 0 105.293 14.293l5.414 5.414 1.414-1.414-5.414-5.414A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-96 h-12 rounded-lg border border-gray-300 bg-white pl-12 pr-4 text-gray-700 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Medical Reports Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[600px]">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-gray-600">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-xs dark:text-gray-300"
                  >
                    Medical Report Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-xs dark:text-gray-300"
                  >
                    Date
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-xs dark:text-gray-300"
                  >
                    Submitted Staff
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-xs dark:text-gray-300"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-100 dark:divide-gray-700">
                {Array.isArray(filteredData) && filteredData.map((report) => (
                  <TableRow
                    key={report._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <TableCell className="px-5 py-4 text-left text-gray-800 text-sm dark:text-white">
                      {report.name}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-left text-gray-500 text-sm dark:text-gray-300">
                      {new Date(report.createdAt).toLocaleDateString("en-CA")}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-left text-gray-500 text-sm dark:text-gray-300">
                      {report.doctor.name}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-left">
                      <button
                        onClick={() => openPdf(report.report)}
                        className="p-1 hover:text-blue-500"
                        title="View PDF"
                      >
                        <DocsIcon className="w-5 h-5 text-gray-800 dark:text-white" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

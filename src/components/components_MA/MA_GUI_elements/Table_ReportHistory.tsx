import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../common_components/ui_components/table";

interface AccessHistory {
  id: number;
  staff: {
    image: string;
    name: string;
    email: string;
  };
  patient: {
    image: string;
    name: string;
    nic: string;
  };
  submitDate: string;
  submitTime: string;
  reason: string;
}

const initialTableData: AccessHistory[] = [
  {
    id: 1,
    staff: {
      image: "/images/user/user-16.jpg",
      name: "Staff Kidhu",
      email: "hospital2staff@gmail.com",
    },
    patient: {
      image: "/images/user/user-15.jpg",
      name: "Patient Kidhu",
      nic: "P987654321",
    },
    submitDate: "2025-03-25",
    submitTime: "10:00 AM",
    reason: "Routine",
  },
  {
    id: 2,
    staff: {
      image: "/images/user/user-18.jpg",
      name: "Staff Afzan",
      email: "hospital2staff2@gmail.com",
    },
    patient: {
      image: "/images/user/user-22.jpg",
      name: "Patient Bob",
      nic: "P123456789",
    },
    submitDate: "2025-03-26",
    submitTime: "2:30 PM",
    reason: "Routine",
  },
  {
    id: 3,
    staff: {
      image: "/images/user/user-17.jpg",
      name: "Staff Test",
      email: "hospital2staff3@gmail.com",
    },
    patient: {
      image: "/images/user/user-21.jpg",
      name: "Patient fahham",
      nic: "P546987312",
    },
    submitDate: "2025-04-26",
    submitTime: "1:30 PM",
    reason: "Routine",
  },
];

export default function AccessHistoryTable() {
  const [data] = useState<AccessHistory[]>(initialTableData);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the table data by the search term
  const filteredData = data.filter((history) => {
    const term = searchTerm.toLowerCase();
    return (
      history.staff.name.toLowerCase().includes(term) ||
      history.staff.email.toLowerCase().includes(term) ||
      history.patient.name.toLowerCase().includes(term) ||
      history.patient.nic.toLowerCase().includes(term) ||
      history.submitDate.toLowerCase().includes(term) ||
      history.submitTime.toLowerCase().includes(term) ||
      history.reason.toLowerCase().includes(term)
    );
  });

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
            className="w-96 h-12 rounded-lg border border-gray-300 bg-white pl-12 pr-4 text-gray-700 
                       focus:outline-none dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Access History Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white 
                      dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[600px]">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  {/* staff Name */}
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs 
                               dark:text-gray-400"
                  >
                    Staff Name
                  </TableCell>
                  {/* staff Email */}
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs 
                               dark:text-gray-400"
                  >
                    Staff Email
                  </TableCell>
                  {/* Patient Name */}
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs 
                               dark:text-gray-400"
                  >
                    Patient Name
                  </TableCell>
                  {/* Patient NIC */}
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs 
                               dark:text-gray-400"
                  >
                    Patient NIC
                  </TableCell>
                  {/* Access Date */}
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs 
                               dark:text-gray-400"
                  >
                    Submit Date
                  </TableCell>
                  {/* Access Time */}
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs 
                               dark:text-gray-400"
                  >
                    Submit Time
                  </TableCell>
                  {/* Reason */}
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs 
                               dark:text-gray-400"
                  >
                    Reason
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {filteredData.map((history) => (
                  <TableRow
                    key={history.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {/* staff Name with image */}
                    <TableCell className="px-5 py-4 text-left align-middle">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                          <img
                            width={40}
                            height={40}
                            src={history.staff.image}
                            alt={history.staff.name}
                          />
                        </div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {history.staff.name}
                        </span>
                      </div>
                    </TableCell>
                    {/* staff Email */}
                    <TableCell className="px-5 py-4 text-left align-middle text-gray-500 text-theme-sm dark:text-gray-400">
                      {history.staff.email}
                    </TableCell>
                    {/* Patient Name with image */}
                    <TableCell className="px-5 py-4 text-left align-middle">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                          <img
                            width={40}
                            height={40}
                            src={history.patient.image}
                            alt={history.patient.name}
                          />
                        </div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {history.patient.name}
                        </span>
                      </div>
                    </TableCell>
                    {/* Patient NIC */}
                    <TableCell className="px-5 py-4 text-left align-middle text-gray-500 text-theme-sm dark:text-gray-400">
                      {history.patient.nic}
                    </TableCell>
                    {/* Access Date */}
                    <TableCell className="px-5 py-4 text-left align-middle text-gray-500 text-theme-sm dark:text-gray-400">
                      {history.submitDate}
                    </TableCell>
                    {/* Access Time */}
                    <TableCell className="px-5 py-4 text-left align-middle text-gray-500 text-theme-sm dark:text-gray-400">
                      {history.submitTime}
                    </TableCell>
                    {/* Reason */}
                    <TableCell className="px-5 py-4 text-left align-middle text-gray-500 text-theme-sm dark:text-gray-400">
                      {history.reason}
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

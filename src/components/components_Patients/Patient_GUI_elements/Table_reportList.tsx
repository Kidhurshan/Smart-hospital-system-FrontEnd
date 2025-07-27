import { useState } from "react";
import { Link } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../common_components/ui_components/table";
import Badge from "../../common_components/ui_components/badge/Badge";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  age: number;
  nic: string;
  status: string;
}

const initialTableData: Order[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Web Designer",
    },
    age: 35,
    nic: "123456789V",
    status: "Female",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
      role: "Project Manager",
    },
    age: 42,
    nic: "987654321V",
    status: "Male",
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Zain Geidt",
      role: "Content Writer",
    },
    age: 29,
    nic: "456789123V",
    status: "Male",
  },
  {
    id: 4,
    user: {
      image: "/images/user/user-20.jpg",
      name: "Abram Schleifer",
      role: "Digital Marketer",
    },
    age: 3,
    nic: "321654987V",
    status: "Kid",
  },
  {
    id: 5,
    user: {
      image: "/images/user/user-21.jpg",
      name: "Carla George",
      role: "Front-end Developer",
    },
    age: 12,
    nic: "654987321V",
    status: "Kid",
  },
];

export default function PatientTable() {
  const [data, setData] = useState<Order[]>(initialTableData);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the table data by the search term
  const filteredData = data.filter((order) => {
    const term = searchTerm.toLowerCase();
    return (
      order.user.name.toLowerCase().includes(term) ||
      order.user.role.toLowerCase().includes(term) ||
      order.status.toLowerCase().includes(term) ||
      order.nic.toLowerCase().includes(term) ||
      order.age.toString().includes(term)
    );
  });

  // Handle Delete action (prevent row navigation on button click)
  const handleDelete = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
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
            className="w-96 h-12 rounded-lg border border-gray-300 bg-white pl-12 pr-4 text-gray-700 
                       focus:outline-none dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white 
                      dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[600px]">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs 
                               dark:text-gray-400"
                  >
                    Patient Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs 
                               dark:text-gray-400"
                  >
                    Age
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs 
                               dark:text-gray-400"
                  >
                    Status
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs 
                               dark:text-gray-400"
                  >
                    NIC
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {filteredData.map((order) => (
                  <TableRow
                    key={order.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {/* Make the first 4 columns clickable by using <Link className="contents"> */}
                    <Link
                      to="/ma_form_edit_patient"
                      className="contents cursor-pointer"
                    >
                      {/* Patient Name */}
                      <TableCell className="px-5 py-4 text-left align-middle">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 overflow-hidden rounded-full">
                            <img
                              width={40}
                              height={40}
                              src={order.user.image}
                              alt={order.user.name}
                            />
                          </div>
                          <div>
                            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                              {order.user.name}
                            </span>
                            <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                              {order.user.role}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      {/* Age */}
                      <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm 
                                         dark:text-gray-400 align-middle"
                      >
                        {order.age}
                      </TableCell>
                      {/* Status */}
                      <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm 
                                         dark:text-gray-400 align-middle"
                      >
                        <Badge
                          size="sm"
                          color={
                            order.status === "Kid"
                              ? "success"
                              : order.status === "Female"
                              ? "warning"
                              : "error"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      {/* NIC */}
                      <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm 
                                         dark:text-gray-400 align-middle"
                      >
                        {order.nic}
                      </TableCell>
                    </Link>
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

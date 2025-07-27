import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../common_components/ui_components/table";
import Badge from "../../common_components/ui_components/badge/Badge";
import Button from "../../../components/common_components/ui_components/button/Button";
import { BoxIcon } from "../../../icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  clearAuthError,
  clearAuthMessage,
  loadUser,
} from "../../../actions/authActions";
import { getAllUsers } from "../../../actions/usersActions";
import { APP_ROLE } from "../../../constants/appRoles";
import { toast } from "react-toastify";

interface User {
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

export default function PatientTable() {
  const { staffs } = useSelector((state: any) => state.usersState);
  const formattedData: User[] = Array.isArray(staffs)
    ? staffs.map((u: any) => ({
        id: u._id,
        user: {
          image: "/images/user/user-17.jpg",
          name: u.name,
          role: u.role,
        },
        age: u.age,
        nic: u.nic.toString(),
        status: u.sex.charAt(0).toUpperCase() + u.sex.slice(1),
      }))
    : [];
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the table data by the search term
  const filteredData = formattedData.filter((order) => {
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
  const { error, message } = useSelector((state: any) => state.authState);
  const role = APP_ROLE.STAFF;
  const dispatch = useDispatch();

  const handleDelete = (id, e: React.MouseEvent) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this staff account?"
    );
    if (confirmed) {
      const formData = { id, role };
      dispatch(deleteUser(formData));
      dispatch(getAllUsers);
      // window.location.reload();
      console.log("Deleting item with id:", id);
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      toast(error, {
        type: "error",
        position: "bottom-center",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    } else if (message) {
      toast("User account deleted successfully", {
        type: "success",
        position: "bottom-center",
        onOpen: () => {
          dispatch(clearAuthMessage);
        },
      });

      return;
    }
  }, [error, message, dispatch]);

  return (
    <div className="space-y-4">
      {/* Search Bar and Register Button */}
      <div className="flex justify-center items-center gap-5">
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
            className="w-96 h-12 rounded-lg border border-gray-300 bg-white pl-12 pr-4 text-gray-700 focus:outline-none dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Link to="/ma_form_Register_staff" className="contents cursor-pointer">
          <Button
            size="sm"
            variant="outline"
            startIcon={<BoxIcon className="size-5" />}
          >
            Register
          </Button>
        </Link>
      </div>

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
                    Patient Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                  >
                    Age
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                  >
                    Status
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                  >
                    NIC
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-4 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                  >
                    Action
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
                    <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm dark:text-gray-400 align-middle">
                      {order.age}
                    </TableCell>
                    {/* Status */}
                    <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm dark:text-gray-400 align-middle">
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
                    <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm dark:text-gray-400 align-middle">
                      {order.nic}
                    </TableCell>
                    {/* Action (Delete button only) */}
                    <TableCell className="px-5 py-4 text-left text-gray-500 text-theme-sm dark:text-gray-400 align-middle">
                      <button
                        onClick={(e) => handleDelete(order.id, e)}
                        className="p-1 text-red-500 hover:text-red-700"
                        title="Delete"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
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

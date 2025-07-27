import { Link } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../common_components/ui_components/table";
import {FileIcon}from "../../../icons";
import Badge from "../../common_components/ui_components/badge/Badge";

// Define the TypeScript interface for the table rows
interface Product {
  id: number; // Unique identifier for each product
  name: string; // Product name
  type: string; // e.g., "1 Variant", "2 type"
  age: string; // age of the product (as a string with currency symbol)
  image: string; // URL or path to the product image
  status: "Male" | "Female" | "Kid"; // Status of the product
}

// Define the table data using the interface
const tableData: Product[] = [
  {
    id: 1,
    name: " Kidhurhsan",
    type: "Patient",
    age: "23",
    status: "Male",
    image: "/images/user/user-01.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Fahham",
    type: "Patient",
    age: "40",
    status: "Female",
    image: "/images/user/user-02.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Afzan",
    type: "Patient",
    age: "15",
    status: "Kid",
    image: "/images/user/user-05.jpg", // Replace with actual image URL
  },

];

export default function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recently Submitted Medical forms
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/doctor_tables">
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              See all
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table className="table-fixed w-full">
          {/* Table Header */}
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Name
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Age
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>

            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="py-3 text-center">
                  <div className="flex items-center gap-3 justify-center">
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        className="h-[50px] w-[50px]"
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {product.name}
                      </p>
                      <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                        {product.type}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-center text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.age}
                </TableCell>
                <TableCell className="py-3 text-center text-gray-500 text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      product.status === "Male"
                        ? "success"
                        : product.status === "Female"
                        ? "warning"
                        : "error"
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

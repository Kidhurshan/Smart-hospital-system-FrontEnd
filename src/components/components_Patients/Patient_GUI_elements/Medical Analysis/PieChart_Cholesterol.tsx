import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Dropdown } from "../../../common_components/ui_components/dropdown/Dropdown";
import { DropdownItem } from "../../../common_components/ui_components/dropdown/DropdownItem";
import { MoreDotIcon } from "../../../../icons";
import { useState } from "react";

export default function PieChartOne() {
  const options: ApexOptions = {
    chart: {
      type: "donut",
      height: 300,
      fontFamily: "Outfit, sans-serif",
      toolbar: {
        show: false,
      },
    },
    labels: ["LDL", "HDL", "Triglycerides"],
    colors: ["#465FFF", "#9CB9FF", "#E0E7FF"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: false,
      theme: "light",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    stroke: {
      width: 0,
    },
  };

  // The series values represent the proportion of each cholesterol component.
  // They add up to 100% which is the total cholesterol.
  const series = [40, 30, 30];
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Cholesterol Breakdown
        </h3>
        <div className="relative inline-block">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="w-40 p-2"
          >
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              View More
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div id="pieChartOne" className="min-w-[350px]">
          <Chart options={options} series={series} type="donut" height={300} />
        </div>
      </div>
    </div>
  );
}

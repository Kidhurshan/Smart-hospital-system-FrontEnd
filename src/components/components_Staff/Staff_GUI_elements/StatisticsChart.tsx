import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartTab from "../../common_components/ChartTab";

export default function StatisticsChart() {
  const options: ApexOptions = {
    legend: {
      show: true, // Show legend for multiple series
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#465FFF", "#52e5f3","#39f866"], // Define colors for systolic and diastolic lines
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "line", // Chart type set to line
      toolbar: {
        show: false, // Hide chart toolbar
      },
    },
    stroke: {
      curve: "smooth", // Smooth curve style for lines
      width: [2, 2], // Line width for each dataset
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0, // Marker point size
      strokeColors: "#fff", // Marker border color
      strokeWidth: 2,
      hover: {
        size: 6, // Marker size on hover
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false, // Hide grid lines on x-axis
        },
      },
      yaxis: {
        lines: {
          show: true, // Show grid lines on y-axis
        },
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    tooltip: {
      enabled: true, // Enable tooltip
      x: {
        format: "dd MMM yyyy", // x-axis tooltip format
      },
    },
    xaxis: {
      type: "category", // Category-based x-axis
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      tooltip: {
        enabled: false, // Disable tooltip for x-axis points
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px", // Font size for y-axis labels
          colors: ["#6B7280"], // Color for y-axis labels
        },
      },
      title: {
        text: "Blood Pressure (mmHg)", // Y-axis title
        style: {
          fontSize: "12px",
        },
      },
    },
  };

  const series = [
    {
      name: "Patients",
      data: [2, 7, 14, 18, 25, 36, 49, 66, 75, 81,87, 90],
    },
    {
      name: "Doctors",
      data: [4, 5, 5, 5, 5, 6, 7, 8, 10, 10, 10, 10],
    },
    {
      name: "Staffs",
      data: [5, 6, 5, 6, 7, 7, 10, 12, 13, 17, 18, 20],
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Users Count
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Patients, Doctors, Medical Staffs counts 
          </p>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[1000px] xl:min-w-full">
          <Chart options={options} series={series} type="area" height={310} />
        </div>
      </div>
    </div>
  );
}

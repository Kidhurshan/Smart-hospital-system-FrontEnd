import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartTab from "../../../common_components/ChartTab";

export default function StatisticsChart() {
  const options: ApexOptions = {
    legend: {
      show: true, // Show legend for multiple series
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#465FFF", "#f352bd"], // Define colors for fasting and postprandial lines
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
        format: "dd MMM yyyy", // Format for x-axis tooltip
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
        text: "Blood Sugar Levels (mg/dL)", // Y-axis title
        style: {
          fontSize: "12px",
        },
      },
    },
  };

  const series = [
    {
      name: "Fasting Blood Sugar",
      data: [90, 95, 92, 88, 94, 96, 92, 93, 95, 90, 91, 89],
    },
    {
      name: "Postprandial Blood Sugar",
      data: [130, 135, 132, 128, 134, 136, 132, 133, 135, 130, 131, 129],
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Patient Blood Sugar Levels
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Fasting and Postprandial Blood Sugar levels over the months
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

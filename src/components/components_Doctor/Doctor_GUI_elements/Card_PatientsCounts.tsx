import {
  ArrowDownIcon,
  ArrowUpIcon,
  GroupIcon,
} from "../../../icons";
import Badge from "../../common_components/ui_components/badge/Badge";

export default function EcommerceMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 ">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-3">
          <div>
            <span className="text-sm text-gray-500 font-semibold text-lg dark:text-gray-400">
              Male Patients
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              54
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            65%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-3">
          <div>
            <span className="text-sm text-gray-500 font-semibold text-lg dark:text-gray-400">
              Female Patients
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              33
            </h4>
          </div>

          <Badge color="error">
            <ArrowDownIcon />
            25%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 ">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-3">
          <div>
            <span className="text-sm text-gray-500 font-semibold text-lg dark:text-gray-400">
              Kids Patients
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              12
            </h4>
          </div>

          <Badge color="error">
            <ArrowDownIcon />
            10%
          </Badge>
        </div>
      </div>
    </div>
  );
}

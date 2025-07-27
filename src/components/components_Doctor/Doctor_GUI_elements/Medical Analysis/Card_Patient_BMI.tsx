import {
  ArrowDownIcon,
  ArrowUpIcon,
  GroupIcon,
} from "../../../../icons";
import Badge from "../../../common_components/ui_components/badge/Badge";

export default function BMIDetails() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
      {/* Weight Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-3">
          <div>
            <span className="text-sm text-gray-500 font-semibold dark:text-gray-400">
              Weight
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              70 kg
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            1.5%
          </Badge>
        </div>
      </div>

      {/* Height Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-3">
          <div>
            <span className="text-sm text-gray-500 font-semibold dark:text-gray-400">
              Height
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              175 cm
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            0.5%
          </Badge>
        </div>
      </div>

      {/* BMI Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-3">
          <div>
            <span className="text-sm text-gray-500 font-semibold dark:text-gray-400">
              BMI
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              22.9
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            2.0%
          </Badge>
        </div>
      </div>
    </div>
  );
}

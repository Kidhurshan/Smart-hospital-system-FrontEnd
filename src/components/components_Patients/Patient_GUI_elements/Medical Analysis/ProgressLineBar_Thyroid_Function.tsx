import { useState } from "react";
import { Dropdown } from "../../../common_components/ui_components/dropdown/Dropdown";
import { DropdownItem } from "../../../common_components/ui_components/dropdown/DropdownItem";
import { MoreDotIcon, ListIcon, GridIcon } from "../../../../icons";

export default function DemographicCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Thyroid Function Progress
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm mb-5 dark:text-gray-400">
            Monitoring TSH, T3, and T4 levels
          </p>
        </div>
        <div className="relative inline-block">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
          </button>
          <Dropdown isOpen={isOpen} onClose={closeDropdown} className="w-40 p-2">
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

      <div className="space-y-5">
        {/* TSH Progress using ListIcon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ListIcon className="w-6 h-6 text-brand-500" />
            <div>
              <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                TSH
              </p>
              <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                2.5 mIU/L
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className="absolute left-0 top-0 flex h-full w-[70%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
            </div>
            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
              70%
            </p>
          </div>
        </div>

        {/* T3 Progress using GridIcon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GridIcon className="w-6 h-6 text-brand-500" />
            <div>
              <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                T3
              </p>
              <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                1.2 ng/mL
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className="absolute left-0 top-0 flex h-full w-[85%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
            </div>
            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
              85%
            </p>
          </div>
        </div>

        {/* T4 Progress using ListIcon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ListIcon className="w-6 h-6 text-brand-500" />
            <div>
              <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                T4
              </p>
              <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                6.0 μg/dL
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className="absolute left-0 top-0 flex h-full w-[60%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
            </div>
            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
              60%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Dropdown } from "../../common_components/ui_components/dropdown/Dropdown";
import { DropdownItem } from "../../common_components/ui_components/dropdown/DropdownItem";
import { MoreDotIcon } from "../../../icons";
import CountryMap from "./CountryMap";

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
            Progress Bar
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm mb-5 dark:text-gray-400">
            Showing the Progress of each section
          </p>
        </div>
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


      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="items-center w-full rounded-full max-w-8">
              <img src="./images/user/user-01.jpg" alt="user1" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                Content 1
              </p>
              <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                2,379 Numbers
              </span>
            </div>
          </div>

          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className="absolute left-0 top-0 flex h-full w-[79%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
            </div>
            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
              79%
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="items-center w-full rounded-full max-w-8">
              <img src="./images/user/user-02.jpg" alt="user2" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                Content 2
              </p>
              <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                589 Numbers
              </span>
            </div>
          </div>

          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className="absolute left-0 top-0 flex h-full w-[23%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
            </div>
            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
              23%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

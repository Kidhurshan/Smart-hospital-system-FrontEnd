import React from "react";
import ThemeTogglerTwo from "../../components/common_components/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}
        <div className="hidden lg:grid w-1/2 h-screen bg-[#01588d] dark:bg-white/5 overflow-hidden">
          <div className="relative flex items-center justify-center h-full">
            <img
              className="w-full h-full object-cover object-center"
              src="/images/front-image/Combined image.png"
              alt="Combined image"
            />
          </div>
        </div>


        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}

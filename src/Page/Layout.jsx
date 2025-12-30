import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import DashBoardSidebar from "./DashBoardSideBar";

const Layout = () => {
  const [isHamOpen, setIsHamOpen] = useState(true);
  return (
    <>
      <div className="h-screen flex flex-col">
        <NavBar onToggle={() => setIsHamOpen((prev) => !prev)} />
        <div className="flex flex-1 overflow-hidden">
          <div
            className={`
      transition-all duration-300 ease-in-out
      ${isHamOpen ? "w-64" : "w-0"}
    `}
          >
            <DashBoardSidebar isOpen={isHamOpen} />
          </div>

          <main className="flex-1 overflow-y-auto bg-gray-50 transition-all duration-300 ease-in-out">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;

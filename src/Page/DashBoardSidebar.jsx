import React, { useState } from "react";
import {
  Home,
  CreditCard,
  ArrowLeftRight,
  Ticket,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const DashBoardSidebar = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const navigate = useNavigate();

  const toggleExpand = (item) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const menuItems = [
    {
      id: "main",
      label: "Main page",
      icon: Home,
      hasSubmenu: false,
      homePath: "/user",
    },
    {
      id: "accounts",
      label: "Accounts",
      icon: CreditCard,
      hasSubmenu: true,
      subMenu1: "Open an Account",
      subMenu2: "Account",
      subMenu1Path: "/user/createaccount",
      subMenu2Path: "/user/account",
    },
    {
      id: "transfers",
      label: "Transfers",
      icon: ArrowLeftRight,
      hasSubmenu: true,
      subMenu1: "Deposit",
      subMenu1Path: "/user/deposit",
      subMenu2: "Withdraw",
      subMenu2Path: "/user/withdraw",
      subMenu3: "Transfers Report",
      subMenu3Path: "/user/transfersReport",
    },
    { id: "tickets", label: "Tickets", icon: Ticket, hasSubmenu: false,
      ticketPath:"/user/ticket"
     },
  ];

  return (
    <div className="w-64 bg-white min-h-full  flex flex-col">
      {/* Menu */}
      <nav className="flex-1 py-4">
        {menuItems.map((item) => (
          <div key={item.id}>
            {/* Parent */}
            {item.hasSubmenu ? (
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full flex items-center justify-between px-6 py-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </div>
                <span className="text-gray-400">
                  {expandedItems[item.id] ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </span>
              </button>
            ) : (
              <NavLink
                to={item.homePath || item.ticketPath || item.path || "#"}
                end
                className={({ isActive }) =>
                  `w-full flex items-center justify-between px-6 py-3 transition-colors ${
                    isActive
                      ? "bg-blue-50 font-semibold text-gray-900 border-l-4 border-blue-500"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </div>
              </NavLink>
            )}

            {/* Submenu */}
            {item.hasSubmenu && expandedItems[item.id] && (
              <div className="mt-1">
                {[item.subMenu1, item.subMenu2, item.subMenu3]
                  .filter(Boolean)
                  .map((label, index) => {
                    const path =
                      index === 0
                        ? item.subMenu1Path
                        : index === 1
                        ? item.subMenu2Path
                        : item.subMenu3Path;

                    return (
                      <NavLink
                        key={label}
                        to={path}
                        end
                        className={({ isActive }) =>
                          `block pl-14 pr-6 py-2 text-sm transition-all ${
                            isActive
                              ? "bg-blue-50 font-semibold text-gray-900 border-l-4 border-blue-500"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    );
                  })}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="border-t border-gray-200 p-6">
        <p className="text-xs text-gray-500 mb-2">Your personal manager</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">JS</span>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">John Smith</h4>
            <p className="text-xs text-gray-500">
              Technical Support Specialist
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200">
        <p className="text-xs text-gray-400">Rockfieldtrade</p>
        <p className="text-xs text-gray-400 mt-1">© Rockfieldtrade.</p>
      </div>
    </div>
  );
};

export default DashBoardSidebar;

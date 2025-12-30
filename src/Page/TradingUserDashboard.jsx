import React, { useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import DashBoardSidebar from "./DashBoardSideBar";
import {Link} from "react-router-dom"
import { Outlet } from "react-router-dom";

const TradingUserDashboard = () => {
  const [viewMode, setViewMode] = useState("grid");
  

 

  const accounts = [
    {
      id: "10501",
      type: "Demo",
      balance: "11 834.70 USD",
      profit: "0.00 USD",
      profitValue: 0,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: "10605",
      type: "Demo",
      balance: "132.01 USD",
      profit: "-109 867.99 USD",
      profitValue: -109867.99,
      color: "from-teal-400 to-purple-500",
    },
    {
      id: "10605",
      type: "Real",
      balance: "11.12 USD",
      profit: "107.12 USD",
      profitValue: 107.12,
      color: "from-blue-500 to-purple-600",
    },
  ];

  const transfers = [
    {
      number: 145,
      date: "25.02.2025 21:53",
      from: "Bitride",
      to: "Trading account 10505 Real",
      amount: "100.00 USD",
      status: "Rejected",
    },
    {
      number: 146,
      date: "24.02.2025 03:53",
      from: "Bitride",
      to: "Trading account 10505 Real",
      amount: "500.00 USD",
      status: "Rejected",
    },
    {
      number: 157,
      date: "03.09.2025 18:25",
      from: "Bitride",
      to: "Trading account 10505 Real",
      amount: "100.00 USD",
      status: "Rejected",
    },
    {
      number: 167,
      date: "24.02.2025 13:29",
      from: "Bitride",
      to: "Trading account 10505 Real",
      amount: "100.00 USD",
      status: "Rejected",
    },
    {
      number: 177,
      date: "22.10.2025 14:52",
      from: "Demo account deposit",
      to: "Demo account 10501 Demo",
      amount: "10 000.00 USD",
      status: "Completed",
    },
    {
      number: 189,
      date: "27.11.2025 21:12",
      from: "Bitride",
      to: "Trading account 10505 Real",
      amount: "100.00 USD",
      status: "Rejected",
    },
  ];

 

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Main Layout - Sidebar + Content Side by Side */}
      <div className="flex h-[calc(100vh-56px)] transition-all duration-200 ease-in-out ">


        {/* Main Content Area - Scrollable */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <div className="text-white text-3xl font-bold">A</div>
                </div>
                <p className="text-sm text-gray-500">Trade as an Expert</p>
              </div>
            </div>

            {/* Trading accounts section */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Trading accounts
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex gap-2 bg-white border border-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${
                      viewMode === "grid" ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                      <div className="bg-gray-600 rounded-sm"></div>
                      <div className="bg-gray-600 rounded-sm"></div>
                      <div className="bg-gray-600 rounded-sm"></div>
                      <div className="bg-gray-600 rounded-sm"></div>
                    </div>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${
                      viewMode === "list" ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="w-4 h-4 flex flex-col gap-1">
                      <div className="bg-gray-600 h-0.5 rounded"></div>
                      <div className="bg-gray-600 h-0.5 rounded"></div>
                      <div className="bg-gray-600 h-0.5 rounded"></div>
                    </div>
                  </button>
                </div>
                <Link className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer" to='/user/createaccount'>
                  OPEN AN ACCOUNT
                </Link>
              </div>
            </div>

            {/* Account Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {accounts.map((account, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${account.color} rounded-xl p-6 text-white shadow-lg`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white bg-opacity-30 rounded flex items-center justify-center">
                        <div className="w-4 h-3 border-2 border-white rounded-sm"></div>
                      </div>
                      <span className="font-semibold">{account.id}</span>
                      <span className="bg-white bg-opacity-20 px-2 py-0.5 rounded text-xs">
                        {account.type}
                      </span>
                    </div>
                    <span className="bg-white bg-opacity-20 px-2 py-0.5 rounded text-xs">
                      Demo
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-1">
                      {account.balance}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm opacity-80">Profit</span>
                    <span className="font-semibold">{account.profit}</span>
                  </div>

                  <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                    DEPOSIT
                    <span>›</span>
                  </button>
                </div>
              ))}

              {/* New Account Card */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center min-h-[240px] bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <div className="w-8 h-6 border-2 border-gray-400 rounded-sm"></div>
                </div>
                <p className="text-gray-500 mb-4">You can open a new account</p>
               
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                  OPEN AN ACCOUNT
                  <span>›</span>
                </button>
               
              </div>
            </div>

            {/* Transfers Section */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">
                  Transfers
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Number
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Where from
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Where to
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {transfers.map((transfer, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <ArrowDownToLine className="w-4 h-4 text-gray-400" />
                            <span className="font-medium text-gray-900">
                              {transfer.number}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {transfer.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transfer.from}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-red-600">
                            {transfer.to}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {transfer.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              transfer.status === "Completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {transfer.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-4 border-t border-gray-200 flex justify-center">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                  All transfers (29)
                  <span>›</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Outlet/>
    </div>
  );
};

export default TradingUserDashboard;

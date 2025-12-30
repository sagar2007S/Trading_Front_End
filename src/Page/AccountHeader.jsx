import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import DemoAccount from "./DemoAccount";
import LiveAccount from "./LiveAccount";

export default function AccountHeader() {
  const [accountType, setAccountType] = useState("Real");
  const [leverage, setLeverage] = useState("1 : 100");
  const [activeTab, setActiveTab] = useState("LIVE");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Open an account
        </h1>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("LIVE")}
              className={`px-6 py-4 font-medium ${
                activeTab === "LIVE"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-500"
              }`}
            >
              LIVE
            </button>
            <button
              onClick={() => setActiveTab("DEMO")}
              className={`px-6 py-4 font-medium ${
                activeTab === "DEMO"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-500"
              }`}
            >
              DEMO
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-2 space-y-6">
              {activeTab === "LIVE" && <LiveAccount />}
              {activeTab === "DEMO" && <DemoAccount />}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h3 className="text-gray-600 font-medium mb-4">
                  Trading conditions
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-0.5 bg-green-600"></div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Currency</div>
                      <div className="text-gray-800 font-medium">USD</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-0.5 bg-green-600"></div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">
                        Minimal deposit
                      </div>
                      <div className="text-gray-800 font-medium">0.01</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

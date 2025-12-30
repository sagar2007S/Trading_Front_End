import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import PaymentMethodModal2 from "./Modals/PaymentMethodModal2";

export default function MakeDepositComponent() {
  const [paymentMethod, setPaymentMethod] = useState("Local Bank Deposit");
  const [isPayemntMethodOpen, setIsPayemntMethodOpen] = useState(true);
  console.log(isPayemntMethodOpen);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Make a deposit
        </h1>
        {isPayemntMethodOpen && (
          <PaymentMethodModal2 onClose={setIsPayemntMethodOpen}  setPaymentMethod={setPaymentMethod}/>
        )}

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            {/* Left Section - Payment Method */}
            <div className="col-span-2 p-8">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-3">
                  Payment method
                </label>
                <div className="relative"  onClick={()=> setIsPayemntMethodOpen(prev => !prev)}>
                  <input
                    value={paymentMethod}
                   className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent cursor-pointer"
                   readOnly
                  />
                 {/* <option value={paymentMethod} className="z-0" >{paymentMethod}</option> */}
                  {/* </select> */}
                  <button  >
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 " />
                  </button>
                </div>
              </div>

              {/* Bank Details */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="space-y-2 text-sm text-gray-900">
                  <p className="leading-relaxed">
                    A/C Name - P SUBBU LAKSHMI /A/C - 62062200057351/IFSC -
                    CNRB0016206 /
                  </p>
                  <p className="font-medium">CANARA BANK</p>
                </div>
              </div>
            </div>

            {/* Right Section - Report Deposit */}
            <div className="p-8 bg-gray-50">
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Please let us know when you have completed your deposit
              </p>
              <button className="w-full px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors">
                REPORT A DEPOSIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

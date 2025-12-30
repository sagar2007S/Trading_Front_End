import React,{useState} from 'react'
import EquityChart from './EquityChart';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';





const AccountDashBoard = () => {
  const [activeTab, setActiveTab] = useState('INFORMATION');

  const navigate=useNavigate();
  const handleDepositNavigation =()=>{
    navigate("/user/deposit");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-gray-800">Real 10006</span>
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-md font-semibold transition-colors" onClick={()=> handleDepositNavigation()}>
            MAKE A DEPOSIT
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-8 mb-6 border-b border-gray-200">
          {['INFORMATION', 'TRANSFERS', 'HISTORY'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 font-medium text-sm tracking-wide transition-colors ${
                activeTab === tab
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 mb-2">Balance</div>
            <div className="text-xl font-semibold text-gray-900">11.12 USD</div>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 mb-2">For withdrawal</div>
            <div className="text-xl font-semibold text-gray-900">11.12 USD</div>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 mb-2">Bonuses</div>
            <div className="text-xl font-semibold text-gray-900">0.00 USD</div>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 mb-2">Leverage</div>
            <div className="text-xl font-semibold text-gray-900">1:100</div>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 mb-2">Profit (open deals)</div>
            <div className="text-xl font-semibold text-gray-900">0.00 USD</div>
          </div>
        </div>

        <EquityChart />
      </div>
    </div>
  );
};

export default AccountDashBoard;
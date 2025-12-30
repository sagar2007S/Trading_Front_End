import React, { useState } from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';

export default function TransfersComponent() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [currency, setCurrency] = useState('USD');
  const [accountFilter, setAccountFilter] = useState('All accounts');
  const [periodFilter, setPeriodFilter] = useState('Per month');

  const tabs = ['ALL', 'NEW', 'EXECUTED', 'DECLINED', 'DEPOSITS'];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Transfers</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? 'text-red-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
              )}
            </button>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Currency</span>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
                {currency}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="text-sm text-gray-600 mb-2">Deposited</div>
              <div className="text-xl font-semibold text-gray-900">0.00 USD</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Withdrawn</div>
              <div className="text-xl font-semibold text-gray-900">0.00 USD</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Amount</div>
              <div className="text-xl font-semibold text-gray-900">0.00 USD</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Quantity</div>
              <div className="text-xl font-semibold text-gray-900">1</div>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Filters */}
          <div className="flex justify-end gap-3 p-4 border-b border-gray-200">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded">
              {accountFilter}
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded">
              {periodFilter}
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 px-6 py-3 bg-gray-50 text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200">
            <div className="flex items-center gap-1">
              Number
              <ChevronDown className="w-3 h-3" />
            </div>
            <div>Date</div>
            <div>Where from</div>
            <div>Where to</div>
            <div>Amount</div>
            <div>Status</div>
          </div>

          {/* Table Row */}
          <div className="grid grid-cols-6 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <ArrowDown className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-gray-900">189</span>
            </div>
            <div className="text-sm text-gray-700">
              27.11.2025
              <div className="text-xs text-gray-500">21:19</div>
            </div>
            <div className="text-sm text-gray-700">BitHide</div>
            <div className="text-sm text-gray-700">
              Trading account
              <div className="text-red-500 text-xs">10006 Real</div>
            </div>
            <div className="text-sm font-medium text-gray-900">100.00 USD</div>
            <div>
              <span className="inline-flex px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded">
                Rejected
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// NewsSentiment.jsx
import React from "react";
import { ChevronDown, Info } from "lucide-react";
import SmallGauge from "./ui/SmallGauge";

export default function NewsSentiment({ items = [], className = "" }) {
  return (
    <div
      className={`bg-white rounded-lg border shadow-sm overflow-hidden h-60 bg-white text-slate-900 border-l border-gray-200
        dark:bg-[#1b1e2b] dark:text-gray-100 dark:border-[#262938] ${className}`}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-medium text-slate-700">News sentiment</h4>
          <Info size={14} className="text-slate-400" />
        </div>
        <button className="p-1 text-slate-500 hover:bg-slate-50 rounded">
          <ChevronDown size={16} />
        </button>
      </div>

      {/* list */}
      <div className="max-h-[320px] overflow-auto p-2 space-y-2">
        {items.length === 0 ? (
          <div className="text-xs text-slate-500 p-3">No sentiment data</div>
        ) : (
          items.map((it) => (
            <div
              key={it.id}
              className="flex items-center bg-slate-50 rounded-md p-3"
            >
              <div className="flex-1">
                <div className="text-sm font-semibold text-slate-700">
                  {it.symbol}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {it.sentiment}
                </div>
              </div>

              <div className="w-28">
                <SmallGauge
                  value={typeof it.value === "number" ? it.value : 0}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}




import React from "react";
import { Info, ChevronDown } from "lucide-react";

export default function Macroeconomics({ items = [], className = "" }) {
  return (
    <div className={`bg-white rounded-lg border shadow-sm overflow-hidden h-60  bg-white text-slate-900 border-l border-gray-200
        dark:bg-[#1b1e2b] dark:text-gray-100 dark:border-[#262938] ${className}`}>
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-medium text-slate-700">Macroeconomics</h4>
          <Info size={14} className="text-slate-400" />
        </div>
        <button className="p-1 text-slate-500 hover:bg-slate-50 rounded">
          <ChevronDown size={16} />
        </button>
      </div>

      {/* This inner wrapper sets the MAX height for macros and enables its scrollbar */}
      <div className="max-h-[24vh] overflow-auto p-2">
        {items.length === 0 ? (
          <div className="text-xs text-slate-500 p-3">No data</div>
        ) : (
          items.map((it) => (
            <div key={it.id} className="flex items-center justify-between bg-slate-50 rounded-md p-3 mb-2">
              <div>
                <div className="text-sm font-semibold text-slate-700">{it.symbol}</div>
                {it.sub && <div className="text-xs text-slate-500 mt-1">{it.sub}</div>}
              </div>

              <div>
                <RecommendationBadge recommendation={it.recommendation} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function RecommendationBadge({ recommendation = "Neutral" }) {
  const rec = (recommendation || "Neutral").toLowerCase();
  const base = "px-3 py-1 rounded-full text-xs font-semibold";
  if (rec === "sell") return <span className={`${base} text-red-700 bg-red-100`}>Sell</span>;
  if (rec === "buy") return <span className={`${base} text-green-700 bg-green-100`}>Buy</span>;
  return <span className={`${base} text-slate-700 bg-slate-100`}>Neutral</span>;
}

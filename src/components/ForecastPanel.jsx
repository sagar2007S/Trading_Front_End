import { Settings2 , PinIcon} from "lucide-react";

// You can replace this with real data later
const mockForecasts = [
  {
    id: 1,
    symbol: "BTCUSD",
    side: "Sell",
    title: "Bitcoin selloff down to $87,400",
    potentialPips: "8200",
    period: "31.12.2025",
    dateLabel: "10 December 2025",
  },
  {
    id: 2,
    symbol: "USDCAD",
    side: "Buy",
    title: "USDCAD consolidates as traders await Fed and BoC guidance",
    potentialPips: "920",
    period: "17.12.2025",
    dateLabel: "10 December 2025",
  },
];

const ForecastsPanel = ({ forecasts = mockForecasts }) => {
  return (
    <aside
      className="
        flex flex-col h-full w-full max-w-md 
        bg-white text-slate-900 border-l border-gray-200
        dark:bg-[#1b1e2b] dark:text-gray-100 dark:border-[#262938]
      "
    >
      {/* Header */}
      <div
        className="
          flex items-center justify-between px-4 py-3 
          border-b border-gray-100 dark:border-[#262938]
        "
      >
        <h2 className="font-semibold text-sm text-slate-800 dark:text-gray-200">
          Market Forecasts
        </h2>

        <div className="flex items-center gap-2">
          {/* Symbol selector */}
          

          {/* Settings */}
          <button
            className="
              w-8 h-8 flex items-center justify-center rounded-md
              bg-gray-100 border border-gray-200
              dark:bg-[#262938] dark:border-[#343849]
            "
            aria-label="forecast settings"
          >
            <PinIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {forecasts.map((item) => {
          const isBuy = item.side.toLowerCase() === "buy";

          return (
            <article
              key={item.id}
              className="
                rounded-md border border-gray-200 bg-[#f7f9ff]
                dark:bg-[#111827] dark:border-[#343849]
                shadow-sm
              "
            >
              {/* Top row: symbol + side pill */}
              <div className="flex items-center justify-between px-4 pt-3 text-xs">
                <span className="font-semibold text-slate-500 dark:text-slate-300">
                  {item.symbol}
                </span>

                <span
                  className={`
                    inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold
                    ${
                      isBuy
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-rose-100 text-rose-700"
                    }
                  `}
                >
                  {item.side}
                </span>
              </div>

              {/* Title + meta */}
              <div className="px-4 pt-1 pb-2">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {item.title}
                </h3>

                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  Potential:{" "}
                  <span className="font-semibold">
                    {item.potentialPips} pips
                  </span>{" "}
                  <span className="mx-1">·</span>
                  Period:{" "}
                  <span className="font-semibold">{item.period}</span>
                </p>
              </div>

              {/* Chart preview area */}
              <div className="mx-4 mt-2 rounded border border-gray-200 dark:border-[#343849] bg-white dark:bg-[#0b1120] h-28 overflow-hidden">
                {/* Replace this div with an actual img or chart if you have one */}
                <div className="h-full w-full bg-gradient-to-r from-[#eff3ff] to-[#dbeafe] dark:from-[#111827] dark:to-[#020617]" />
              </div>

              {/* Date chip */}
              <div className="px-4 pb-3 pt-2">
                <span
                  className="
                    inline-flex rounded-md bg-gray-100 px-3 py-1 text-[11px]
                    text-slate-600 dark:bg-[#1f2937] dark:text-slate-300
                  "
                >
                  {item.dateLabel}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default ForecastsPanel;

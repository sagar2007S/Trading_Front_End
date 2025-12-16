import { Filter, LayoutList, RefreshCw, Search , Pin } from "lucide-react";
import { US, CA } from "country-flag-icons/react/3x2";
import Macroeconomics from "./Macroeconomics";

const eventsByDay = [
  {
    dateLabel: "DECEMBER 10, WEDNESDAY",
    items: [
      {
        id: 1,
        time: "18:30",
        country: "United States",
        Flag: US,
        title: "Employment Cost Index (QoQ) (Q3)",
        actual: "—",
        forecast: "0.9%",
        previous: "0.9%",
        impactColor: "#f59e0b", // orange
      },
      {
        id: 2,
        time: "18:30",
        country: "United States",
        Flag: US,
        title: "Employment Wages (QoQ) (Q3)",
        actual: "—",
        forecast: "—",
        previous: "1%",
        impactColor: "#6366f1", // blue dot
      },
      {
        id: 3,
        time: "19:45",
        country: "Canada",
        Flag: CA,
        title: "BoC Interest Rate Decision",
        actual: "—",
        forecast: "2.25%",
        previous: "2.25%",
        impactColor: "#ef4444", // red
      },
      {
        id: 4,
        time: "19:45",
        country: "Canada",
        Flag: CA,
        title: "BoC Rate Statement",
        actual: "—",
        forecast: "—",
        previous: "—",
        impactColor: "#ef4444",
      },
       {
        id: 5,
        time: "19:45",
        country: "Canada",
        Flag: CA,
        title: "BoC Rate Statement",
        actual: "—",
        forecast: "—",
        previous: "—",
        impactColor: "#ef4444",
      },
       {
        id: 6,
        time: "19:45",
        country: "Canada",
        Flag: CA,
        title: "BoC Rate Statement",
        actual: "—",
        forecast: "—",
        previous: "—",
        impactColor: "#ef4444",
      },
    ],
  },
];

const CalendarPanel = ({setSettingOpen,setIsFilterPannelOpen}) => {
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
          Calendar
        </h2>

        <div className="flex items-center gap-2">
          {/* Symbol dropdown (dummy) */}
          <button
            className="
              flex items-center gap-1 px-3 py-1.5 text-xs rounded
              bg-gray-100 border border-gray-200 text-slate-800
              hover:bg-gray-200
              dark:bg-[#262938] dark:border-[#343849] dark:text-gray-200 dark:hover:bg-[#2f333b]
            "
          >
            <Pin  className="w-4 h-4 text-slate-700 dark:text-slate-300"/>
          </button>

          <button
            className="
              w-8 h-8 flex items-center justify-center rounded
              bg-gray-100 border border-gray-200
              dark:bg-[#262938] dark:border-[#343849]
              
            "
            onClick={()=> setSettingOpen(prev => !prev)}
            aria-label="view mode"
          >
            <LayoutList className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          </button>

          <button
            className="
              w-8 h-8 flex items-center justify-center rounded
              bg-gray-100 border border-gray-200
              dark:bg-[#262938] dark:border-[#343849]
              
            "
            onClick={()=> setIsFilterPannelOpen(prev => !prev)}
            aria-label="filters"
          >
            <Filter className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b border-gray-100 dark:border-[#262938]">
        <div
          className="
            flex items-center gap-2 px-3 py-2 rounded
            bg-gray-50 border border-gray-200 text-xs text-slate-500
            dark:bg-[#202331] dark:border-[#303342] dark:text-slate-300
          "
        >
          <Search className="w-4 h-4" />
          <input
            type="text"
            placeholder="Enter the name of the event"
            className="
              flex-1 bg-transparent outline-none text-xs
              placeholder:text-slate-400 dark:placeholder:text-slate-500
            "
          />
        </div>
      </div>

      {/* Events list */}
      <div className="flex-1 overflow-y-auto px-0.5 py-2">
        {eventsByDay.map((group) => (
          <section key={group.dateLabel}>
            {/* Date label */}
            <div
              className="
                px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase
                bg-gray-100 text-slate-600
                dark:bg-[#202331] dark:text-slate-300
              "
            >
              {group.dateLabel}
            </div>

            {/* Items */}
            {group.items.map((item, idx) => (
              <div
                key={item.id}
                className={`
                  flex gap-3 px-4 py-3
                  bg-white border border-gray-200
                  dark:bg-[#252837] dark:border-[#252837]
                  ${idx !== group.items.length - 1 ? "border-b-0" : ""}
                `}
              >
                {/* Time + flag column */}
                <div className="flex flex-col items-center gap-1 mt-1">
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    {item.time}
                  </span>

                  <span className="flex items-center justify-center w-6 h-6 rounded-full overflow-hidden">
                    <item.Flag className="w-full h-full" />
                  </span>
                </div>

                {/* Main text */}
                <div className="flex-1">
                  <div className="text-xs text-slate-500 dark:text-slate-300">
                    {item.country}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-gray-100">
                    {item.title}
                  </div>

                  <div className="mt-2 grid grid-cols-3 gap-2 text-[11px] text-slate-500 dark:text-slate-300">
                    <div>
                      <div className="uppercase text-[10px]">Actual</div>
                      <div className="mt-0.5 text-xs text-slate-800 dark:text-gray-100">
                        {item.actual}
                      </div>
                    </div>
                    <div>
                      <div className="uppercase text-[10px]">Forecast</div>
                      <div className="mt-0.5 text-xs text-slate-800 dark:text-gray-100">
                        {item.forecast}
                      </div>
                    </div>
                    <div>
                      <div className="uppercase text-[10px]">Previous</div>
                      <div className="mt-0.5 text-xs text-slate-800 dark:text-gray-100">
                        {item.previous}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact dot */}
                <div className="flex items-start pt-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.impactColor }}
                  />
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>

      {/* Bottom refresh FAB */}
      <div className="relative h-0">
        <button
          className="
            absolute right-8 -top-15
            w-10 h-10 rounded-full flex items-center justify-center
            bg-[#3b82f6] text-white shadow-md
            hover:bg-[#2563eb] transition
          "
          aria-label="refresh calendar"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
    
      </div>
          <Macroeconomics/>
    </aside>
  );
};

export default CalendarPanel;

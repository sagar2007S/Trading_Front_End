import { CalendarDays, Flame, Pin  } from "lucide-react";
import NewsSentiment from "./NewsSentiment";

const newsGroups = [
  {
    dateLabel: "DECEMBER 10, WEDNESDAY",
    items: [
      {
        id: 1,
        country: "United States",
        title: "API Weekly Crude Oil Stock",
        text: "The value of the indicator has decreased from -2.48M to -4.8M.",
        time: "03:26",
        type: "calendar",
      },
    ],
  },
  {
    dateLabel: "DECEMBER 09, TUESDAY",
    items: [
      {
        id: 2,
        country: "United States",
        title: "10-Year Note Auction",
        text: "The value of the indicator has increased from 4.074% to 4.175%.",
        time: "23:47",
        type: "calendar",
      },
      {
        id: 3,
        country: "Germany",
        title: "Germany Trade Balance",
        text: "The value of the indicator has increased from €15.3B to €16.9B.",
        time: "12:31",
        type: "calendar",
      },
      {
        id: 4,
        country: "Australia",
        title: "RBA Interest Rate Decision",
        text: "The value of the indicator remained at the same level of 3.6%.",
        time: "09:00",
        type: "hot",
      },
      {
        id: 5,
        country: "Australia",
        title: "RBA Interest Rate Decision",
        text: "The value of the indicator remained at the same level of 3.6%.",
        time: "09:00",
        type: "hot",
      },
      {
        id: 6,
        country: "Australia",
        title: "RBA Interest Rate Decision",
        text: "The value of the indicator remained at the same level of 3.6%.",
        time: "09:00",
        type: "hot",
      },
    ],
  },
];

const NewsPanel = () => {
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
          News
        </h2>

        <div className="flex items-center gap-2">
         
          <button
            className="
              w-8 h-8 flex items-center justify-center rounded bg-gray-100 border border-gray-200
              dark:bg-[#262938] dark:border-[#343849]
            "
            aria-label="alerts"
          >
            <Pin  className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          </button>

          <button
            className="
              w-8 h-8 flex items-center justify-center rounded bg-gray-100 border border-gray-200
              dark:bg-[#262938] dark:border-[#343849]
            "
            aria-label="hot"
          >
            <Flame className="w-4 h-4 text-orange-500" />
          </button>

        </div>
      </div>

      {/* Content list */}
      {/* */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4 min-h-0 ">
        {newsGroups.map((group) => (
          <section key={group.dateLabel}>
            {/* Date label */}
            <div
              className="
                px-2 py-1 text-[11px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase
              "
            >
              {group.dateLabel}
            </div>

            {/* Items */}
            <div className="space-y-2">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex gap-3 px-3 py-3 rounded
                    bg-gray-50 border border-gray-100
                    dark:bg-[#252837] dark:border-transparent
                  "
                >
                  {/* Icon */}
                  <div className="mt-0.5 flex-shrink-0">
                    {item.type === "hot" ? (
                      <Flame className="w-5 h-5 text-orange-500" />
                    ) : (
                      <CalendarDays className="w-5 h-5 text-emerald-500" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-sm leading-snug text-slate-800 dark:text-gray-100">
                      <span className="font-semibold">{item.country}.</span>{" "}
                      <span className="font-medium">{item.title}.</span>{" "}
                      <span className="text-slate-700 dark:text-slate-300">
                        {item.text}
                      </span>
                    </p>
                  </div>

                  {/* Time */}
                  <div className="ml-2 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap self-end">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <NewsSentiment/>
      {/* <div className="h-[35%] min-h-0 border-t border-gray-200 dark:border-[#262938] overflow-y-auto">
  <NewsSentiment />
</div> */}
    </aside>
  );

  
};

export default NewsPanel;



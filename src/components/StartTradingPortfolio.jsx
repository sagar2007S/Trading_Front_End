// StartTradingPortfolio.jsx
import { ChevronUp, Globe2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const StartTradingPortfolio = ({onLoginClick}) => {
  const [time, setTime] = useState("");
  const [utcOffset, setUtcOffset] = useState("");

  // live time + UTC offset
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);

      const offsetMinutes = -now.getTimezoneOffset(); // minutes east of UTC
      const sign = offsetMinutes >= 0 ? "+" : "-";
      const abs = Math.abs(offsetMinutes);
      const oh = String(Math.floor(abs / 60)).padStart(2, "0");
      const om = String(abs % 60).padStart(2, "0");
      setUtcOffset(`UTC${sign}${oh}:${om}`);
    };

    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="
        w-full
        bg-white border border-gray-200
        dark:bg-[#0b1120] dark:border-[#262938]
        flex flex-col
      "
    >
      {/* Top bar */}
      <div
        className="
          flex items-center justify-between
          px-4 py-2 border-b
          border-gray-200 dark:border-[#262938]
        "
      >
        <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
          Portfolio
        </span>

        <ChevronUp className="w-4 h-4 text-slate-400 dark:text-slate-300" />
      </div>

      {/* Middle: centered card */}
      <div className="relative flex-1 min-h-[110px] flex items-center justify-center px-4 py-6">
        <div
          className="
            max-w-md w-full
            border border-gray-200 rounded-lg
            bg-white
            dark:bg-[#050816] dark:border-[#262938]
            px-8 py-5
            flex items-center gap-4
          "
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30">
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 text-[#3b82f6]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M7 15.5L10.5 11L13.5 13.5L17 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              Start trading
            </div>
            <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
              You need to{" "}
              <button 
              className="text-[#2563eb] dark:text-[#60a5fa] underline-offset-2 hover:underline"
              onClick={onLoginClick}
              >
                Sign in
              </button>{" "}
              to your account. No account?{" "}
              {/* This is where I want to put the Route where a new page render named signup */}
              <button className="text-[#2563eb] dark:text-[#60a5fa] underline-offset-2 hover:underline">
               <Link to="/signup">
                Registration
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom-right time */}
        <div className="absolute right-4 bottom-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
          <Globe2 className="w-4 h-4" />
          <span>
            {time} ({utcOffset})
          </span>
        </div>
      </div>
    </div>
  );
};

export default StartTradingPortfolio;

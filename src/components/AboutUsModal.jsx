import React from "react";
import { X, Globe2, Mail } from "lucide-react";

          
const AboutUsModal = ({ onClose, version = "2.20.5" }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40">
      {/* Modal card */}
      <div className="mt-10 w-full max-w-md rounded-lg bg-white dark:bg-[#0b1120] shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-[#262938] px-6 py-3">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-gray-100">
            About us
          </h2>

          <button
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-[#111827]"
            aria-label="Close about us"
          >
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-8 flex flex-col items-center text-center gap-6">
          {/* Logo – replace src with your logo path */}
          <div className="flex items-center justify-center">
            <img
              src="https://crystalpng.com/wp-content/uploads/2025/03/tradingview-logo-768x768.png"
              alt="Rockfieldtrade logo"
              className="h-32 w-auto"
            />
          </div>

          {/* Tagline */}
          <div>
            <p className="text-lg font-medium text-slate-700 dark:text-slate-100">
              Trade as an Expert
            </p>
          </div>

          {/* Product + version */}
          <div className="space-y-1">
            <p className="text-base font-semibold text-slate-800 dark:text-slate-100">
              Rockfieldtrade WebTrader
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Version {version}
            </p>
          </div>

          {/* Links */}
          <div className="mt-4 space-y-3 text-sm text-sky-600 dark:text-sky-400">
            <a
              href="https://rockfieldtrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:underline"
            >
              <Globe2 className="h-4 w-4" />
              <span>rockfieldtrade.com</span>
            </a>

            <a
              href="mailto:feedback@rockfieldtrade.com"
              className="flex items-center justify-center gap-2 hover:underline"
            >
              <Mail className="h-4 w-4" />
              <span>feedback@rockfieldtrade.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsModal;

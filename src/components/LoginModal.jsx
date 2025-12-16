import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const LoginModal =({onClose})=>{
  const { t } = useTranslation();
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-[#181a21] rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-[#262938] px-6 py-4">
          <img
            src="https://crystalpng.com/wp-content/uploads/2025/03/tradingview-logo-768x768.png"
            alt="logo"
            className="h-8 w-auto"
          />
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100 dark:hover:bg-[#262938]"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
            {t("signin")}
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-xs mb-1 text-gray-600 dark:text-gray-300">
               {t("email")}
              </label>
              <input
                type="email"
                className="w-full h-10 px-3 rounded border border-gray-300 dark:border-[#303342]
                           bg-white dark:bg-[#181a21] text-sm
                           focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs mb-1 text-gray-600 dark:text-gray-300">
                {t("password")}
              </label>
              <input
                type="password"
                className="w-full h-10 px-3 rounded border border-gray-300 dark:border-[#303342]
                           bg-white dark:bg-[#181a21] text-sm
                           focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                <input type="checkbox" className="accent-blue-500" />
                {t("remember")}
              </label>
              <button type="button" className="text-blue-500 hover:underline">
              {t("forgot")}
              </button>
            </div>

            <button
              type="submit"
              className="w-full h-10 mt-1 rounded bg-[#3b82f6] hover:bg-[#2563eb]
                         text-white text-sm font-medium"
            >
              {t("signin")}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-600 dark:text-gray-300">
            {t("no_account")}{" "}
            <button type="button" className="text-blue-500 hover:underline">
              {t("registration")}
            </button>
          </p>
        </div>
      </div>
    </div>
  );

}

export default LoginModal;
import { SunMoon, Languages, LogIn } from "lucide-react";
import { useEffect, useState } from "react";
import LanguageModal from "./LanguageModal";
import { useTranslation } from "react-i18next";




const Navbar = ({theme, setTheme, onLoginClick, onLanguageClick, onLanguageClose,isLanguageOpen,onToggleLanguage}) => {
  //const [theme, setTheme] = useState("light");
   const [selectedLang, setSelectedLang] = useState(
    () => localStorage.getItem("lang") || "en"
  );

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const {t}=useTranslation();

  return (
    <div
      className="
        w-full h-12 flex items-center justify-between px-4 md:px-6 lg:px-10 border-b
        bg-white border-[#d5d7e0]
        dark:bg-[#181a21] dark:border-[#262938]
      "
    >
     
      <div className="flex items-center">
        <img
          src="https://crystalpng.com/wp-content/uploads/2025/03/tradingview-logo-768x768.png"
          alt="logo"
          className="h-8 w-auto"
        />
      </div>
      <div className="flex-1 flex justify-center">
        <button
          className="
            flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition
            bg-[#d8e3f8] text-[#3b82f6] hover:bg-[#c4d4f5]
            dark:bg-[#2a2d3a] dark:hover:bg-[#333645]
          "
        >
          <span
            className="
              flex items-center justify-center w-6 h-6 rounded
              bg-[#d8e3f8] dark:bg-[#202331]
            "
          >
            <span className="w-4 h-4 bg-[#3b82f6] rounded-sm" />
          </span>
          <span>WebTrader</span>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleTheme}
          className="
            h-9 w-9 flex items-center justify-center rounded-md border bg-transparent transition
            border-[#d5d7e0] hover:border-2 hover:border-blue-500
            dark:border-[#303342]
          "
        >
          <SunMoon className="w-4 h-4 text-slate-600 dark:text-slate-200" />
        </button>
        <button
          className="
            h-9 min-w-[40px] px-2 flex items-center justify-center rounded-md text-xs font-semibold transition
            bg-white text-black border border-[#d5d7e0] hover:border-2 hover:border-blue-500
            dark:bg-[#181a21] dark:text-white dark:border-[#303342]
          "
          onClick={onToggleLanguage}
        >
          {/* {To Dynamically change the Button text} */}
          {selectedLang.toUpperCase()} 
        </button>

    {isLanguageOpen && (
      <LanguageModal selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
    )}

        <button
          className="
            h-9 px-4 flex items-center gap-1 rounded-md text-xs font-semibold transition
            bg-[#3b82f6] text-white hover:bg-[#2563eb]
          "
          onClick={onLoginClick}
        >
          <LogIn className="w-4 h-4" />
          <span>{t("signin")}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

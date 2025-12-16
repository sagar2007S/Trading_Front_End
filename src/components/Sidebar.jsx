import React from "react";
import { ListPlus, Newspaper, CalendarRange, Search, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
function Sidebar({onAboutClickChnage, activeSection , onSelectSection, isAboutOpen}) {

  const { t } = useTranslation();

  return (
    
    
    <div className="h-full w-[80px] bg-white dark:bg-[#181a21] border-r  border-gray-300 dark:border-[#262938] flex flex-col justify-between py-6">
      {/* TOP ICONS */}
      <div className="flex flex-col items-center gap-6 text-black dark:text-white
 text-[11px]">
        <button
          onClick={()=> onSelectSection("watchlist")}
          className={`w-full flex flex-col items-center gap-2 py-3  hover:text-blue-500
            transform transition duration-100
${activeSection==="watchlist" ? "bg-blue-200 text-blue-500":""}
`}

        >
          <ListPlus className="w-5 h-5" />
          <span>{t("watchlist")}</span>
        </button>

        <button
          onClick={()=> onSelectSection("news")}
          className={`w-full flex flex-col items-center gap-2 py-3 hover:text-blue-500
transform transition duration-100
${activeSection==="news" ? "bg-blue-200 text-blue-500":""}
`}
        >
          <Newspaper className="w-5 h-5" />
          <span>{t("news")}</span>
        </button>

        <button
          onClick={()=>  onSelectSection("calendar")}
          className={`w-full flex flex-col items-center gap-2 py-3  hover:text-blue-500
transform transition duration-100 ${activeSection==="calendar" ? "bg-blue-200 text-blue-500":""}`}
        >
          <CalendarRange className="w-5 h-5" />
          <span> {t("calender")}</span>
        </button>

        <button
          onClick={()=> onSelectSection("forecast")}
          className={`w-full flex flex-col items-center gap-2 py-3  hover:text-blue-500
transform transition duration-100
${activeSection==="forecast" ? "bg-blue-200 text-blue-500":""}
`}
        >
          <Search className="w-5 h-5" />
          <span>{t("forecasts")}</span>
        </button>
      </div>

      
      <div className="flex justify-center">
        <button
          onClick={onAboutClickChnage}
          className={`w-full flex flex-col items-center gap-2 py-3 text-black dark:text-white
 text-[11px]  hover:text-blue-500
transform transition duration-100
${isAboutOpen===true ? "bg-blue-200 text-blue-500 contain-layout":""}
`}
        >
          <div className="w-8 h-8 rounded-full border border-gray-500 dark:border-[#262938] flex items-center justify-center">
            <Info className="w-4 h-4" />
          </div>
          <span>{t("about_us")}</span>
          
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

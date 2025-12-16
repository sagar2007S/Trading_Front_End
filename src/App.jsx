import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import WatchList from "./components/WatchList";
import TradingViewWidget from "./components/TradingViewWidget";
import LoginModal from "./components/LoginModal";
import LanguageModal from "./components/LanguageModal";
import NewsPanel from "./components/NewsPanel";
import CalendarPanel from "./components/CalenderPanel";
import StartTradingPortfolio from "./components/StartTradingPortfolio";
import AboutUsModal from "./components/AboutUsModal";
import ForecastsPanel from "./components/ForecastPanel";
import SymbolSelectorModal from "./components/SymbolSelectorModal";
import InformationModal from "./components/InformationModal";
import ViewSettingModal from "./components/ViewSettingModal";
import FiltersPanelModal from "./components/FilterPannelModal";
import { Plus } from "lucide-react";
import ChartTabs from "./components/ui/ChartTabs";
import SymbolSearchPanel from "./components/SymbolSearchPanel";
import AppRoute from "./routes/AppRoute";
import { useLocation } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isLanguageClose, setIsLanguageClose] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  //Side Bar State
  const [activeSection, setActiveSection] = useState("watchlist");
  const [isPlusOpen, setIsPlusOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isFilterPannelOpen, setIsFilterPannelOpen] = useState(false);
  const [isSearchPannelActive, setIsSearchPannelActive] = useState(false);
  const [symbolValue, setSymbolValue] = useState(" ");
  const [activeSymbol, setActiveSymbol] = useState("AAPL");
  const [sidebarWidth, setSidebarWidth] = useState(360);
  const [isResizing, setIsResizing] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();
  const isSignupPage = location.pathname === "/signup";

  console.log(symbolValue);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;
    const newWidth = e.clientX - 64; // 64px is the sidebar icon width
    
    // If currently collapsed and dragging right, expand
    if (isSidebarCollapsed && newWidth >= 200) {
      setIsSidebarCollapsed(false);
      setSidebarWidth(newWidth <= 600 ? newWidth : 600);
    }
    // If expanded and dragging left below threshold, collapse
    else if (!isSidebarCollapsed && newWidth < 200) {
      setIsSidebarCollapsed(true);
    }
    // Normal resize when expanded
    else if (!isSidebarCollapsed && newWidth >= 200 && newWidth <= 600) {
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  // Handle sidebar section change - expand if collapsed
  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (isSidebarCollapsed) {
      setIsSidebarCollapsed(false);
      setSidebarWidth(360); // Reset to default width
    }
  };

  // Add event listeners for resize
  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isResizing, isSidebarCollapsed, sidebarWidth]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f5f7ff] text-slate-900 dark:bg-[#050816] dark:text-slate-100">
      <AppRoute />
      {!isSignupPage && (
        <div className="flex flex-col h-full">
          {/* Navbar */}
          <Navbar
            theme={theme}
            setTheme={setTheme}
            onLoginClick={() => setIsLogInOpen(true)}
            onLanguageClick={() => setIsLanguageOpen(true)}
            onLanguageClose={() => setIsLanguageClose(false)}
            isLanguageOpen={isLanguageOpen}
            onToggleLanguage={() => setIsLanguageOpen((prev) => !prev)}
          />

          {/* Main layout - Fixed height calculation */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left sidebar with icons */}
            <Sidebar
              onAboutClickChnage={() => setIsAboutOpen(true)}
              activeSection={activeSection}
              onSelectSection={handleSectionChange}
              isAboutOpen={isAboutOpen}
            />

            {/* Content area with proper flex distribution */}
            <div className="flex flex-1 overflow-hidden">
              {/* Left panel: watchlist/news/calendar - Resizable */}
              {/*  */}
              <div
                className="flex-shrink-0 border-r border-gray-200 dark:border-[#262938] overflow-y-auto relative transition-all duration-200"
                style={{ width: isSidebarCollapsed ? '0px' : `${sidebarWidth}px` }}
              >
                <div className={isSidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}>
                  {activeSection === "watchlist" && (
                    <WatchList
                      setIsPlusOpen={setIsPlusOpen}
                      onInfoOpen={setIsInfoOpen}
                    />
                  )}
                  {activeSection === "news" && <NewsPanel />}
                  {activeSection === "calendar" && (
                    <CalendarPanel
                      setSettingOpen={setSettingOpen}
                      setIsFilterPannelOpen={setIsFilterPannelOpen}
                    />
                  )}
                  {activeSection === "forecast" && <ForecastsPanel />}
                </div>
              </div>

              {/* Resize handle - always visible */}
              <div
                onMouseDown={handleMouseDown}
                className={`w-1 flex-shrink-0 cursor-col-resize hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors ${
                  isResizing ? "bg-blue-500 dark:bg-blue-400" : "bg-transparent"
                }`}
                title={isSidebarCollapsed ? "Drag right to expand" : "Drag to resize (drag left to collapse)"}
              />

              {/* Center: chart area with proper spacing */}
              <main className="flex-1 flex flex-col overflow-hidden p-2 gap-2">
                {/* Chart container with controlled height */}
                <div className="flex-1 flex flex-col overflow-hidden rounded-lg border border-[#d5d7e0] dark:border-[#262938] bg-white dark:bg-[#0b1120]">
                  {/* Chart tabs */}
                  <div className="flex-shrink-0">
                    <ChartTabs
                      value={symbolValue}
                      setIsSearchPannelActive={setIsSearchPannelActive}
                      onActiveSymbolChange={setSymbolValue}
                    />
                  </div>

                  {/* TradingView chart - fills remaining space */}
                  <div className="flex-1 overflow-hidden">
                    <TradingViewWidget
                      theme={theme}
                      symbolValue={symbolValue}
                      fallbackSrc="/libs/tv.js"
                    />
                  </div>

                  {/* Portfolio bar at the bottom - fixed height */}
                  <div className="flex-shrink-0 border-t border-[#d5d7e0] dark:border-[#262938]">
                    <StartTradingPortfolio
                      onLoginClick={() => setIsLogInOpen(true)}
                    />
                  </div>
                </div>
              </main>
            </div>
          </div>

          {/* Modals */}
          {isLogInOpen && <LoginModal onClose={() => setIsLogInOpen(false)} />}
          {isAboutOpen && <AboutUsModal onClose={() => setIsAboutOpen(false)} />}
          {isPlusOpen && (
            <SymbolSelectorModal setIsPlusOpen={() => setIsPlusOpen(false)} />
          )}
          {isInfoOpen && (
            <InformationModal onClose={() => setIsInfoOpen(false)} />
          )}
          {isSettingOpen && (
            <ViewSettingModal onClose={() => setSettingOpen(false)} />
          )}
          {isFilterPannelOpen && (
            <FiltersPanelModal onClose={() => setIsFilterPannelOpen(false)} />
          )}
          {isSearchPannelActive && (
            <SymbolSearchPanel
              onSelectSymbol={(symbol) => {
                setSymbolValue(symbol);
                setIsSearchPannelActive(false);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
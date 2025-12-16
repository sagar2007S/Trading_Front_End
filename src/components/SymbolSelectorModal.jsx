import React, { useState, useEffect , useRef} from "react";
import { Search, Info, X } from "lucide-react";




const categories = [
  { name: "All", count: 47 },
  { name: "Currencies", count: 14 },
  { name: "Commodities", count: 7 },
  { name: "Crypto", count: 10 },
  { name: "Indices", count: 3 },
  { name: "US Stocks", count: 13 },
];

const symbols = [
  { symbol: "AAPL", desc: "Apple Inc." },
  { symbol: "ADAUSD", desc: "Cardano / US Dollar" },
  { symbol: "AMZN", desc: "Amazon.com Inc." },
  { symbol: "AUDUSD", desc: "Australian Dollar / US Dollar" },
  { symbol: "AVAXUSD", desc: "Avalanche / US Dollar" },
  { symbol: "BCHETH", desc: "Bitcoin Cash / Ethereum" },
  { symbol: "BNBUSD", desc: "Binance Coin / US Dollar" },
  { symbol: "BRENT", desc: "Brent Crude Oil" },
  { symbol: "BTCUSD", desc: "Bitcoin / US Dollar" },
  { symbol: "COFFEE", desc: "Coffee" },
  { symbol: "CORN", desc: "Corn" },
  { symbol: "DAX", desc: "Xetra DAX Index" },
  { symbol: "DIS", desc: "Walt Disney Co." },
  { symbol: "DOGEUSD", desc: "Dogecoin / US Dollar" },
];


export default function SymbolSelectorModal({setIsPlusOpen}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const modalRef = useRef(null);



  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsPlusOpen?.();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsPlusOpen]);

  return (
    <  div ref={modalRef}>
      {/* Your original absolute position – unchanged */}
      <div className="absolute left-95 top-[105px] z-50 transform transition duration-500 dark:bg-[#0b1120] ">

        <div className="w-[880px] h-[520px] flex bg-white shadow-lg rounded-md overflow-hidden border dark:bg-[#0b1120]">

          {/* LEFT CATEGORY MENU */}
          <div className="w-56 border-r bg-gray-50 overflow-y-auto dark:bg-[#0b1120]">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center justify-between w-full px-4 py-3 text-left hover:bg-blue-300 hover:text-black
                ${activeCategory === cat.name ? "bg-blue-200 font-semibold text-black" : ""}`}
              >
                <span>{cat.name}</span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="flex-1 flex flex-col">

            {/* TOP BAR (Search + Close) */}
            <div className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center border rounded px-3 py-2 w-full max-w-[400px]">
                <Search size={18} className="text-gray-500" />
                <input
                  placeholder="Symbol, eg. EURUSD"
                  className="ml-2 w-full outline-none"
                />
              </div>

              {/* ❌ Close Button */}
              <button
                onClick={setIsPlusOpen}
                className="ml-3 hover:bg-gray-100 p-2 rounded"
              >
                <X size={18} />
              </button>
            </div>

            {/* SYMBOL LIST */}
            <div className="flex-1 overflow-y-auto">
              {symbols.map((item) => (
                <div
                  key={item.symbol}
                  onClick={() => setSelectedSymbol(item.symbol)}
                  className={`flex items-center justify-between px-4 py-3 border-b cursor-pointer hover:bg-blue-300
                     
                  ${selectedSymbol === item.symbol ? "bg-blue-300  dark:text-black hover:text-black" : ""}`}
                >
                  <div className="hover:text-black">
                    <div className="font-semibold text-gray-800 dark:text-white ">{item.symbol}</div>
                    <div className="text-sm text-gray-500 dark:text-white">{item.desc}</div>
                  </div>
                  <Info size={18} className="text-gray-500" />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

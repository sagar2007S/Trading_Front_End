// import { Info, Plus, X, TrendingUp, TrendingDown } from "lucide-react";
// import { Button } from "./ui/button";
// import { useTranslation } from "react-i18next";


// const watchlistData = [
//   { symbol: "USDJPY", bid: 155.496, ask: 155.518, direction: "up" },
//   { symbol: "USDCHF", bid: 0.80432, ask: 0.80454, direction: "up" },
//   { symbol: "AUDUSD", bid: 0.66344, ask: 0.66365, direction: "up" },
//   { symbol: "USDCAD", bid: 1.38224, ask: 1.38252, direction: "down" },
//   { symbol: "USDRUB", bid: 74.625, ask: 77.625, direction: null },
//   { symbol: "BRENT", bid: 63.91, ask: 63.95, direction: "up" },
//   { symbol: "GOLD", bid: 4210.27, ask: 4210.51, direction: "down" },
//   { symbol: "BTCUSD", bid: 91886.29, ask: 91886.30, direction: null },
//   { symbol: "ETHUSD", bid: 3159.61, ask: 3160.02, direction: null },
// ];

// const formatPrice = (price) => {
//   if (price >= 1000) return price.toFixed(2);
//   if (price >= 100) return price.toFixed(3);
//   if (price >= 1) return price.toFixed(5);
//   return price.toFixed(5);
// };

// const DirectionIndicator = ({ direction }) => {
//   if (!direction) return null;

//   if (direction === "up") {
//     return <TrendingUp className="h-3 w-3 text-price-up" />;
//   }
//   return <TrendingDown className="h-3 w-3 text-price-down" />;
// };

//  const WatchList = ({setIsPlusOpen, onInfoOpen}) => {

//   const {t}=useTranslation();
//   return (
//     <div className="w-full max-w-md bg-card rounded-lg border  border-gray-300
//  shadow-sm overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 py-3 border-b border-gray-400">
//         <h2 className="text-base font-semibold text-foreground">{t("watchlist")}</h2>
//         <div className="flex items-center gap-1">
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             className="h-8 w-8 text-muted-foreground hover:text-foreground"
//             // onClick={()=> setIsInfoOpen(prev => !prev)}

//             onClick={()=> onInfoOpen(prev => !prev)}
            
//           >
           
//             <Info className="h-4 w-4" />
//           </Button>
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             className="h-8 w-8 text-primary hover:text-primary/80 bg-blue-300 hover:bg-blue-600"
//             onClick={()=> setIsPlusOpen(prev => !prev)}
//           >
//             <Plus className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       {/* Table Header */}
//       <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-4 py-2 bg-secondary/50 border-b border-border text-xs font-medium text-muted-foreground">
//         <div>{t("symbol")}</div>
//         <div className="w-24 text-right">Bid</div>
//         <div className="w-24 text-right">Ask</div>
//         <div className="w-8"></div>
//       </div>

//       {/* Table Body */}
//       <div className="divide-y divide-border">
//         {watchlistData.map((item) => (
//           <div
//             key={item.symbol}
//             className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-4 py-3 items-center hover:bg-table-hover transition-colors cursor-pointer group"
//           >
//             <div className="font-medium text-sm text-foreground">
//               {item.symbol}
//             </div>

//             <div className="w-24 flex items-center justify-end gap-1.5">
//               <DirectionIndicator direction={item.direction} />
//               <span
//                 className={`font-mono text-sm tabular-nums ${
//                   item.direction === "up"
//                     ? "text-price-up"
//                     : item.direction === "down"
//                     ? "text-price-down"
//                     : "text-foreground"
//                 }`}
//               >
//                 {formatPrice(item.bid)}
//               </span>
//             </div>

//             <div className="w-24 text-right font-mono text-sm tabular-nums text-foreground">
//               {formatPrice(item.ask)}
//             </div>

//             <div className="w-8 flex justify-end">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-6 w-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <X className="h-3.5 w-3.5" />
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default WatchList;


// import { Info, Plus, X, TrendingUp, TrendingDown } from "lucide-react";
// import { Button } from "./ui/button";
// import { useTranslation } from "react-i18next";

// const watchlistData = [
//   { symbol: "USDJPY", bid: 155.496, ask: 155.518, direction: "up" },
//   { symbol: "USDCHF", bid: 0.80432, ask: 0.80454, direction: "up" },
//   { symbol: "AUDUSD", bid: 0.66344, ask: 0.66365, direction: "up" },
//   { symbol: "USDCAD", bid: 1.38224, ask: 1.38252, direction: "down" },
//   { symbol: "USDRUB", bid: 74.625, ask: 77.625, direction: null },
//   { symbol: "BRENT", bid: 63.91, ask: 63.95, direction: "up" },
//   { symbol: "GOLD", bid: 4210.27, ask: 4210.51, direction: "down" },
//   { symbol: "BTCUSD", bid: 91886.29, ask: 91886.30, direction: null },
//   { symbol: "ETHUSD", bid: 3159.61, ask: 3160.02, direction: null },
// ];

// const formatPrice = (price) => {
//   if (price >= 1000) return price.toFixed(2);
//   if (price >= 100) return price.toFixed(3);
//   if (price >= 1) return price.toFixed(5);
//   return price.toFixed(5);
// };

// const DirectionIndicator = ({ direction }) => {
//   if (!direction) return null;

//   if (direction === "up") {
//     return <TrendingUp className="h-3 w-3 text-price-up" />;
//   }
//   return <TrendingDown className="h-3 w-3 text-price-down" />;
// };

// const WatchList = ({setIsPlusOpen, onInfoOpen}) => {
//   const {t} = useTranslation();
  
//   return (
//     <div className="w-full max-w-md bg-card rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 py-3 border-b border-gray-400 dark:border-gray-600">
//         <h2 className="text-base font-semibold text-foreground dark:text-white">{t("watchlist")}</h2>
//         <div className="flex items-center gap-1">
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             className="h-8 w-8 text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-black hover:bg-gray-100 dark:hover:bg-gray-200"
//             onClick={()=> onInfoOpen(prev => !prev)}
//           >
//             <Info className="h-4 w-4" />
//           </Button>
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             className="h-8 w-8 text-primary hover:text-primary/80 bg-blue-300 hover:bg-blue-600 dark:hover:text-black"
//             onClick={()=> setIsPlusOpen(prev => !prev)}
//           >
//             <Plus className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       {/* Table Header */}
//       <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-4 py-2 bg-secondary/50 dark:bg-gray-800/50 border-b border-border dark:border-gray-700 text-xs font-medium text-muted-foreground dark:text-gray-300">
//         <div>{t("symbol")}</div>
//         <div className="w-24 text-right">Bid</div>
//         <div className="w-24 text-right">Ask</div>
//         <div className="w-8"></div>
//       </div>

//       {/* Table Body */}
//       <div className="divide-y divide-border dark:divide-gray-700">
//         {watchlistData.map((item) => (
//           <div
//             key={item.symbol}
//             className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-4 py-3 items-center hover:bg-table-hover dark:hover:bg-gray-700 transition-colors cursor-pointer group"
//           >
//             <div className="font-medium text-sm text-foreground dark:text-white dark:group-hover:text-black">
//               {item.symbol}
//             </div>

//             <div className="w-24 flex items-center justify-end gap-1.5">
//               <DirectionIndicator direction={item.direction} />
//               <span
//                 className={`font-mono text-sm tabular-nums ${
//                   item.direction === "up"
//                     ? "text-price-up dark:group-hover:text-black"
//                     : item.direction === "down"
//                     ? "text-price-down dark:group-hover:text-black"
//                     : "text-foreground dark:text-white dark:group-hover:text-black"
//                 }`}
//               >
//                 {formatPrice(item.bid)}
//               </span>
//             </div>

//             <div className="w-24 text-right font-mono text-sm tabular-nums text-foreground dark:text-white dark:group-hover:text-black">
//               {formatPrice(item.ask)}
//             </div>

//             <div className="w-8 flex justify-end">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-6 w-6 text-muted-foreground dark:text-gray-400 opacity-0 group-hover:opacity-100 dark:group-hover:text-black transition-opacity hover:bg-gray-200 dark:hover:bg-gray-300"
//               >
//                 <X className="h-3.5 w-3.5" />
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WatchList;



import { Info, Plus, X, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const watchlistData = [
  { symbol: "USDJPY", bid: 155.496, ask: 155.518, direction: "up" },
  { symbol: "USDCHF", bid: 0.80432, ask: 0.80454, direction: "up" },
  { symbol: "AUDUSD", bid: 0.66344, ask: 0.66365, direction: "up" },
  { symbol: "USDCAD", bid: 1.38224, ask: 1.38252, direction: "down" },
  { symbol: "USDRUB", bid: 74.625, ask: 77.625, direction: null },
  { symbol: "BRENT", bid: 63.91, ask: 63.95, direction: "up" },
  { symbol: "GOLD", bid: 4210.27, ask: 4210.51, direction: "down" },
  { symbol: "BTCUSD", bid: 91886.29, ask: 91886.30, direction: null },
  { symbol: "ETHUSD", bid: 3159.61, ask: 3160.02, direction: null },
];

const formatPrice = (price) => {
  if (price >= 1000) return price.toFixed(2);
  if (price >= 100) return price.toFixed(3);
  if (price >= 1) return price.toFixed(5);
  return price.toFixed(5);
};

const DirectionIndicator = ({ direction }) => {
  if (!direction) return null;

  if (direction === "up") {
    return <TrendingUp className="h-3 w-3 text-price-up" />;
  }
  return <TrendingDown className="h-3 w-3 text-price-down" />;
};

const WatchList = ({setIsPlusOpen, onInfoOpen}) => {
  const {t} = useTranslation();
  
  return (
    <div className="w-full max-w-md bg-card rounded-lg border border-gray-300 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-400">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">{t("watchlist")}</h2>
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-gray-600 dark:text-white hover:text-white hover:bg-gray-100"
            onClick={()=> onInfoOpen(prev => !prev)}
          >
            <Info className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-white bg-blue-300 hover:text-white hover:bg-blue-600"
             onClick={()=> setIsPlusOpen(prev => !prev)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-4 py-2 bg-secondary/50 border-b border-border text-xs font-medium text-gray-600 dark:text-white">
        <div>{t("symbol")}</div>
        <div className="w-24 text-right">Bid</div>
        <div className="w-24 text-right">Ask</div>
        <div className="w-8"></div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-border">
        {watchlistData.map((item) => (
          <div
            key={item.symbol}
            className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-4 py-3 items-center hover:bg-table-hover transition-colors cursor-pointer group"
          >
            <div className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-blue-600">
              {item.symbol}
            </div>

            <div className="w-24 flex items-center justify-end gap-1.5">
              <DirectionIndicator direction={item.direction} />
              <span
                className={`font-mono text-sm tabular-nums group-hover:text-blue-600 ${
                  item.direction === "up"
                    ? "text-price-up"
                    : item.direction === "down"
                    ? "text-price-down"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {formatPrice(item.bid)}
              </span>
            </div>

            <div className="w-24 text-right font-mono text-sm tabular-nums text-gray-900 dark:text-white group-hover:text-blue-600">
              {formatPrice(item.ask)}
            </div>

            <div className="w-8 flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-gray-600 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
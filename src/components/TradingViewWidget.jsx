import React, { useEffect, useRef } from "react";

const TradingViewWidget = ({theme, symbolValue}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scriptId = "tradingview-widget-script";

    // Prevent adding script multiple times
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;

      script.onload = () => {
        new window.TradingView.widget({
          autosize: true,
          symbol: `NASDAQ:${symbolValue}`,
          interval: "60",
          timezone: "Etc/UTC",
          //theme:"green" , // Testing for Green
          theme: theme === "dark" ? "dark" : "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          studies: [
            "MAExp@tv-basicstudies", // Example study
          ],
          container_id: "tradingview-chart",
        });
      };

      document.body.appendChild(script);
    } else {
      if (window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: `NASDAQ:${symbolValue}`,
          interval: "60",
          timezone: "Etc/UTC",
          //theme: "green",
          theme: theme === "dark" ? "dark" : "light",
          
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          studies: ["MAExp@tv-basicstudies"],
          container_id: "tradingview-chart",
        });
      }
    }
  }, [theme, symbolValue]);

  return (
    <div
      id="tradingview-chart"
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default TradingViewWidget;

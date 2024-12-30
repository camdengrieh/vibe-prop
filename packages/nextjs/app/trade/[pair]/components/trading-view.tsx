"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    TradingView: any;
  }
}

export function TradingView() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (containerRef.current && window.TradingView) {
        new window.TradingView.widget({
          container: containerRef.current,
          symbol: "BINANCE:BTCUSDT",
          interval: "1",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#0B0B1E",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          save_image: false,
          backgroundColor: "#0B0B1E",
          gridColor: "rgba(255, 255, 255, 0.06)",
          height: "100%",
          width: "100%",
          autosize: true,
          hide_volume: false,
          studies: ["RSI@tv-basicstudies", "MASimple@tv-basicstudies", "MACD@tv-basicstudies"],
          disabled_features: [
            "header_symbol_search",
            "header_interval_dialog_button",
            "show_interval_dialog_on_key_press",
            "popup_hints",
          ],
          enabled_features: ["study_templates", "hide_left_toolbar_by_default"],
          overrides: {
            "mainSeriesProperties.candleStyle.upColor": "#26a69a",
            "mainSeriesProperties.candleStyle.downColor": "#ef5350",
            "mainSeriesProperties.candleStyle.wickUpColor": "#26a69a",
            "mainSeriesProperties.candleStyle.wickDownColor": "#ef5350",
          },
          loading_screen: {
            backgroundColor: "#0B0B1E",
            foregroundColor: "#2962FF",
          },
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full">
      <div className="flex h-full items-center justify-center">
        <div className="loading loading-spinner loading-md"></div>
        <span className="text-base-content/60 ml-2">Loading chart...</span>
      </div>
    </div>
  );
}

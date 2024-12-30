import { PositionsTable } from "./components/positions-table";
import { TradingHeader } from "./components/trading-header";
import { TradingPanel } from "./components/trading-panel";
import { TradingSidebar } from "./components/trading-sidebar";
import { TradingView } from "./components/trading-view";

export default function TradePage() {
  return (
    <div className="flex h-screen flex-col bg-[#0B0B1E] text-white">
      <TradingHeader />
      <div className="flex flex-1 overflow-hidden">
        <TradingSidebar />
        <main className="flex flex-1 flex-col">
          <div className="flex flex-1">
            <div className="flex-1">
              <TradingView />
            </div>
            <TradingPanel />
          </div>
          <PositionsTable />
        </main>
      </div>
    </div>
  );
}

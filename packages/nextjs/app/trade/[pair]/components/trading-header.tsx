import { Bitcoin } from "lucide-react";

export function TradingHeader() {
  return (
    <header className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <Bitcoin className="h-8 w-8 text-[#F7931A]" />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold">BTC-USDC</span>
              <span className="rounded bg-blue-600/20 px-1 text-xs">60x</span>
            </div>
            <div className="text-2xl font-bold">$106,670</div>
          </div>
        </div>
        <div className="flex space-x-6 text-sm text-gray-400">
          <div>
            <div>24h Change</div>
            <div className="text-green-500">$930.0 (1.65%)</div>
          </div>
          <div>
            <div>24h Volume</div>
            <div>$1.25M</div>
          </div>
          <div>
            <div>Open Interest</div>
            <div>$453.5K</div>
          </div>
          <div>
            <div>Available Liquidity</div>
            <div>$1.42M</div>
          </div>
          <div>
            <div>Funding [LONG/SHORT]</div>
            <div>
              <span className="text-green-500">1.0867%</span>
              {" / "}
              <span className="text-red-500">-1.0867%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div>Next Funding 11:53:42</div>
        <button className="btn btn-outline btn-sm border-blue-500 text-blue-500">Connect wallet</button>
      </div>
    </header>
  );
}

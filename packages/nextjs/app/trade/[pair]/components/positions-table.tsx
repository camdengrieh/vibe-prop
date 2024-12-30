import { Settings2, Share2, X } from "lucide-react";

export function PositionsTable() {
  return (
    <div className="border-t border-gray-800">
      <div className="tabs w-full border-b border-gray-800">
        <a className="tab tab-bordered tab-active">
          Positions <span className="badge ml-2 bg-gray-700">2</span>
        </a>
        <a className="tab tab-bordered">Open Orders</a>
        <a className="tab tab-bordered">Order History</a>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-left text-sm text-gray-400">
              <th className="px-4 py-2">Pair</th>
              <th className="px-4 py-2">Size</th>
              <th className="px-4 py-2">Open Price</th>
              <th className="px-4 py-2">Market Price</th>
              <th className="px-4 py-2">Liquidation Price</th>
              <th className="px-4 py-2">Unrealized P&L</th>
              <th className="px-4 py-2">TP/SL</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-800">
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <span className="text-primary">↗</span>
                  <span className="ml-2">BTC-USDC</span>
                  <span className="badge badge-primary ml-1 badge-sm">5x</span>
                </div>
              </td>
              <td className="px-4 py-2">0.0034 ($2,295.3)</td>
              <td className="px-4 py-2">$66,532</td>
              <td className="px-4 py-2">$66,732</td>
              <td className="px-4 py-2">$54,236</td>
              <td className="px-4 py-2 text-success">$7.25 (1.52%)</td>
              <td className="px-4 py-2">
                <span className="text-primary">0.0036</span>
                {" / "}
                <span className="text-secondary">0.0033</span>
              </td>
              <td className="px-4 py-2">
                <div className="flex space-x-1">
                  <button className="btn btn-ghost btn-square btn-sm">
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button className="btn btn-ghost btn-square btn-sm">
                    <Settings2 className="h-4 w-4" />
                  </button>
                  <button className="btn btn-ghost btn-square btn-sm">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

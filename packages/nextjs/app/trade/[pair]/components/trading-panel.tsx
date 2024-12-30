"use client";

export function TradingPanel() {
  return (
    <div className="w-80 border-l border-gray-800 p-4">
      <div className="flex justify-between">
        <button className="btn btn-primary flex-1">Buy</button>
        <button className="btn btn-secondary ml-2 flex-1">Sell</button>
        <div className="ml-2 badge">5x</div>
      </div>

      <div className="tabs tabs-boxed mt-4">
        <a className="tab tab-active flex-1">Market (Ape)</a>
        <a className="tab flex-1">Limit (Pro)</a>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-gray-400">Amount</span>
          </label>
          <input type="number" placeholder="0.00" className="input input-bordered w-full" />
        </div>

        <div className="flex justify-between space-x-2">
          <button className="btn btn-outline btn-sm flex-1">10%</button>
          <button className="btn btn-outline btn-sm flex-1">25%</button>
          <button className="btn btn-outline btn-sm flex-1">33%</button>
          <button className="btn btn-outline btn-sm flex-1">50%</button>
          <button className="btn btn-outline btn-sm flex-1">100%</button>
        </div>

        <div className="card bg-base-200 p-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Start Trading</h2>
            <p className="mt-2 text-sm text-gray-400">
              Log in with email, socials, or connect your wallet to fund and start trading
            </p>
            <div className="card-actions">
              <button className="btn btn-primary mt-4 w-full">Connect wallet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

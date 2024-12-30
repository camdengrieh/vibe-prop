"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

export const ProfileDrawer = () => {
  const { address: connectedAddress, isConnected } = useAccount();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Tab */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-base-300 border-t border-base-200">
        <button
          className="w-full py-4 px-4 flex items-center justify-center gap-2 text-lg font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          Profile {isOpen ? <ArrowLeftIcon className="h-4 w-4" /> : <ArrowRightIcon className="h-4 w-4" />}
        </button>
        <div
          className={`absolute bottom-full left-0 right-0 bg-base-200 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <ProfileContent isConnected={isConnected} connectedAddress={connectedAddress} />
        </div>
      </div>

      {/* Desktop Drawer */}
      <div
        className={`hidden lg:block fixed right-0 top-0 h-full bg-base-200 transition-all duration-300 ${
          isOpen ? "w-80" : "w-0"
        }`}
      >
        <button className="absolute -left-12 top-24 bg-base-200 p-2 rounded-l-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ArrowRightIcon className="h-6 w-6" /> : <ArrowLeftIcon className="h-6 w-6" />}
        </button>
        <div className={`w-80 overflow-hidden ${isOpen ? "opacity-100" : "opacity-0"}`}>
          <ProfileContent isConnected={isConnected} connectedAddress={connectedAddress} />
        </div>
      </div>
    </>
  );
};

const ProfileContent = ({
  isConnected,
  connectedAddress,
}: {
  isConnected: boolean;
  connectedAddress: string | undefined;
}) => {
  if (!isConnected) {
    return (
      <div className="p-6 backdrop-blur-xl">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-base-300 rounded w-3/4"></div>
          <div className="h-24 bg-base-300 rounded"></div>
          <div className="h-32 bg-base-300 rounded"></div>
          <div className="h-24 bg-base-300 rounded"></div>
        </div>
        <div className="text-center mt-6 font-bold">Connect wallet to view profile</div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-2">Trading Account</h3>
        <Address address={connectedAddress} />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Active Challenge</h3>
        <div className="bg-base-100 p-4 rounded-lg">
          <p className="text-sm">Challenge #1234</p>
          <div className="mt-2">
            <div className="flex justify-between text-sm">
              <span>Progress:</span>
              <span>45%</span>
            </div>
            <progress className="progress progress-secondary w-full" value="45" max="100"></progress>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Portfolio Overview</h3>
        <div className="bg-base-100 p-4 rounded-lg space-y-2">
          <div className="flex justify-between">
            <span>Balance:</span>
            <span>$25,000</span>
          </div>
          <div className="flex justify-between">
            <span>P/L:</span>
            <span className="text-success">+$1,250</span>
          </div>
          <div className="flex justify-between">
            <span>Win Rate:</span>
            <span>68%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

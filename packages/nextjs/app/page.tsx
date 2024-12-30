"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BanknotesIcon, ChartBarIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { ProfileDrawer } from "~~/components/ProfileDrawer";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold mb-2">Vibe Prop Trading</span>
            <span className="block text-xl">Decentralized Prop Trading Platform</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Trading Account:</p>
            <Address address={connectedAddress} />
          </div>
          <p className="text-center text-lg mt-4 max-w-2xl mx-auto">
            Start your journey to become a funded crypto trader. Trade with up to $100,000 in virtual capital and earn
            real profits through our decentralized prop trading challenges.
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-8 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl hover:shadow-lg transition-all">
              <ChartBarIcon className="h-8 w-8 fill-secondary" />
              <h3 className="text-xl font-bold mt-4 mb-2">Markets</h3>
              <p>
                Access a wide range of cryptocurrency markets with{" "}
                <Link href="/markets" passHref className="link">
                  competitive spreads
                </Link>
              </p>
            </div>

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl hover:shadow-lg transition-all">
              <TrophyIcon className="h-8 w-8 fill-secondary" />
              <h3 className="text-xl font-bold mt-4 mb-2">Trading Challenges</h3>
              <p>
                Prove your trading skills in our{" "}
                <Link href="/challenges" passHref className="link">
                  evaluation program
                </Link>{" "}
                and earn a funded account.
              </p>
            </div>

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl hover:shadow-lg transition-all">
              <BanknotesIcon className="h-8 w-8 fill-secondary" />
              <h3 className="text-xl font-bold mt-4 mb-2">Get Funded</h3>
              <p>
                Successfully complete challenges to{" "}
                <Link href="/funding" passHref className="link">
                  trade with our capital
                </Link>{" "}
                and keep up to 90% of profits.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Vibe Prop Trading?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-base-100 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Decentralized & Transparent</h3>
                <p>All trading activities and fund management are handled through smart contracts</p>
              </div>
              <div className="bg-base-100 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Instant Payouts</h3>
                <p>Receive your profit share directly to your wallet without delays</p>
              </div>
              <div className="bg-base-100 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Multiple Account Sizes</h3>
                <p>Choose from $10,000 to $100,000 evaluation accounts</p>
              </div>
              <div className="bg-base-100 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Fair Evaluation</h3>
                <p>Clear rules and objectives with automated performance tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileDrawer />
    </>
  );
};

export default Home;

"use client";

import { useState } from "react";

// Mock data for challenges
const challenges = [
  {
    id: 1,
    title: "Forex Mastery",
    description: "Master forex trading strategies and risk management",
    subscribed: true,
    progress: 65,
    milestones: [
      { title: "Complete 50 trades", achieved: true },
      { title: "Achieve 10% profit", achieved: false },
    ],
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
  },
  {
    id: 2,
    title: "Crypto Trading Pro",
    description: "Navigate the volatile crypto markets with confidence",
    subscribed: false,
    progress: 0,
    milestones: [
      { title: "Trade 5 different cryptocurrencies", achieved: false },
      { title: "Maintain a positive balance for 2 weeks", achieved: false },
    ],
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
  },
  // Add more challenges as needed
];

export default function ExploreContent() {
  const [subscribedChallenges, setSubscribedChallenges] = useState(
    challenges.filter(challenge => challenge.subscribed),
  );

  const handleSubscribe = (challengeId: number) => {
    setSubscribedChallenges(prev => [...prev, challenges.find(c => c.id === challengeId)!]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {challenges.map(challenge => (
        <div key={challenge.id} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{challenge.title}</h2>
            <p className="text-sm opacity-70">{challenge.description}</p>

            <div className="flex-grow">
              {subscribedChallenges.some(c => c.id === challenge.id) ? (
                <>
                  <progress className="progress progress-primary w-full mb-2" value={challenge.progress} max="100" />
                  <p className="text-sm opacity-70 mb-2">Progress: {challenge.progress}%</p>
                  <div className="space-y-2">
                    {challenge.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center">
                        <span className={`badge mr-2 ${milestone.achieved ? "badge-primary" : "badge-secondary"}`}>
                          {milestone.achieved ? "Achieved" : "Pending"}
                        </span>
                        <span className="text-sm">{milestone.title}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-sm opacity-70">Subscribe to start this challenge!</p>
              )}
            </div>

            <div className="card-actions justify-between items-center mt-4">
              <p className="text-sm opacity-70">Expires: {challenge.expiresAt.toLocaleDateString()}</p>
              {!subscribedChallenges.some(c => c.id === challenge.id) && (
                <button className="btn btn-primary" onClick={() => handleSubscribe(challenge.id)}>
                  Subscribe
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

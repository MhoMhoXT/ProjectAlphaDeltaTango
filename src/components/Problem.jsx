import React from 'react';
// I've chosen icons that better represent the new, relevant content
import { FiDollarSign, FiSlash, FiAlertTriangle } from 'react-icons/fi';

export default function Problem() {
  // 1. CONTENT: Updated the problems to be relevant to the "Rejected Ads" theme
  const problems = [
    {
      icon: <FiDollarSign size={32} className="text-emerald-400 mb-4" />,
      title: 'Wasted Ad Spend',
      description: 'Every rejected ad is money down the drain. Stop guessing and start launching campaigns that run from day one.',
    },
    {
      icon: <FiSlash size={32} className="text-emerald-400 mb-4" />,
      title: 'Sudden Account Bans',
      description: 'One wrong word can trigger an algorithm and lock you out of your ad account, crippling your business overnight.',
    },
    {
      icon: <FiAlertTriangle size={32} className="text-emerald-400 mb-4" />,
      title: 'Unclear Policies',
      description: 'Ad platform policies are a moving target. Our AI stays up-to-date so you don\'t have to read the fine print.',
    },
  ];

  return (
    // 2. BACKGROUND: Added a relative container for the aurora glow effect
    <section id="problem" className="relative overflow-hidden py-24 bg-black">
      <div className="absolute inset-0 w-full h-full 
                      bg-gradient-to-r from-emerald-950/20 via-black to-cyan-950/20 opacity-50 z-0" />

      {/* The z-10 ensures content stays above the background glow */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          The Risk is Higher Than You Think
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-16">
          Relying on luck to get your ads approved is a losing strategy. The consequences of a rejected ad go far beyond a single campaign.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            // 3. CARDS: Styled the cards with a "glassmorphism" effect
            <div 
              key={index} 
              className="flex flex-col items-center p-8 border border-white/10 
                         bg-white/5 rounded-2xl backdrop-blur-sm"
            >
              {problem.icon}
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

//export default Problem;
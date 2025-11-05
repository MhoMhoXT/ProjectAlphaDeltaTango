import React from 'react';
import { FiUsers } from 'react-icons/fi'; // An icon to represent the team

export default function OriginStory() {
  return (
    // This section uses a slightly different background glow to stand out
    <section className="relative overflow-hidden py-24 bg-black">
      <div className="absolute inset-0 w-full h-full 
                      bg-gradient-to-r from-emerald-950/20 via-black to-cyan-950/20 opacity-50 z-0" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Simple icon to add a human touch */}
        <FiUsers className="mx-auto text-emerald-400 mb-4" size={40} />

        <h2 className="text-4xl font-bold text-white mb-4">
          Built to Solve a Frustrating Problem
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          I saw how much time and money was wasted on rewriting rejected ad campaigns due to complex rules. As a developer, I knew there had to be a smarter, automated way. So, Im building the tool I wish existed.
        </p>
      </div>
    </section>
  );
};

//export default OriginStory;
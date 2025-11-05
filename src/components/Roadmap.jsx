import React from 'react';
import {
  FaKeyboard, FaUserCheck, FaBolt, FaRocket,
  FaTiktok, FaBrain, FaShareAlt, FaImage,
  FaVideo, FaChrome, FaBuilding, FaTrophy,
  FaHashtag,
} from 'react-icons/fa';

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Foundation & Private Beta",
    description: "Launch the core text analysis engine for major ad platforms, gathering feedback from a select group of beta testers.",
    features: [
      { icon: <FaKeyboard />, text: "Core AI for Text Ad Analysis (Google & Meta)" },
      { icon: <FaBolt />, text: "Instant Risky Word & Phrase Highlighting" },
      { icon: <FaUserCheck />, text: "Onboarding First Beta Users" },
    ],
  },
  {
    phase: "Phase 2",
    title: "Public Launch & AI Expansion",
    description: "Go live to the public while enhancing the AI's accuracy and expanding platform support based on beta feedback.",
    features: [
      { icon: <FaRocket />, text: "Official Public Launch" },
      { icon: <FaTiktok />, text: "Add Support for TikTok Text Ads" },
      { icon: <FaBrain />, text: "Enhanced AI Model (Higher Accuracy)" },

    ],
  },
  {
    phase: "Phase 3",
    title: "Visual AI & Pro Features",
    description: "Introduce advanced AI for analyzing image and video content, a major step towards comprehensive ad compliance.",
    features: [
      { icon: <FaImage />, text: "AI Image & Video Analysis (Logos, Text, Content)" },
      { icon: <FaHashtag />, text: "Creative Generation" },
      { icon: <FaVideo />, text: "Video Thumbnail & Audio Transcript Scans" },
      { icon: <FaChrome />, text: "Browser Extension for Real-time Feedback" },
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-24 px-4 sm:px-8" id="roadmap">
        <div className="absolute inset-0 w-full h-full 
                      bg-gradient-to-r from-emerald-950/20 via-black to-cyan-950/20 opacity-50 z-0" />

      <div className="relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            Product Roadmap
          </h2>
          <p className="text-lg text-gray-300">
            Our journey to build the ultimate proactive ad compliance tool.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* The timeline line: on left for mobile, in center for desktop */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-cyan-500 md:left-1/2 md:-translate-x-1/2 rounded-full"></div>
          
          <div className="relative">
            {roadmapPhases.map((item, index) => (
              <div key={index} className="relative mb-12">
                {/* The Dot: on left for mobile, in center for desktop */}
                <div className="absolute top-1 left-4 w-5 h-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full border-4 border-black md:left-1/2 md:-translate-x-1/2 shadow-[0_0_20px_theme(colors.emerald.500/0.5)]"></div>

                {/* The Card Container: Stacks on mobile, alternates on desktop */}
                <div className={`
                  w-full pl-12 
                  md:w-1/2 
                  ${index % 2 === 0 ? 'md:pl-0 md:pr-16' : 'md:pl-16 md:ml-auto'}
                `}>
                  
                  <div className={`
                    relative bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-emerald-500/80 backdrop-blur-sm
                    ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}
                  `}>
                    
                    {/* The Arrow: Always points to the line */}
                    <div className={`
                      absolute top-4 w-0 h-0 border-[10px] border-transparent 
                      ${index % 2 === 0 ? 'md:left-auto md:right-[-20px] md:border-l-[rgba(255,255,255,0.1)]' : 'md:right-auto md:left-[-20px] md:border-r-[rgba(255,255,255,0.1)]'}
                      left-[-20px] border-r-[rgba(255,255,255,0.1)]
                    `}></div>
                    
                    <div className={`text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>{item.phase}</div>
                    <h3 className={`text-2xl font-bold mb-4 text-white ${index % 2 === 0 ? 'md:text-right' : ''}`}>{item.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                    <ul className={`list-none space-y-3 ${index % 2 === 0 ? 'md:items-end' : ''} flex flex-col`}>
                    {item.features.map((feature, fIndex) => (
                        <li key={fIndex} className={`flex items-center gap-3 text-gray-300 ${index % 2 === 0 ? 'md:flex-row-reverse md:gap-3' : ''}`}>
                          <span className="text-emerald-400">{feature.icon}</span>
                          {feature.text}
                        </li>
                    ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
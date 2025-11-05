import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

// 1. CARD STYLING: The Feature component is now styled with the "glassmorphism" effect
const Feature = ({ title, children }) => (
  // Updated background, border, and hover effects to match the theme
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start space-x-4 
                  transition-all duration-300 hover:border-emerald-500/80 hover:-translate-y-1 backdrop-blur-sm">
    {/* 2. ACCENT COLOR: Icon color updated to emerald green */}
    <FiCheckCircle size={24} className="text-emerald-400 mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{children}</p>
    </div>
  </div>
);

export default function FeatureSection() {
  return (
    // 3. BACKGROUND: Consistent styling with a new aurora glow
    <section id="features" className="relative overflow-hidden py-24 bg-black">
      {/* This div creates a new blue aurora glow for visual variety */}
      <div className="absolute inset-0 w-full h-full 
                      bg-gradient-to-r from-emerald-950/20 via-black to-cyan-950/20 opacity-50 z-0" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          {/* 4. CONTENT: Text updated to be benefit-driven and relevant */}
          <h2 className="text-4xl font-bold text-white mb-4">Never Fly Blind Again</h2>
          <p className="text-lg text-gray-300">Key features designed to protect your ad accounts and maximize your ROI.</p>
        </div>
        <div className="max-w-3xl mx-auto grid md:grid-cols-1 gap-8">
          <Feature title="Multi-Platform Policy Scan">
            Our AI is trained on the latest ad policies from <strong>Google, Facebook, and TikTok</strong>. We scan your copy for common triggers before you spend a single dollar.
          </Feature>
          <Feature title="Risky Language Highlighting">
            Instantly flag words and phrases that cause rejections. From exaggerated claims to trademark issues, we show you exactly what to fix and why.
          </Feature>
          <Feature title="Pre-Launch Confidence Score">
            Get a simple, data-driven compliance score for every ad. A high score means you're ready to launch, giving you peace of mind and predictable results.
          </Feature>
        </div>
      </div>
    </section>
  );
};

//export default FeatureSection;
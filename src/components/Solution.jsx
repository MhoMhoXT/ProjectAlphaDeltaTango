import React from 'react';

export default function Solution()  {
  return (
    // 1. BACKGROUND & LAYOUT: Consistent dark background, relative for glow, increased padding
    <section id="solution" className="relative overflow-hidden py-28 bg-black">
      <div className="absolute inset-0 w-full h-full 
                      bg-gradient-to-r from-emerald-950/20 via-black to-cyan-950/20 opacity-50 z-0" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* 3. HEADINGS: Updated titles and descriptions for the new product focus */}
        <h2 className="text-4xl font-bold text-white mb-4">
          The Solution: Proactive Ad Compliance
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-20">
          Our AI acts as your ultimate ad guardian, pre-screening your campaigns for compliance issues across all major platforms. Launch with confidence, not fear.
        </p>

        <div className="max-w-2xl mx-auto mb-16 p-6 text-left border border-emerald-500/30 
                        bg-white/5 rounded-2xl backdrop-blur-sm 
                        shadow-[0_0_20px_theme(colors.emerald.400/0.3)]">
            <p className="text-sm font-semibold text-emerald-400 mb-2">AI-Generated Insight Example:</p>
            <blockquote className="font-mono text-gray-300 border-l-2 border-emerald-500/50 pl-4 italic">
                “Your ad may be rejected under Meta’s Misleading Claims policy (Health & Fitness).
                <br/><br/>
                <span className="text-emerald-400 not-italic">⚠️ Tip:</span> Avoid phrases like ‘guaranteed results’ or ‘instant transformation.’”
            </blockquote>
        </div>

        {/* 4. STEPS: Applied the "glassmorphism" card style from the Problem section */}
        <div className="grid md:grid-cols-3 gap-8"> {/* Changed gap to match problem section */}
          {/* Step 1 */}
          <div className="flex flex-col items-center p-8 border border-white/10 
                           bg-white/5 rounded-2xl backdrop-blur-sm">
            {/* 5. NUMBER CIRCLES: Styled to match the aurora theme with emerald glow */}
            <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full 
                            bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 font-bold text-2xl
                            shadow-[0_0_15px_theme(colors.emerald.400/0.3)]">
              1
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Upload Your Ad Copy</h3>
            <p className="text-gray-400">Paste your text, upload your creatives, or link your ad draft. Our AI is ready.</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center p-8 border border-white/10 
                           bg-white/5 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full 
                            bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 font-bold text-2xl
                            shadow-[0_0_15px_theme(colors.emerald.400/0.3)]">
              2
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Instant AI Scan</h3>
            <p className="text-gray-400">Get immediate, actionable feedback on potential policy violations and risky language.</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center p-8 border border-white/10 
                           bg-white/5 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full 
                            bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 font-bold text-2xl
                            shadow-[0_0_15px_theme(colors.emerald.400/0.3)]">
              3
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Launch with Confidence</h3>
            <p className="text-gray-400">Make quick adjustments and push your ads live, knowing you're compliant and safe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

//export default Solution;
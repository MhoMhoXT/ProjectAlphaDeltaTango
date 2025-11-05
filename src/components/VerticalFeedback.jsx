// src/components/VerticalFeedback.jsx
import React from 'react';

export default function VerticalFeedback() {
  const handleFeedbackClick = () => {
    // This uses the Tally Form ID from your environment variables
    if (window.Tally) {
      window.Tally.openPopup(import.meta.env.VITE_TALLY_FORM_ID, {
        emoji: { text: '👋', animation: 'wave' },
      });
    } else {
      console.error('Tally script not loaded yet.');
    }
  };

  return (
    <button
      onClick={handleFeedbackClick}
      className="fixed z-50 origin-bottom-left -rotate-90 
      
                 /* --- RESPONSIVE POSITIONING --- */
                 /* Mobile (default): 96px up, 48px from left */
                 bottom-24 left-12
                 
                 /* Medium screens & up: 96px up, 40px from left */
                 md:left-10
                 
                 /* --- STYLING --- */
                 text-gray-400 uppercase tracking-widest text-xs font-bold
                 transition-all duration-300 hover:text-emerald-300
                 hover:text-shadow-aurora"
    >
      Share Feedback
    </button>
  );
}
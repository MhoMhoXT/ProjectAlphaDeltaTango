// src/components/StickyCTA.jsx
import { useState, useEffect } from 'react';

export default function StickyCTA({ onCtaClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky bar after scrolling 90% of the hero height
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <span className="text-lg font-semibold text-white">Adligent</span>
        <button
          onClick={onCtaClick}
          className="rounded-full bg-white px-6 py-2.5 font-semibold text-black transition-transform hover:scale-105"
        >
          Get Early Access
        </button>
      </div>
    </div>
  );
}
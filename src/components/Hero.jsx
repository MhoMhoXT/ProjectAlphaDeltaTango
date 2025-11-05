// src/components/Hero.jsx
import DarkVeil from '../background/DarkVeil';
import BubbleMenu from './BubbleMenu';
// REMOVED: import useTally from '../hooks/useTally';
import { FiArrowDown } from 'react-icons/fi'; // <-- Import the arrow icon

// Logo and menuItems constants remain the same...
const Logo = () => (
    <span className="text-lg font-semibold text-white">Adligent</span>
);

const menuItems = [
    {
        label: 'Home',
        href: '#home',
        ariaLabel: 'Home Section',
        rotation: -8,
        hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
        label: 'Roadmap',
        href: '#roadmap',
        ariaLabel: 'Roadmap Section',
        rotation: 8,
        hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
        label: 'Join!',
        href: '#footer',
        ariaLabel: 'Join the Waitlist',
        rotation: -8,
        hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    }
];

// Receive onCtaClick as a prop
const Hero = ({ onCtaClick }) => {
    
    // We only need the Tally hook for the "Test My Ad" button
    const handleTestMyAdClick = () => {
      if (window.Tally) {
        window.Tally.openPopup(import.meta.env.VITE_TALLY_FORM_ID_2, {
          emoji: { text: '👋', animation: 'wave' },
        });
      } else {
        console.error('Tally script not loaded yet.');
      }
    };

    return (
        <section id="home" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
            <DarkVeil />
            <BubbleMenu
                logo={<Logo />}
                items={menuItems}
                menuBg="rgba(255, 255, 255, 0.05)" // Semi-transparent for a glass effect
                menuContentColor="#FFFFFF"          // White hamburger lines
            />

            {/* Main Content Container */}
            <div className="absolute z-10 flex flex-col items-center px-4 text-center">
                <button className="mb-6 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                    Now with GPT-4o Insights
                </button>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl md:leading-tight">
                    Stop Losing Money to Rejected Ads
                </h1>
                <p className="mt-6 max-w-xl text-gray-300">
                    Our AI checks Facebook, Google, or TikTok ads before you launch - so you can fix risky language, avoid bans, and keep your campaigns running.
                </p>
                
                {/* --- MODIFIED CTA BUTTONS --- */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* 1. "Get Early Access" button - bigger and more attractive */}
                    <button
                        onClick={onCtaClick} // Use the prop from App.jsx
                        className="rounded-full bg-white px-8 py-4 text-lg font-bold text-black 
                                   transition-all duration-300 hover:scale-105 
                                   shadow-lg shadow-white/10 hover:shadow-emerald-300/30"
                    >
                        Get Early Access
                    </button>
                    
                    {/* 2. "Test My Ad" button - more attractive */}
                    <button 
                        onClick={handleTestMyAdClick}
                        className="rounded-full px-6 py-2 text-sm font-medium 
                                   bg-emerald-500/10 border border-emerald-500/50 text-emerald-300 
                                   transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-500/80 hover:scale-105"
                    >
                        Test My Ad (Free)
                    </button>
                </div>
                {/* --- END MODIFIED CTA BUTTONS --- */}
            </div>
            {/* --- ADDED SCROLL INDICATOR --- */}
                <a
                    href="#problem"
                    className="absolute bottom-4 flex flex-col items-center text-white-400 
                               transition-colors hover:text-white animate-bounce-slow"
                >
                    <span className="text-xs tracking-wider">SCROLL FOR MORE</span>
                    <FiArrowDown className="w-4 h-4 mt-1" />
                </a>
                {/* --- END SCROLL INDICATOR --- */}
        </section>
    );
};

export default Hero;
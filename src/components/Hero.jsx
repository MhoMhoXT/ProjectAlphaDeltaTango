import { useState } from 'react';
import DarkVeil from '../background/DarkVeil';
import BubbleMenu from './BubbleMenu';
import SignUpModal from './SignUpModal';
import useTally from '../hooks/useTally';



// Step 2: Define a simple logo and menu items to pass as props
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


const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // 3. Add state for modal
    // REMOVED: const { openTally } = useTally();

    // --- MODIFICATION: Call window.Tally directly ---
    const handleFeedbackClick = () => {
      if (window.Tally) {
        window.Tally.openPopup(import.meta.env.VITE_TALLY_FORM_ID, {
          emoji: {
            text: '👋',
            animation: 'wave',
          },
        });
      } else {
        console.error("Tally script not loaded yet.");
      }
    };

    // --- MODIFICATION: Call window.Tally directly ---
    const handleFeedbackClick2 = () => {
      if (window.Tally) {
        window.Tally.openPopup(import.meta.env.VITE_TALLY_FORM_ID_2, {
          emoji: {
            text: '👋',
            animation: 'wave',
          },
        });
      } else {
        console.error("Tally script not loaded yet.");
      }
    };

    return (
        <>
            <section id="home" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">

                {/* The background component is placed here */}
                <DarkVeil
                />

                {/* --- Step 3: Replace the old <nav> with the new <BubbleMenu> --- */}
                <BubbleMenu
                    logo={<Logo />}
                    items={menuItems}
                    menuBg="rgba(255, 255, 255, 0.05)" // Semi-transparent for a glass effect
                    menuContentColor="#FFFFFF"          // White hamburger lines
                />


                {/* Main Content Container - positioned above the background with z-10 */}
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
                    <div className="mt-8 flex items-center justify-center gap-x-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="rounded-full bg-white px-6 py-2.5 font-semibold text-black transition-transform hover:scale-105"
                        >
                            Get Early Access
                        </button>
                        <a
                            href="#problem"
                            className="rounded-full border border-white/20 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* The feedback link is now on its own line below */}
                    <button 
                      onClick={handleFeedbackClick}
                      className="spinning-border mt-4 rounded-full bg-black px-6 py-2 text-sm text-gray-300 hover:text-white transition-colors border border-dashed
                      "
                  >
                      Share Feedback
                  </button>
                  <button 
                      onClick={handleFeedbackClick2}
                      className="spinning-border mt-4 rounded-full bg-black px-6 py-2 text-sm text-gray-300 hover:text-white transition-colors border border-dashed
                      "
                  >
                      Test My Ad (Free)
                  </button>
                    <p className="mt-3 text-s text-gray-400">No credit card required, just early access feedback.</p>
                </div>
            </section>
            <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Hero;
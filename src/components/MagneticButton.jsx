// src/components/MagneticButton.jsx
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function MagneticButton({ children, className, ...props }) {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        // Mouse move event to pull the button towards the cursor
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = button.getBoundingClientRect();
            
            // Calculate the distance from the cursor to the center of the button
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            
            // Animate the button using GSAP
            gsap.to(button, { 
                x: x * 0.3, // The multiplier controls the "magnetic" strength
                y: y * 0.3, 
                duration: 0.8, 
                ease: 'power3.out' 
            });
        };

        // Mouse leave event to snap the button back to its original position
        const handleMouseLeave = () => {
            gsap.to(button, { 
                x: 0, 
                y: 0, 
                duration: 1, 
                ease: 'elastic.out(1, 0.4)' // A bouncy return effect
            });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup function to remove event listeners
        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);

        };
            
    }, []); // Empty dependency array ensures this runs only once

    return (
        <button ref={buttonRef} className={className} {...props}>
            {children}
        </button>
    );
}
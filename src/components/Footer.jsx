import React, { useState } from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa'; // Assuming you want social icons, can be removed

// REMOVED: const SHEETDB_URL = import.meta.env.VITE_SHEETDB_API_URL;

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            // --- MODIFICATION: Fetch from your new serverless function ---
            const response = await fetch('/api/submit-waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email }), // Send just the email
            });
            // --- END MODIFICATION ---

            if (response.ok) {
                setMessage("Success! You're on the list.");
                setEmail(''); // Clear the input on success
            } else {
                throw new Error('Submission failed. Please try again.');
            }
        } catch (error) {
            setMessage(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        // --- FIX: Changed id to "cta" to match your navigation links ---
        <footer id="footer" className="relative overflow-hidden bg-black text-white py-24 px-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full 
                            bg-gradient-to-t from-emerald-950/40 via-cyan-950/20 to-transparent blur-[150px] z-0" />

            <div className="relative z-10 container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold mb-4">
                        Be the First to Know
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Join the waitlist for limited early access, product updates, and an exclusive launch discount.
                    </p>

                    <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-grow w-full rounded-full bg-white/5 px-6 py-3 text-white border border-white/20 
                                       focus:outline-none focus:ring-2 focus:ring-emerald-400/50 text-center sm:text-left"
                        />
                        <button type="submit" disabled={isSubmitting} className="rounded-full bg-white px-8 py-3 font-semibold text-black transition-transform hover:scale-105 disabled:opacity-50">
                            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                        </button>
                    </form>
                    {message && <p className="text-center text-sm text-gray-300 mt-4">{message}</p>}
                </div>

                <div className="border-t border-white/10 pt-8 mt-20 flex flex-col sm:flex-row justify-between items-center text-center">
                    <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                        &copy; {new Date().getFullYear()} Adligent AI. All Rights Reserved.
                    </p>                    
                </div>
            </div>
        </footer>
    );
};
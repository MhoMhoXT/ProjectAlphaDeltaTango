// src/components/SignUpModal.jsx
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

// REMOVED: const SHEETDB_URL = import.meta.env.VITE_SHEETDB_API_URL; 

const adPlatforms = ['Facebook', 'Google', 'TikTok', 'Other'];

export default function SignUpModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [checkedState, setCheckedState] = useState(
        adPlatforms.reduce((acc, platform) => ({ ...acc, [platform]: false }), {})
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (platform) => {
        setCheckedState(prevState => ({ ...prevState, [platform]: !prevState[platform] }));
    };

    const submitToSheetDB = async (data) => {
        setIsSubmitting(true);
        setMessage('');
        try {
            // --- MODIFICATION: Fetch from your new serverless function ---
            const response = await fetch('/api/submit-waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data), // Send the data directly
            });
            // --- END MODIFICATION ---

            if (response.ok) {
                // --- CRITICAL FIX: The success message is now correctly set to the state ---
                setMessage(
                    <span>
                        You’re on the list! We’ll invite you to the private beta soon. Want to help shape the tool?{' '}
                        <a 
                            href="https://tally.so/r/w87GXP" // Your Tally form URL
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-bold text-emerald-400 underline hover:text-emerald-300"
                        >
                            Click here to share.
                        </a>
                    </span>
                );
                // --- UX IMPROVEMENT: Removed the automatic 2-second close ---
                // The modal will now stay open so the user can read the message and click the link.
            } else { 
                throw new Error('Submission failed.');
            }
        } catch (error) {
            setMessage('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const selectedPlatforms = Object.keys(checkedState)
            .filter((key) => checkedState[key])
            .join(', ');

        submitToSheetDB({ email, platforms: selectedPlatforms });
    };
    
    const handleGoogleSuccess = (credentialResponse) => {
        console.log(credentialResponse);
        submitToSheetDB({ email: 'Signed up with Google', platforms: 'N/A' });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md" onClick={onClose}>
            <div 
                className="font-lexend text-center relative w-full max-w-md p-8
                           bg-gray-900/80 border border-emerald-500/30 rounded-2xl
                           shadow-[0_0_30px_theme(colors.emerald.400/0.4)]"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">&times;</button>
                
                <h2 className="text-3xl font-bold text-white mb-2">Get Early Access</h2>
                <p className="text-gray-300 mb-6">Join the waitlist to be the first to know when we launch.</p>
                
                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => console.log('Login Failed')}
                    theme="outline"
                    size="large"
                    width="100%"
                />

                <div className="my-6 flex items-center gap-x-4">
                    <hr className="w-full border-gray-600" />
                    <span className="text-gray-400 text-sm">OR</span>
                    <hr className="w-full border-gray-600" />
                </div>

                <form onSubmit={handleFormSubmit}>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/20 
                                   focus:outline-none focus:ring-2 focus:ring-emerald-400/50 mb-4 text-center"
                    />

                    <div className="text-left">
                        {/* --- STYLE FIX: Removed text-center from this paragraph --- */}
                        <p className="text-sm text-gray-300 mb-3">What ad platforms do you use? (Optional)</p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                            {adPlatforms.map((platform) => (
                                <label key={platform} className="flex items-center gap-x-2 text-gray-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={checkedState[platform]}
                                        onChange={() => handleCheckboxChange(platform)}
                                        className="h-4 w-4 rounded bg-white/10 border-white/30 text-emerald-500 focus:ring-emerald-500"
                                    />
                                    {platform}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-white py-2.5 font-semibold text-black transition-transform hover:scale-105 disabled:opacity-50">
                        {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                    </button>
                    {/* The message state now correctly renders the success JSX */}
                    <div className="text-center text-sm text-gray-300 mt-4">{message}</div>
                </form>
            </div>
        </div>
    );
}
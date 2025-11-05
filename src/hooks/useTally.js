// src/hooks/useTally.js
import { useCallback } from 'react';

const TALLY_EMBED_URL = 'https://tally.so/widgets/embed.js';
let isTallyScriptLoading = false;

const useTally = () => {
  const openTally = useCallback((formId, options = {}) => {
    // If the Tally object is already on the window, the script is loaded.
    // We can just open the form directly.
    if (window.Tally) {
      window.Tally.openPopup(formId, options);
      return;
    }

    // If the script is already in the process of loading, do nothing.
    if (isTallyScriptLoading) {
      return;
    }

    // Mark the script as loading
    isTallyScriptLoading = true;

    // Create a new script element
    const script = document.createElement('script');
    script.src = TALLY_EMBED_URL;
    script.async = true;

    // When the script finishes loading, open the form and reset the flag
    script.onload = () => {
      if (window.Tally) {
        window.Tally.open(formId, options);
      }
      isTallyScriptLoading = false;
    };
    
    // If the script fails to load, log an error and reset the flag
    script.onerror = () => {
      console.error('Failed to load Tally script.');
      isTallyScriptLoading = false;
    };

    // Append the script to the body to start loading it
    document.body.appendChild(script);
  }, []);

  return { openTally };
};

export default useTally;
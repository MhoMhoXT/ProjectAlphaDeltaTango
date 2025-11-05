import React, { useEffect, useRef } from 'react';

export default function ImagePreviewModal({ isOpen, onClose, imageUrl, imageAlt }) {
  const modalRef = useRef(null);

  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        className="relative p-4 max-w-6xl max-h-[90vh] overflow-auto" // Adjust max-w and max-h as needed
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-white text-4xl leading-none opacity-80 hover:opacity-100 transition-opacity z-10"
          aria-label="Close"
        >
          &times;
        </button>
        {/* Lazy load the image */}
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          loading="lazy" 
          className="w-full h-auto rounded-lg shadow-2xl border border-white/10"
        />
      </div>
    </div>
  );
}

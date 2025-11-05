import React, { useState } from 'react';
// Using a chevron icon for the accordion toggle
import { FiChevronDown } from 'react-icons/fi';

// Refined Q&A content with an added question on data security
const qaData = [
  {
    question: "Will this guarantee my ads get approved?",
    answer: "No tool can guarantee approval. Adligent AI acts as an expert co-pilot, flagging potential policy violations based on millions of data points. It significantly increases your approval rate by helping you fix issues before you submit."
  },
  {
    question: "How much will it cost?",
    answer: "Our private beta is completely free—we only ask for your feedback. After the official launch, pricing will be a simple, flat monthly fee designed to be a tiny fraction of your ad spend."
  },
  {
    question: "Which ad platforms are supported?",
    answer: "We're launching with full support for Meta (Facebook & Instagram) text ads. Google and TikTok will follow shortly, with image and video analysis planned on our roadmap."
  },
  {
    question: "Is my ad data secure?",
    answer: "Absolutely. Your data is encrypted in transit and at rest. Security and privacy are foundational to our platform."
  }
];

export default function QASection() {
    // State to manage which accordion item is open
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        // If the clicked item is already open, close it. Otherwise, open it.
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative overflow-hidden py-24 bg-black">
                <div className="absolute inset-0 w-full h-full 
                      bg-gradient-to-r from-emerald-950/20 via-black to-cyan-950/20 opacity-50 z-0" />


            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-300">
                        Everything you need to know before you get started.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {qaData.map((item, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full flex justify-between items-center text-left p-6"
                            >
                                <span className="text-lg font-semibold text-white">{item.question}</span>
                                <FiChevronDown 
                                    className={`text-emerald-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                                    size={24} 
                                />
                            </button>
                            <div 
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-gray-300">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

//export default QASection;
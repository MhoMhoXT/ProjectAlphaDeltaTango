import React, { useState, Suspense } from 'react'
import './App.css'
import Hero from './components/Hero';
import ImagePreviewModal from './components/ImagePreviewModal';

const Problem = React.lazy(() => import('./components/Problem'));
const Solution = React.lazy(() => import('./components/Solution'));
const FeatureSection = React.lazy(() => import('./components/FeatureSection'));
const OriginStory = React.lazy(() => import('./components/OriginStory'));
const QASection = React.lazy(() => import('./components/QASection'));
const Roadmap = React.lazy(() => import('./components/Roadmap'));
const Footer = React.lazy(() => import('./components/Footer'));





function App() {

  const [isDashboardPreviewOpen, setIsDashboardPreviewOpen] = useState(false);

  return (
    <>
      <Hero />
      {/* This is the new section for the UI preview button */}
        <section className="py-20 bg-black text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Take a look...</h2>
            <p className="text-lg text-gray-300 mb-8">Get a sneak peek at our intuitive dashboard.</p>
            <button
              onClick={() => setIsDashboardPreviewOpen(true)} // This button opens the modal
              className="rounded-full bg-white px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
            >
              Preview Dashboard
            </button>
        </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Problem />
        <Solution />
        <FeatureSection />
        <OriginStory />
        <QASection />
        <Roadmap />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
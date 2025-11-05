import React, { useState, Suspense } from 'react'
import './App.css'
import Hero from './components/Hero';
import StickyCTA from './components/StickyCTA';
import VerticalFeedback from './components/VerticalFeedback';
import SignUpModal from './components/SignUpModal'; 


const Problem = React.lazy(() => import('./components/Problem'));
const Solution = React.lazy(() => import('./components/Solution'));
const FeatureSection = React.lazy(() => import('./components/FeatureSection'));
const OriginStory = React.lazy(() => import('./components/OriginStory'));
const QASection = React.lazy(() => import('./components/QASection'));
const Roadmap = React.lazy(() => import('./components/Roadmap'));
const Footer = React.lazy(() => import('./components/Footer'));




function App() {

  const [isDashboardPreviewOpen, setIsDashboardPreviewOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Pass the click handler to Hero */}
      <Hero onCtaClick={() => setIsModalOpen(true)} />
      
      {/* Add the new components */}
      <StickyCTA onCtaClick={() => setIsModalOpen(true)} />
      <VerticalFeedback />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Problem />
        <Solution />
        <FeatureSection />
        <OriginStory />
        <QASection />
        <Roadmap />
        <Footer />
      </Suspense>

      <SignUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default App;
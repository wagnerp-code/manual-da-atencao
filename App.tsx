import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Transformation } from './components/Transformation';
import { Product } from './components/Product';
import { Audience } from './components/Audience';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { SalesNotification } from './components/SalesNotification';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-yellow-200 selection:text-black">
      <SalesNotification />
      <main className="bg-white shadow-xl max-w-3xl mx-auto min-h-screen overflow-hidden">
        <Hero />
        <Problem />
        <Transformation />
        <Product />
        <Audience />
        <SocialProof />
        <Pricing />
        <Footer />
      </main>
      <StickyCTA />
    </div>
  );
}

export default App;
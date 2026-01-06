import React, { useEffect, useState } from 'react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const scrollToCheckout = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-2xl z-50 md:hidden animate-fade-in-up">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 line-through">R$ 297</span>
          <span className="font-bold text-slate-900 text-lg">R$ 37,90</span>
        </div>
        <button 
          onClick={scrollToCheckout}
          className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-sm shadow-md active:scale-95 transition-transform"
        >
          BAIXAR AGORA
        </button>
      </div>
    </div>
  );
};
import React from 'react';
import { Button } from './Button';
import { ArrowRight, Lock } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToCheckout = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-12 pb-10 px-6 text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
        <Lock size={12} />
        Método Validado
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
        Faça qualquer pessoa parar o feed em <span className="bg-yellow-200 px-1">3 segundos - e TE ASSISTIR</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
        O manual prático para criadores que cansaram de ser ignorados pelo algoritmo e querem atenção real, sem dancinhas e sem truques.
      </p>

      <Button onClick={scrollToCheckout} fullWidth>
        QUERO O MANUAL DA ATENÇÃO
        <ArrowRight size={20} />
      </Button>
      
      <p className="mt-4 text-xs text-slate-400">
        Acesso imediato • Sem Mensalidades • Aplicação prática
      </p>
    </section>
  );
};

import React from 'react';
import { Button } from './Button';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 px-6 max-w-2xl mx-auto text-center">
      <div className="border border-slate-200 rounded-2xl p-6 md:p-10 shadow-xl bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          OFERTA ESPECIAL
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Domine a Atenção Agora
        </h2>
        <p className="text-slate-500 mb-8">
          Acesso vitalício ao Manual + Atualizações
        </p>

        <div className="mb-8">
          <p className="text-slate-400 line-through text-sm">De R$ 297,88</p>
          <div className="flex items-center justify-center gap-1">
            <span className="text-2xl font-bold text-slate-700">por</span>
            <span className="text-5xl font-extrabold text-slate-900 tracking-tight">37,90</span>
          </div>
          <p className="text-green-600 text-sm font-semibold mt-2">
            (Menos que uma pizza)
          </p>
        </div>

       <a
  href="https://pay.cakto.com.br/nokig4w_715248"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button fullWidth className="mb-4 text-xl">
    COMPRAR MANUAL AGORA
    <ArrowRight />
  </Button>
</a>


        <div className="flex justify-center items-center gap-2 text-slate-400 text-xs">
          <ShieldCheck size={14} />
          <span>Pagamento 100% Seguro</span>
        </div>
      </div>
    </section>
  );
};

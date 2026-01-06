import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          O método que profissionais de verdade usam
        </h2>
        
        <div className="grid gap-4 text-left">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <p className="text-slate-700 text-sm italic mb-3">
              "Eu achava que meu nicho era muito chato para ter views (contabilidade). O Manual me mostrou que eu só estava embalando meu conhecimento do jeito errado. Mudei os primeiros 3 segundos e tripliquei meu alcance."
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">RL</div>
              <div>
                <p className="text-xs font-bold text-slate-900">Ricardo Lima</p>
                <p className="text-[10px] text-slate-500">Contador & Consultor</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <p className="text-slate-700 text-sm italic mb-3">
              "O melhor é que não enrola. É abrir, pegar o modelo de hook e gravar. Economizo horas de quebrar a cabeça."
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">MA</div>
              <div>
                <p className="text-xs font-bold text-slate-900">Mariana Alves</p>
                <p className="text-[10px] text-slate-500">Nutricionista</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
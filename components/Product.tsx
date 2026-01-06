import React from 'react';
import { BookOpen, Zap, LayoutTemplate } from 'lucide-react';

export const Product: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10 text-center">
          <span className="text-green-400 font-bold tracking-wider text-sm">APRESENTANDO</span>
          <h2 className="text-3xl font-bold mt-2">O Manual da Atenção</h2>
        </div>

        <div className="flex justify-center mb-12 relative z-10">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/MANUAL DA ATENÇÃO CAPA.png" 
              alt="Capa do Manual da Atenção" 
              className="relative w-64 md:w-72 rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] bg-slate-800"
            />
          </div>
        </div>

        <div className="grid gap-8 mb-10">
          <div className="flex gap-4">
            <div className="bg-slate-800 p-3 rounded-lg h-fit">
              <Zap className="text-yellow-400" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Direto ao ponto</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sem teoria acadêmica chata. É um manual de consulta rápida para você abrir antes de postar e garantir que seu conteúdo tem retenção.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-slate-800 p-3 rounded-lg h-fit">
              <LayoutTemplate className="text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Modelos Prontos</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Templates de headlines, estruturas de roteiro e ganchos visuais que você só precisa copiar e adaptar para o seu nicho.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <BookOpen size={20} className="text-green-400"/>
            O que você vai dominar:
          </h3>
          <ul className="grid gap-3">
            {[
              "A Estrutura de 3 Atos para vídeos de 60 segundos.",
              "30 Headlines 'Fill-in-the-blanks' de alta conversão.",
              "Psicologia das cores: como se destacar no feed branco.",
              "Quebra de Padrão: técnicas visuais para interromper o scroll.",
              "Como transformar assuntos chatos em curiosidade imediata."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-green-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

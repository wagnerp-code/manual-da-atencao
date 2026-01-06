import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Transformation: React.FC = () => {
  return (
    <section className="py-12 px-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">O jogo vira quando você domina a atenção</h2>
      
      <p className="text-slate-600 mb-8">
        Atenção não é sorte. É técnica. Quando você aplica os ganchos certos, a dinâmica do seu perfil muda imediatamente:
      </p>

      <ul className="space-y-4">
        {[
          "Seus vídeos param de flopar nas primeiras 100 visualizações.",
          "Pessoas que nunca te viram começam a comentar.",
          "Seu conteúdo profundo finalmente é consumido até o final.",
          "Você deixa de ser um criador 'invisível' para virar autoridade."
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
            <span className="text-slate-800 font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
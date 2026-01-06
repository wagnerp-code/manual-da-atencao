import React from 'react';
import { X, Check } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <section className="py-12 px-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Para quem é isso?</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
          <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
            <Check size={20} />
            Para você que:
          </h3>
          <ul className="space-y-3 text-sm text-green-900">
            <li>• Produz conteúdo técnico ou educativo.</li>
            <li>• Vende serviços ou infoprodutos.</li>
            <li>• Sente que seu conteúdo é bom, mas mal distribuído.</li>
            <li>• Quer parar de depender da sorte.</li>
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
          <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
            <X size={20} />
            NÃO é para você que:
          </h3>
          <ul className="space-y-3 text-sm text-red-900">
            <li>• Busca hacks para enganar o algoritmo.</li>
            <li>• Quer viralizar fazendo dancinha.</li>
            <li>• Acha que existe botão mágico de dinheiro.</li>
            <li>• Não tem nada de valor para ensinar.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { EyeOff, AlertCircle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <EyeOff className="text-red-500" size={28} />
          <h2 className="text-2xl font-bold text-slate-900">Por que você está sendo ignorado?</h2>
        </div>
        
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            Você passa horas criando. O design está bonito. O conteúdo é profundo. Você posta e... <strong>silêncio.</strong>
          </p>
          <p>
            A culpa não é do seu conteúdo, nem do algoritmo. O problema é humano:
          </p>
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm my-4">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <AlertCircle size={18} className="text-slate-400" />
              O Fenômeno do "Scrolling Cego"
            </h3>
            <p className="text-sm text-slate-600">
              As pessoas entram no Instagram em estado de transe. O cérebro delas está treinado para ignorar tudo que parece "mais do mesmo". 
            </p>
          </div>
          <p>
            Se você não quebra esse padrão nos primeiros 3 segundos, seu conteúdo morre. Não importa o quão bom ele seja depois disso. <strong>Ninguém vai ver.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
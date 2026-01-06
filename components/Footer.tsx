import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-slate-400 text-xs border-t border-slate-200 bg-white">
      <p className="mb-2">© {new Date().getFullYear()} Manual da Atenção. Todos os direitos reservados.</p>
      <p>Este site não é afiliado ao Facebook ou Instagram.</p>
    </footer>
  );
};
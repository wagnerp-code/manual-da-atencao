import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ShoppingBag, User, CreditCard, Zap, BookOpen, Lock } from 'lucide-react';

const NAMES = [
  "Lucas", "Mariana", "Felipe", "Ana", "João", "Beatriz", "Rafael", 
  "Camila", "Gustavo", "Juliana", "Pedro", "Larissa", "Thiago", "Fernanda",
  "Rodrigo", "Patrícia", "Bruno", "Amanda", "Carlos", "Daniela",
  "Eduardo", "Vanessa", "Gabriel", "Isabela", "Matheus", "Letícia",
  "André", "Carolina", "Ricardo", "Bianca", "Marcelo", "Tatiane",
  "Vinícius", "Jéssica", "Leandro", "Priscila", "Renan", "Débora",
  "Roberto", "Cláudia", "Alexandre", "Bárbara", "Caio", "Luana"
];

// Templates focados em "Interesse/Acesso" (Soft)
const SOFT_TEMPLATES = [
  { text: "acabou de acessar o Manual", icon: User, color: "text-blue-600", bg: "bg-blue-100" },
  { text: "começou a ler agora", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100" },
  { text: "liberou o acesso ao material", icon: Lock, color: "text-indigo-600", bg: "bg-indigo-100" },
  { text: "acabou de entrar", icon: User, color: "text-slate-600", bg: "bg-slate-100" },
  { text: "está lendo o capítulo 2", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100" },
];

// Templates focados em "Conversão" (Hard)
const HARD_TEMPLATES = [
  { text: "finalizou a compra há {s} segundos", icon: ShoppingBag, color: "text-green-600", bg: "bg-green-100" },
  { text: "comprou o Manual da Atenção", icon: ShoppingBag, color: "text-green-600", bg: "bg-green-100" },
  { text: "garantiu a oferta de R$ 37,90", icon: Zap, color: "text-yellow-600", bg: "bg-yellow-100" },
  { text: "aproveitou o desconto especial", icon: Zap, color: "text-yellow-600", bg: "bg-yellow-100" },
  { text: "fez o pix e já vai acessar o Manual", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100" },
  { text: "teve o pagamento aprovado", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100" },
  { text: "acabou de pagar no cartão", icon: CreditCard, color: "text-purple-600", bg: "bg-purple-100" },
  { text: "finalizou o pedido agora", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100" },
];

export const SalesNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState({ 
    name: '', 
    text: '', 
    icon: User, 
    color: '', 
    bg: '' 
  });
  
  // Ref para rastrear quantas notificações já foram mostradas sem re-renderizar
  const countRef = useRef(0);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      // Delay variável: 10s a 90s
      const minDelay = 10000;
      const maxDelay = 90000;
      const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
      
      timeoutId = setTimeout(() => {
        if (isMounted) showNotification();
      }, delay);
    };

    const showNotification = () => {
      // LÓGICA DE INTELIGÊNCIA DE VENDAS:
      // Se for a 1ª ou 2ª notificação (índice 0 e 1), usa APENAS templates "Soft" (acesso/leitura).
      // Isso gera confiança antes de mostrar "gente comprando".
      // Da 3ª em diante, mistura tudo.
      
      const isEarlyStage = countRef.current < 2;
      
      // Define o pool de templates baseado no estágio
      let templatePool;
      if (isEarlyStage) {
        templatePool = SOFT_TEMPLATES;
      } else {
        // Mistura Soft e Hard, dando leve preferência para Hard duplicando o array
        templatePool = [...SOFT_TEMPLATES, ...HARD_TEMPLATES, ...HARD_TEMPLATES];
      }

      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const template = templatePool[Math.floor(Math.random() * templatePool.length)];
      
      let text = template.text;
      if (text.includes('{s}')) {
        const seconds = Math.floor(Math.random() * 45) + 5;
        text = text.replace('{s}', seconds.toString());
      }

      setContent({
        name,
        text,
        icon: template.icon,
        color: template.color,
        bg: template.bg
      });

      if (isMounted) {
        setVisible(true);
        countRef.current += 1; // Incrementa contador
      }

      // Tempo de exibição: 4.5 segundos
      setTimeout(() => {
        if (isMounted) {
          setVisible(false);
          scheduleNext();
        }
      }, 4500);
    };

    // Início rápido: primeira notificação entre 3 e 6 segundos (para pegar o usuário no topo)
    const initialDelay = Math.floor(Math.random() * 3000) + 3000;
    timeoutId = setTimeout(showNotification, initialDelay);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    // Z-Index 9999 garante que fique acima de TUDO (Sticky CTA, Modais, etc)
    <div className="fixed top-0 left-0 w-full z-[9999] pointer-events-none flex justify-center items-start pt-4">
      <div 
        className={`transition-all duration-700 ease-in-out transform ${
          visible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl rounded-full px-5 py-3 flex items-center gap-3 max-w-[92vw] md:max-w-md mx-auto">
          <div className={`${content.bg} ${content.color} p-2 rounded-full shrink-0`}>
            <content.icon size={16} />
          </div>
          <p className="text-sm text-slate-800 leading-tight">
            <span className="font-bold text-slate-900">{content.name}</span> {content.text}
          </p>
        </div>
      </div>
    </div>
  );
};
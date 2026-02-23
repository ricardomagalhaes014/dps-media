import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/351925708456', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Animated background pulse */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#00FF88] animate-pulse-glow" 
           style={{ width: '70px', height: '70px' }} />
      
      {/* Main button */}
      <button
        onClick={handleClick}
        className="relative w-[70px] h-[70px] rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FF00FF] to-[#0066FF] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Contacte-nos via WhatsApp"
        title="Peça a sua proposta"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" />
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-black/90 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{ right: '-10px' }}>
        Peça a sua proposta
      </div>

      {/* Floating text label */}
      <div className="absolute bottom-24 right-2 bg-white text-[#FF6B35] px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-fade-in-up"
           style={{ animation: 'fade-in-up 0.6s ease-out 0.3s both' }}>
        Contacte-nos
      </div>
    </div>
  );
}

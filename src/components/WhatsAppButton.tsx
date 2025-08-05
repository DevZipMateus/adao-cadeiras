
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/5511987654321?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20contábeis.', '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs service-card animate-slide-up">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800">Precisa de ajuda?</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Olá! Estamos aqui para ajudar com suas dúvidas sobre serviços contábeis.
          </p>
          <button
            onClick={handleOpenWhatsApp}
            className="w-full py-2 px-4 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-md flex items-center justify-center"
          >
            <img 
              src="/lovable-uploads/e5c365ac-2ba0-4157-bb97-d6821651fde1.png" 
              alt="WhatsApp" 
              className="w-5 h-5 mr-2" 
            />
            Iniciar conversa
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="whatsapp-btn bg-[#25D366] hover:bg-[#20BD5C] text-white p-3 rounded-full shadow-xl flex items-center justify-center relative overflow-hidden"
        aria-label="WhatsApp"
      >
        <div className="absolute inset-0 bg-white opacity-30 whatsapp-ripple"></div>
        <img 
          src="/lovable-uploads/e5c365ac-2ba0-4157-bb97-d6821651fde1.png" 
          alt="WhatsApp" 
          className="w-8 h-8" 
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;


import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ChevronDown, ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images for the carousel
  const backgroundImages = [
    '/lovable-uploads/1c9aad18-406a-47a1-9bfa-547947b49c22.png',
    '/lovable-uploads/8563b0d5-e3dc-4889-a789-e4f78d86a0db.png',
    '/lovable-uploads/46857d86-0470-4b21-83de-e97e3fb5489a.png',
    '/lovable-uploads/5a276a58-29a7-4433-9b01-b15d9d4d79b6.png'
  ];

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5522999667575?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20aluguel%20de%20cadeiras%20e%20móveis%20para%20meu%20evento.', '_blank');
  };

  return (
    <section id="inicio" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background image carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          ></div>
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="text-center max-w-4xl relative">
              {/* Quadro com fundo preto atrás do texto */}
              <div className="absolute inset-0 z-0 bg-black/50 rounded-lg -m-4 sm:-m-6 md:-m-8"></div>

              {/* Conteúdo de texto */}
              <div className="relative z-10 p-4 sm:p-6 md:p-8">
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium mb-4 sm:mb-6 animate-slide-up [animation-delay:300ms] text-xs sm:text-sm">
                  ✨ 15 anos transformando eventos especiais
                </span>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
                  Sua festa merece o <span className="text-accent">melhor lugar</span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:700ms] leading-relaxed">
                  Aluguel de cadeiras e móveis de qualidade superior para casamentos, eventos corporativos e festividades inesquecíveis.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up [animation-delay:900ms] mb-6 sm:mb-8">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md shadow-lg group text-sm sm:text-base px-6 py-3 sm:px-8"
                    onClick={handleWhatsAppClick}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-sm sm:text-base px-6 py-3 sm:px-8"
                    onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="hidden sm:inline">Ver Nossos Serviços</span>
                    <span className="sm:hidden">Nossos Serviços</span>
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-gray-200 text-xs sm:text-sm animate-slide-up [animation-delay:1100ms]">
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-accent fill-accent" />
                      ))}
                    </div>
                    15 anos de experiência
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2"></div>
                    Atendimento personalizado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce z-20" onClick={scrollToNextSection}>
        <ChevronDown size={24} className="sm:w-8 sm:h-8" />
      </div>
    </section>
  );
};

export default HeroSection;

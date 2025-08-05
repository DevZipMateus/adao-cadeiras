
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
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
    <section id="inicio" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
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

      {/* Carousel indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="text-center max-w-4xl">
              <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-md rounded-full text-white font-medium mb-6 animate-slide-up [animation-delay:300ms]">
                ✨ 15 anos transformando eventos especiais
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
                Sua festa merece o <span className="text-accent">melhor lugar</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:700ms]">
                Aluguel de cadeiras e móveis de qualidade superior para casamentos, eventos corporativos e festividades inesquecíveis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:900ms] mb-8">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md shadow-lg group"
                  onClick={handleWhatsAppClick}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Nossos Serviços
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 text-white/80 text-sm animate-slide-up [animation-delay:1100ms]">
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  15 anos de experiência
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Atendimento personalizado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce z-20" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;

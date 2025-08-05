import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);

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
    <section id="inicio" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `linear-gradient(rgba(29, 78, 216, 0.7), rgba(59, 130, 246, 0.5)), url('/lovable-uploads/1c9aad18-406a-47a1-9bfa-547947b49c22.png')`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-md rounded-full text-white font-medium mb-6 animate-slide-up [animation-delay:300ms]">
                ✨ 15 anos transformando eventos especiais
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
                Sua festa merece o <span className="text-accent">melhor lugar</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-slide-up [animation-delay:700ms]">
                Aluguel de cadeiras e móveis de qualidade superior para casamentos, eventos corporativos e festividades inesquecíveis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:900ms] mb-8">
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

              <div className="flex items-center space-x-8 text-white/80 text-sm animate-slide-up [animation-delay:1100ms]">
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

            <div className="hidden lg:block animate-slide-up [animation-delay:800ms]">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <img 
                      src="/lovable-uploads/4ff42cba-2ac0-4cbb-972f-7064d5c308fd.png" 
                      alt="Logo Adão Cadeiras" 
                      className="h-24 w-24 mx-auto mb-4 object-contain"
                    />
                    <h3 className="text-2xl font-bold text-white mb-2">Adão Cadeiras</h3>
                    <p className="text-accent font-medium">Aluguel de móveis para eventos</p>
                  </div>
                  
                  <div className="space-y-4 text-white/90">
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span>Modelos disponíveis</span>
                      <span className="text-accent font-bold">20+</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span>Anos de experiência</span>
                      <span className="text-accent font-bold">15</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span>Eventos realizados</span>
                      <span className="text-accent font-bold">1000+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;

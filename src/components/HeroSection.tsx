import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);
  const scrollToNextSection = () => {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
      }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary-foreground font-medium mb-6 animate-slide-up [animation-delay:300ms]">
                Tecnologia e Produtividade para o Agronegócio
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
                Sua Safra de <span className="text-primary">Sucesso</span> Começa Aqui
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-slide-up [animation-delay:700ms]">
                Da semente à colheita: soluções completas em implementos agrícolas, defensivos e máquinas para elevar sua produtividade.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:900ms] mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-lg group">
                  Explore Nossos Produtos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-white/80 text-sm animate-slide-up [animation-delay:1100ms]">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Mais de 15 anos no mercado
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Entrega para todo o Brasil
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-slide-up [animation-delay:800ms]">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl"></div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-1">Tecnologia de Ponta</h3>
                  <p className="text-sm text-muted-foreground">Equipamentos de última geração para máxima eficiência</p>
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
    </section>;
};
export default HeroSection;
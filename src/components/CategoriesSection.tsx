
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tractor, Sprout, ShieldCheck, Wrench, ArrowRight } from 'lucide-react';

const CategoriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleWhatsAppRedirect = (category: string) => {
    const message = `Olá! Gostaria de ver os produtos da categoria ${category}.`;
    const whatsappUrl = `https://wa.me/5567999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const categories = [
    {
      icon: <Tractor className="h-12 w-12 text-primary" />,
      title: "Máquinas e Tratores",
      description: "Plantadeiras, colheitadeiras, tratores e equipamentos de última geração",
      items: ["Plantadeiras", "Colheitadeiras", "Tratores", "Pulverizadores"],
      image: "/lovable-uploads/b0e53f15-a099-4bb1-b233-49c1f725a92a.png",
      color: "bg-green-500"
    },
    {
      icon: <Sprout className="h-12 w-12 text-primary" />,
      title: "Sementes e Mudas",
      description: "Sementes certificadas e mudas de alta qualidade para sua lavoura",
      items: ["Soja", "Milho", "Algodão", "Feijão"],
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-yellow-500"
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: "Defensivos e Fertilizantes",
      description: "Proteção completa e nutrição adequada para suas culturas",
      items: ["Herbicidas", "Fungicidas", "Inseticidas", "Fertilizantes"],
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-blue-500"
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Peças e Assistência",
      description: "Peças originais e serviços especializados para seus equipamentos",
      items: ["Peças Originais", "Manutenção", "Suporte Técnico", "Garantia"],
      image: "/lovable-uploads/ed1a0b4e-6a76-423c-a8ab-cc75ca716c4b.png",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="categories" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Soluções Completas para o <span className="text-primary">Agronegócio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Encontre tudo que você precisa para aumentar a produtividade da sua propriedade rural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm animate-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 text-white">
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-1 mb-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-primary/20 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => handleWhatsAppRedirect(category.title)}
                  >
                    Ver Produtos
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => handleWhatsAppRedirect("Todos os Produtos")}
          >
            Ver Todos os Produtos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

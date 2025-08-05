
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Armchair, 
  PartyPopper, 
  Building2, 
  Heart,
  Phone,
  CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5522999667575?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20aluguel%20de%20cadeiras%20e%20móveis.', '_blank');
  };

  const services = [
    {
      icon: <Heart className="h-12 w-12 text-accent" />,
      title: "Casamentos",
      description: "Cadeiras elegantes para tornar seu dia especial ainda mais bonito e memorável.",
      features: ["Modelos clássicos e modernos", "Decoração personalizada", "Entrega e retirada"]
    },
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      title: "Eventos Corporativos",
      description: "Móveis profissionais para conferências, seminários e reuniões empresariais.",
      features: ["Cadeiras executivas", "Mesas de apoio", "Setup completo"]
    },
    {
      icon: <PartyPopper className="h-12 w-12 text-accent" />,
      title: "Festas e Celebrações",
      description: "Variedade de opções para aniversários, formaturas e comemorações especiais.",
      features: ["Múltiplos modelos", "Diferentes cores", "Quantidade flexível"]
    },
    {
      icon: <Armchair className="h-12 w-12 text-primary" />,
      title: "Móveis Complementares",
      description: "Além de cadeiras, oferecemos mesas, bancos e outros móveis para eventos.",
      features: ["Mesas redondas e retangulares", "Bancos decorativos", "Móveis temáticos"]
    }
  ];

  return (
    <section id="servicos" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Soluções Completas em Aluguel de Móveis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Oferecemos uma ampla variedade de cadeiras e móveis para todos os tipos de eventos, 
            sempre com qualidade superior e atendimento personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-card animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Por que escolher a Adão Cadeiras?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Qualidade</h4>
                <p className="text-sm text-muted-foreground">Móveis sempre limpos e em perfeito estado</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">Atendimento</h4>
                <p className="text-sm text-muted-foreground">Suporte personalizado do início ao fim</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Armchair className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Variedade</h4>
                <p className="text-sm text-muted-foreground">Mais de 20 modelos diferentes disponíveis</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">Confiança</h4>
                <p className="text-sm text-muted-foreground">15 anos de experiência e credibilidade</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Solicitar Orçamento Gratuito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card h-full">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default ServicesSection;

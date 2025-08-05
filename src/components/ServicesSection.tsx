
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, PieChart, Building, Shield, FileCheck, BarChart } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const services = [
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Abertura e Legalização de Empresas",
      description: "Simplificamos todo o processo de criação da sua empresa, cuidando da burocracia para você iniciar suas atividades rapidamente."
    }, 
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Contabilidade Empresarial",
      description: "Registro preciso de todas as operações fiscais e contábeis, garantindo conformidade com as exigências legais."
    }, 
    {
      icon: <PieChart className="h-12 w-12 text-primary" />,
      title: "Gestão Fiscal e Tributária",
      description: "Planejamento tributário estratégico para reduzir legalmente a carga de impostos e otimizar os recursos da sua empresa."
    }, 
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Consultoria Tributária",
      description: "Orientação especializada para tomadas de decisão estratégicas, maximizando resultados e minimizando riscos."
    }, 
    {
      icon: <FileCheck className="h-12 w-12 text-primary" />,
      title: "Departamento Pessoal",
      description: "Gestão completa de folha de pagamento, admissões, demissões e toda a rotina trabalhista da sua empresa."
    }, 
    {
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Gestão Financeira",
      description: "Acompanhamento de indicadores financeiros, fluxo de caixa e análises gerenciais para decisões mais assertivas."
    }
  ];
  
  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Soluções Contábeis Completas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Oferecemos uma gama completa de serviços contábeis e financeiros para atender às necessidades 
            específicas do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              index={index} 
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  index
}: ServiceCardProps) => (
  <Card className={`animate-on-scroll service-card border border-border/50 shadow-md overflow-hidden h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-8 flex flex-col items-center text-center h-full">
      <div className="mb-5 p-4 bg-primary/5 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default ServicesSection;


import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Target, Heart, Award } from 'lucide-react';

const AboutSection = () => {
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

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Tecnologia e Experiência para o Sucesso do seu Agronegócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Mais que uma distribuidora de implementos, somos um parceiro estratégico comprometido com
            a produtividade e crescimento sustentável da sua propriedade rural.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">
                Conte com a AgroTech Implementos
              </h3>
              <p className="text-muted-foreground mb-6">
                Desde 2008, fornecemos soluções completas em implementos agrícolas para propriedades
                de todos os tamanhos. Nossa abordagem combina expertise técnica com um atendimento
                personalizado, garantindo que cada cliente receba os melhores equipamentos e
                orientações adequadas às suas necessidades específicas de produção.
              </p>
              <ul className="space-y-3">
                {[
                  'Equipe técnica especializada em agronegócio',
                  'Amplo portfólio de marcas líderes do mercado',
                  'Assistência técnica qualificada e peças originais',
                  'Atendimento personalizado e suporte pós-venda'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard 
              icon={<Target className="h-10 w-10 text-primary" />}
              title="Missão"
              description="Fornecer implementos agrícolas de qualidade superior, oferecendo soluções completas que maximizam a produtividade e rentabilidade de nossos clientes no agronegócio."
            />
            <AboutCard 
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Visão"
              description="Ser reconhecida como a principal distribuidora de implementos agrícolas do Centro-Oeste, criando parcerias duradouras baseadas em confiança e resultados."
            />
            <AboutCard 
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Valores"
              description="Comprometimento com a qualidade, inovação tecnológica, sustentabilidade, ética nos negócios e excelência no atendimento ao produtor rural."
            />
            <AboutCard 
              icon={<Check className="h-10 w-10 text-primary" />}
              title="Diferenciais"
              description="Assistência técnica especializada, estoque completo, entrega rápida, financiamento facilitado e equipe com conhecimento prático do campo."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;

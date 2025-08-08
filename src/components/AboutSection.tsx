import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Target, Heart, Award, Users } from 'lucide-react';

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
    <section id="sobre" ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossa História
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            15 Anos Transformando Eventos em Momentos Especiais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Uma jornada de dedicação, qualidade e compromisso com a excelência em cada detalhe dos seus eventos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">
                A História do Adão
              </h3>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Tudo começou há 15 anos, com um único modelo de cadeira e o sonho de um homem determinado: 
                  <strong className="text-primary"> Adão, nosso fundador</strong>. Movido pela vontade de oferecer qualidade 
                  e conforto para eventos especiais, ele iniciou sua jornada com simplicidade, mas com um olhar 
                  atento às necessidades dos clientes.
                </p>
                <p>
                  Com o passar do tempo, a confiança conquistada e a dedicação ao trabalho permitiram que a 
                  empresa crescesse e se reinventasse. Hoje, somos <strong className="text-accent">referência no setor 
                  de locação de cadeiras para eventos</strong>, com uma variedade de modelos que atendem desde 
                  casamentos elegantes até eventos corporativos sofisticados.
                </p>
                <p>
                  Com 15 anos de mercado, nos orgulhamos de fazer parte de momentos marcantes na vida das pessoas. 
                  <strong className="text-primary"> Cada cadeira que alugamos carrega um pouco da nossa história</strong> e o 
                  compromisso de tornar o seu evento mais bonito, organizado e acolhedor.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="relative">
              <img 
                src="/lovable-uploads/galeria/421049719_1400594890829219_5843344815423125039_n.jpeg" 
                alt="Evento elegante organizado pela Adão Cadeiras" 
                className="rounded-2xl shadow-chair object-cover w-full h-96"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-1">Sua festa merece o melhor lugar</h4>
                <p className="text-sm text-gray-700">15 anos fazendo parte dos seus momentos especiais</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AboutCard 
            icon={<Users className="h-10 w-10 text-primary" />}
            title="1000+"
            description="Eventos realizados com sucesso ao longo de 15 anos de mercado"
          />
          <AboutCard 
            icon={<Target className="h-10 w-10 text-accent" />}
            title="Qualidade"
            description="Cadeiras e móveis de qualidade superior para eventos especiais"
          />
          <AboutCard 
            icon={<Heart className="h-10 w-10 text-primary" />}
            title="Dedicação"
            description="Compromisso em tornar seu evento mais bonito e acolhedor"
          />
          <AboutCard 
            icon={<Award className="h-10 w-10 text-accent" />}
            title="Experiência"
            description="15 anos de experiência e confiança conquistada no mercado"
          />
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
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card text-center">
    <CardContent className="p-6">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h4 className="text-xl font-bold mb-2 text-primary">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;

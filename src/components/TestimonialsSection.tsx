
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Maria Silva",
      event: "Casamento",
      rating: 5,
      content: "O Adão e sua equipe foram perfeitos! As cadeiras chegaram no horário, estavam impecáveis e fizeram toda a diferença na decoração do meu casamento. Recomendo de olhos fechados!"
    },
    {
      name: "João Santos",
      event: "Evento Corporativo",
      rating: 5,
      content: "Excelente serviço! Precisávamos de 200 cadeiras para um seminário e tudo foi entregue pontualmente. A qualidade dos móveis é surpreendente e o atendimento é nota 10."
    },
    {
      name: "Ana Costa",
      event: "Aniversário",
      rating: 5,
      content: "Já é a terceira vez que alugo cadeiras com a Adão Cadeiras. Sempre um serviço impecável, cadeiras lindas e bem conservadas. Parabéns pela dedicação e qualidade!"
    }
  ];

  return (
    <section id="depoimentos" ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-accent/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-accent/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 animate-on-scroll">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-on-scroll px-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto animate-on-scroll px-4 leading-relaxed">
            15 anos de experiência resultaram em centenas de eventos bem-sucedidos e clientes satisfeitos. 
            Veja alguns depoimentos de quem já confiou na Adão Cadeiras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-card animate-on-scroll">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium">5.0 estrelas em mais de 1000 eventos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  event: string;
  rating: number;
  content: string;
}

const TestimonialCard = ({ name, event, rating, content }: TestimonialCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card relative h-full">
    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
        <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-accent/20" />
      </div>
      
      <div className="flex mb-3 sm:mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-accent fill-accent" />
        ))}
      </div>
      
      <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 italic flex-grow leading-relaxed">"{content}"</p>
      
      <div className="mt-auto">
        <h4 className="font-semibold text-sm sm:text-base">{name}</h4>
        <p className="text-xs sm:text-sm text-muted-foreground">{event}</p>
      </div>
    </CardContent>
  </Card>
);

export default TestimonialsSection;

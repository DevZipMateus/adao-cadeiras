
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            15 anos de experiência resultaram em centenas de eventos bem-sucedidos e clientes satisfeitos. 
            Veja alguns depoimentos de quem já confiou na Adão Cadeiras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-card animate-on-scroll">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-sm font-medium">5.0 estrelas em mais de 1000 eventos</span>
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
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card relative">
    <CardContent className="p-6">
      <div className="absolute top-4 right-4">
        <Quote className="h-8 w-8 text-accent/20" />
      </div>
      
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-accent fill-accent" />
        ))}
      </div>
      
      <p className="text-muted-foreground mb-6 italic">"{content}"</p>
      
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground">{event}</p>
      </div>
    </CardContent>
  </Card>
);

export default TestimonialsSection;

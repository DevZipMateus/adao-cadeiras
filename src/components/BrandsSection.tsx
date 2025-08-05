
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BrandsSection = () => {
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

  const brands = [
    { name: "John Deere", logo: "https://logos-world.net/wp-content/uploads/2020/04/John-Deere-Logo.png" },
    { name: "Case IH", logo: "https://logoeps.com/wp-content/uploads/2013/01/case-ih-vector-logo.png" },
    { name: "New Holland", logo: "https://logos-world.net/wp-content/uploads/2020/08/New-Holland-Logo.png" },
    { name: "Massey Ferguson", logo: "https://logohistory.net/wp-content/uploads/2023/02/Massey-Ferguson-Logo.png" },
    { name: "Valtra", logo: "https://logoeps.com/wp-content/uploads/2014/09/valtra-vector-logo.png" },
    { name: "Kubota", logo: "https://logoeps.com/wp-content/uploads/2014/09/kubota-vector-logo.png" }
  ];

  return (
    <section id="brands" ref={sectionRef} className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossas Marcas Parceiras
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Trabalhamos com as <span className="text-primary">Melhores Marcas</span> do Mercado
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Parceria com fabricantes reconhecidos mundialmente pela qualidade e inovação
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-background/80 backdrop-blur-sm animate-on-scroll cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex items-center justify-center h-24">
                <div className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors text-center">
                  {brand.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Distribuidor Autorizado
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Peças Originais
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Assistência Técnica Especializada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

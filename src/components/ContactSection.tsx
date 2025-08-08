import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Telefone / WhatsApp",
      details: "(22) 99966-7575",
      link: "tel:+5522999667575"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "E-mail",
      details: "adaocadeirasltda@gmail.com",
      link: "mailto:adaocadeirasltda@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Endereço",
      details: "Severino Coutinho n°123",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Horário de Atendimento",
      details: "Segunda a Sábado, 8h às 18h",
      link: null
    }
  ];

  return (
    <section id="contato" ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Vamos Tornar Seu Evento Especial
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Entre em contato conosco para orçamentos personalizados. Nossa equipe está pronta para 
            ajudar você a escolher os móveis perfeitos para seu evento inesquecível.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border border-border/50 shadow-card animate-on-scroll">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                  <p className="text-muted-foreground mb-8">
                    Para solicitar orçamentos, esclarecer dúvidas ou conhecer nossos modelos de cadeiras e móveis,
                    utilize um dos canais de atendimento abaixo. Atendemos toda a região com qualidade e pontualidade.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item, index) => (
                      <ContactInfoItem 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        details={item.details}
                        link={item.link}
                      />
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4">Siga-nos</h4>
                    <div className="flex space-x-3">
                      <SocialLink 
                        icon={<Instagram size={20} />} 
                        href="https://www.instagram.com/adaocadeiras?igsh=MTJtMXI4OG81anZtNw==" 
                        label="Instagram" 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center p-6 bg-primary/5 rounded-xl max-w-md">
                    <div className="mb-4">
                      <img 
                        src="/lovable-uploads/7869cb00-b8eb-4dcd-bfd9-a90294b93463.png" 
                        alt="Logo Adão Cadeiras" 
                        className="h-20 w-20 mx-auto object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Prefere falar no WhatsApp?</h3>
                    <p className="text-muted-foreground mb-6">
                      Clique no botão flutuante do WhatsApp no canto inferior direito da tela para falar 
                      diretamente conosco e receber atendimento personalizado para seu evento.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong>Adão Cadeiras</strong><br />
                      <em>"Sua festa merece o melhor lugar"</em>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string | null;
}

const ContactInfoItem = ({ icon, title, details, link }: ContactInfoItemProps) => {
  const content = (
    <div className="flex">
      <div className="flex-shrink-0 mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground mt-1">{details}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block hover:text-primary transition-colors">
        {content}
      </a>
    );
  }

  return content;
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink = ({ icon, href, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default ContactSection;

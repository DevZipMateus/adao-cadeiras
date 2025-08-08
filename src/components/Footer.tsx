import { Button } from '@/components/ui/button';
import { ChevronUp, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-background text-foreground py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full"></div>
                <img 
                  src="/lovable-uploads/7869cb00-b8eb-4dcd-bfd9-a90294b93463.png" 
                  alt="Logo Adão Cadeiras" 
                  className="h-12 w-12 object-contain relative z-10"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-primary">Adão</span> Cadeiras
                </h3>
                <p className="text-xs text-accent">Sua festa merece o melhor lugar</p>
              </div>
            </div>
            <p className="text-foreground/80 max-w-xs">
              Há 15 anos oferecendo qualidade e conforto em aluguel de cadeiras e móveis para eventos especiais.
            </p>
            <div className="flex space-x-4 mt-6">
              <FooterSocialLink 
                href="https://www.instagram.com/adaocadeiras?igsh=MTJtMXI4OG81anZtNw==" 
                aria-label="Instagram" 
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#inicio">Início</FooterNavItem>
              <FooterNavItem href="#sobre">Sobre</FooterNavItem>
              <FooterNavItem href="#servicos">Serviços</FooterNavItem>
              <FooterNavItem href="#depoimentos">Depoimentos</FooterNavItem>
              <FooterNavItem href="#contato">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#servicos">Casamentos</FooterNavItem>
              <FooterNavItem href="#servicos">Eventos Corporativos</FooterNavItem>
              <FooterNavItem href="#servicos">Festas e Celebrações</FooterNavItem>
              <FooterNavItem href="#servicos">Móveis Complementares</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>(22) 99966-7575</li>
              <li>adaocadeirasltda@gmail.com</li>
              <li>Severino Coutinho n°123</li>
              <li>Segunda a Sábado, 8h às 18h</li>
            </ul>
          </div>
        </div>

        <hr className="border-border my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">
            © {new Date().getFullYear()} Adão Cadeiras. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-primary/80 border-primary/20 hover:bg-primary/90 text-white"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
}

const FooterNavItem = ({ href, children }: FooterNavItemProps) => (
  <li>
    <a
      href={href}
      className="text-foreground/70 hover:text-primary transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

interface FooterSocialLinkProps {
  href: string;
  'aria-label': string;
}

const FooterSocialLink = (props: FooterSocialLinkProps) => (
  <a
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 hover:bg-accent/30 transition-colors duration-200"
  >
    <Instagram className="h-4 w-4 text-accent" />
  </a>
);

export default Footer;

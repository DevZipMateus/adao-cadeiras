
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary-foreground text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">AgroTech</span> Implementos
            </h3>
            <p className="text-white/80 max-w-xs">
              Soluções completas em implementos agrícolas, máquinas e equipamentos para o agronegócio.
            </p>
            <div className="flex space-x-4 mt-6">
              <FooterSocialLink href="#" aria-label="Facebook" />
              <FooterSocialLink href="#" aria-label="Instagram" />
              <FooterSocialLink href="#" aria-label="LinkedIn" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#categories">Produtos</FooterNavItem>
              <FooterNavItem href="#brands">Marcas</FooterNavItem>
              <FooterNavItem href="#about">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#categories">Máquinas e Tratores</FooterNavItem>
              <FooterNavItem href="#categories">Sementes e Mudas</FooterNavItem>
              <FooterNavItem href="#categories">Defensivos e Fertilizantes</FooterNavItem>
              <FooterNavItem href="#categories">Peças e Assistência</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li>(11) 3456-7890</li>
              <li>contato@agrotechimplementos.com.br</li>
              <li>Rod. BR-163, Km 85, Campo Grande - MS</li>
              <li>Segunda a Sexta, 7h às 17h</li>
              <li>Sábado, 8h às 12h</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} AgroTech Implementos. Todos os direitos reservados.
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
      className="text-white/70 hover:text-primary transition-colors duration-200"
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
    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-primary/80 transition-colors duration-200"
  />
);

export default Footer;

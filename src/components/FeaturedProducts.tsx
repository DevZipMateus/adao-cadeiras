
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const FeaturedProducts = () => {
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

  const handleWhatsAppRedirect = (action: string, productName: string) => {
    let message = '';
    if (action === 'add') {
      message = `Olá! Gostaria de adicionar ao carrinho: ${productName}`;
    } else if (action === 'quote') {
      message = `Olá! Gostaria de solicitar um orçamento para: ${productName}`;
    } else if (action === 'view') {
      message = `Olá! Gostaria de ver mais detalhes sobre: ${productName}`;
    } else {
      message = `Olá! Gostaria de ver todos os produtos disponíveis.`;
    }
    
    const whatsappUrl = `https://wa.me/5567999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Plantadeira John Deere 2130",
      category: "Plantadeiras",
      price: "R$ 450.000",
      originalPrice: "R$ 480.000",
      image: "https://www.deere.com.br/assets/images/region-3/products/planting-equipment/dualflex-hitch/dualflex_estudio_large_348510ce4fc3841078cb501dbbe542eeb5d020f2.jpg",
      rating: 4.8,
      reviews: 24,
      features: ["GPS Integrado", "20 Linhas", "Sistema Automático"],
      badge: "Mais Vendido"
    },
    {
      id: 2,
      name: "Colheitadeira Case IH 6140",
      category: "Colheitadeiras",
      price: "R$ 1.200.000",
      originalPrice: null,
      image: "https://static.wixstatic.com/media/f37214_2dccbbd253444ff580234e83743f7924~mv2.jpeg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f37214_2dccbbd253444ff580234e83743f7924~mv2.jpeg",
      rating: 4.9,
      reviews: 18,
      features: ["Cabine Luxo", "Sistema Auto-Track", "Tanque 10.000L"],
      badge: "Lançamento"
    },
    {
      id: 3,
      name: "Trator New Holland T7.245",
      category: "Tratores",
      price: "R$ 380.000",
      originalPrice: "R$ 420.000",
      image: "/lovable-uploads/b0e53f15-a099-4bb1-b233-49c1f725a92a.png",
      rating: 4.7,
      reviews: 32,
      features: ["245cv", "Transmissão CVT", "Ar Condicionado"],
      badge: "Oferta"
    }
  ];

  return (
    <section id="products" ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Produtos em Destaque
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Equipamentos de <span className="text-primary">Última Geração</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Confira nossa seleção especial de máquinas e implementos que estão revolucionando o agronegócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-background shadow-card animate-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.badge === 'Mais Vendido' ? 'bg-green-500 text-white' :
                      product.badge === 'Lançamento' ? 'bg-blue-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-white/90 hover:bg-white"
                      onClick={() => handleWhatsAppRedirect('view', product.name)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      OFERTA
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="space-y-1 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through block">
                          {product.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => handleWhatsAppRedirect('add', product.name)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Adicionar
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/20"
                      onClick={() => handleWhatsAppRedirect('quote', product.name)}
                    >
                      Orçamento
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => handleWhatsAppRedirect('all', '')}
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

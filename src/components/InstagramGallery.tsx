
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';

const InstagramGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; description: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

  // Array with all gallery images from the galeria folder
  const galleryImages = [
    {
      id: 1,
      src: '/lovable-uploads/galeria/Cliente_1_1_cadeira dior dourada com assen.jpg',
      description: 'Cadeira Dior Dourada com Assento Personalizado'
    },
    {
      id: 2,
      src: '/lovable-uploads/galeria/Cliente_1_2_cadeira dior dourada  souplast.jpg',
      description: 'Cadeira Dior Dourada com Sousplat'
    },
    {
      id: 3,
      src: '/lovable-uploads/galeria/Cliente_1_3_cadeira medalho de tecido  na.jpg',
      description: 'Cadeira Medalhão de Tecido Natural'
    },
    {
      id: 4,
      src: '/lovable-uploads/galeria/Cliente_1_4_cadeira medalho de tela branca.jpeg',
      description: 'Cadeira Medalhão de Tela Branca'
    },
    {
      id: 5,
      src: '/lovable-uploads/galeria/Cliente_1_5_cadeira medalho de tela na cor.jpg',
      description: 'Cadeira Medalhão de Tela Colorida'
    },
    {
      id: 6,
      src: '/lovable-uploads/galeria/Cliente_1_6_cadeiras modelo katrina   mesa.jpeg',
      description: 'Cadeiras Modelo Katrina com Mesa'
    },
    {
      id: 7,
      src: '/lovable-uploads/galeria/Cliente_1_7_cadeiras modelo ratan.jpeg',
      description: 'Cadeiras Modelo Rattan'
    },
    {
      id: 8,
      src: '/lovable-uploads/galeria/Cliente_1_8_cadeira tiffany branca.jpg',
      description: 'Cadeira Tiffany Branca'
    },
    {
      id: 9,
      src: '/lovable-uploads/galeria/Cliente_1_9_cadeira tiffany branca 1.jpg',
      description: 'Cadeira Tiffany Branca - Modelo Alternativo'
    },
    {
      id: 10,
      src: '/lovable-uploads/galeria/Cliente_1_10_cadeira tiffany dourada.jpg',
      description: 'Cadeira Tiffany Dourada'
    },
    {
      id: 11,
      src: '/lovable-uploads/galeria/Cliente_1_11_cadeira tiffany dourada2.jpg',
      description: 'Cadeira Tiffany Dourada - Modelo 2'
    },
    {
      id: 12,
      src: '/lovable-uploads/galeria/Cliente_1_12_cadeira tiffany dourada  cadei.jpg',
      description: 'Cadeira Tiffany Dourada - Detalhes'
    },
    {
      id: 13,
      src: '/lovable-uploads/galeria/Cliente_1_13_cadeira tiffany dourada  toalh.jpg',
      description: 'Cadeira Tiffany Dourada com Toalha'
    },
    {
      id: 14,
      src: '/lovable-uploads/galeria/Cliente_1_14_guardanapo branco  souplat de.jpg',
      description: 'Guardanapo Branco com Sousplat Decorativo'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const openModal = (image: { src: string; description: string }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Eventos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos eventos que realizamos com nossas cadeiras de alta qualidade
          </p>
        </div>

        {/* Carousel Gallery */}
        <div className="max-w-4xl mx-auto px-4">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div 
                      className="aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                      onClick={() => openModal({ src: image.src, description: image.description })}
                    >
                      <img
                        src={image.src}
                        alt={image.description}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      
                      {/* Overlay with title on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                          <p className="text-sm font-medium truncate">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Modal */}
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={closeModal}>
            <div className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 md:-top-12 md:-right-4 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 z-10"
                aria-label="Fechar modal"
              >
                <X size={24} className="md:w-8 md:h-8" />
              </button>
              
              <div className="flex flex-col items-center max-w-full max-h-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.description}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl mb-4"
                />
                
                {/* Description */}
                <div className="bg-black/70 backdrop-blur-md rounded-lg px-6 py-3 max-w-lg text-center">
                  <h3 className="text-white text-lg font-semibold">
                    {selectedImage.description}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramGallery;


import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const InstagramGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Array com todas as imagens da galeria
  const galleryImages = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    src: `/lovable-uploads/galeria/midia_${index + 1}.jpg`,
    alt: `Evento ${index + 1} - Adão Cadeiras`
  }));

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
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

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
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
                  <div className="p-1">
                    <div 
                      className="aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                      onClick={() => openModal(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12" />
            <CarouselNext className="right-2 md:-right-12" />
          </Carousel>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(current / 3) === index
                    ? 'bg-primary'
                    : 'bg-muted-foreground/30'
                }`}
                onClick={() => api?.scrollTo(index * 3)}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-[90vh] m-4" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Fechar modal"
              >
                <X size={32} />
              </button>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramGallery;


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

  // Calculate slides per view based on screen size
  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg breakpoint
      if (window.innerWidth >= 768) return 2;  // md breakpoint
      return 1; // mobile
    }
    return 3; // default
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <div className="max-w-7xl mx-auto px-4">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-2 md:pl-4">
                  <div className="group">
                    <div 
                      className="aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                      onClick={() => openModal(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12 lg:-left-16 hidden sm:flex" />
            <CarouselNext className="right-2 md:-right-12 lg:-right-16 hidden sm:flex" />
          </Carousel>

          {/* Mobile navigation dots */}
          <div className="flex sm:hidden justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(galleryImages.length / 1) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? 'bg-primary w-6'
                    : 'bg-muted-foreground/30'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>

          {/* Desktop/Tablet indicators */}
          <div className="hidden sm:flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(galleryImages.length / slidesPerView) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(current / slidesPerView) === index
                    ? 'bg-primary w-6'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => api?.scrollTo(index * slidesPerView)}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={closeModal}>
            <div className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 md:-top-12 md:-right-4 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 z-10"
                aria-label="Fechar modal"
              >
                <X size={24} className="md:w-8 md:h-8" />
              </button>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
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

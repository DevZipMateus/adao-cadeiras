
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const InstagramGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Array with all gallery images from the galeria folder
  const galleryImages = [
    {
      id: 1,
      src: '/lovable-uploads/galeria/158836264_122418069823480_373883690755657855_n.jpg',
      alt: 'Evento 1 - Adão Cadeiras'
    },
    {
      id: 2,
      src: '/lovable-uploads/galeria/159975535_257133622696125_5924969915992606861_n.jpg',
      alt: 'Evento 2 - Adão Cadeiras'
    },
    {
      id: 3,
      src: '/lovable-uploads/galeria/163970047_716105219073539_860767275870115205_n.jpg',
      alt: 'Evento 3 - Adão Cadeiras'
    },
    {
      id: 4,
      src: '/lovable-uploads/galeria/166070659_436067811015220_4625401853513535473_n.jpg',
      alt: 'Evento 4 - Adão Cadeiras'
    },
    {
      id: 5,
      src: '/lovable-uploads/galeria/184140314_460943145209197_7745859829712356694_n.jpg',
      alt: 'Evento 5 - Adão Cadeiras'
    },
    {
      id: 6,
      src: '/lovable-uploads/galeria/204916377_242178177299471_8601017692325336122_n.jpg',
      alt: 'Evento 6 - Adão Cadeiras'
    },
    {
      id: 7,
      src: '/lovable-uploads/galeria/371164999_757403113061797_3388762491690021538_n.jpeg',
      alt: 'Evento 7 - Adão Cadeiras'
    },
    {
      id: 8,
      src: '/lovable-uploads/galeria/398184952_348980327520428_4884544028449461223_n.jpeg',
      alt: 'Evento 8 - Adão Cadeiras'
    },
    {
      id: 9,
      src: '/lovable-uploads/galeria/421049719_1400594890829219_5843344815423125039_n.jpeg',
      alt: 'Evento 9 - Adão Cadeiras'
    },
    {
      id: 10,
      src: '/lovable-uploads/galeria/468927856_18364420555190853_9152400418090912794_n.jpg',
      alt: 'Evento 10 - Adão Cadeiras'
    },
    {
      id: 11,
      src: '/lovable-uploads/galeria/469117793_18365287195190853_4792012984879741980_n.jpg',
      alt: 'Evento 11 - Adão Cadeiras'
    },
    {
      id: 12,
      src: '/lovable-uploads/galeria/469341734_18365270929190853_749017412423903585_n.jpg',
      alt: 'Evento 12 - Adão Cadeiras'
    },
    {
      id: 13,
      src: '/lovable-uploads/galeria/72903073_549907478890703_4720852067685294477_n.jpg',
      alt: 'Evento 13 - Adão Cadeiras'
    },
    {
      id: 14,
      src: '/lovable-uploads/galeria/80861838_1317752195083778_7402250467880756825_n.jpg',
      alt: 'Evento 14 - Adão Cadeiras'
    },
    {
      id: 15,
      src: '/lovable-uploads/galeria/81029235_2622265014509448_5628145339557464140_n.jpg',
      alt: 'Evento 15 - Adão Cadeiras'
    },
    {
      id: 16,
      src: '/lovable-uploads/galeria/82340593_3159655747395898_1202198698418444551_n.jpg',
      alt: 'Evento 16 - Adão Cadeiras'
    },
    {
      id: 17,
      src: '/lovable-uploads/galeria/87611875_228859754937316_4480060986231724453_n.jpg',
      alt: 'Evento 17 - Adão Cadeiras'
    }
  ];

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

        {/* Grid Gallery */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group">
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

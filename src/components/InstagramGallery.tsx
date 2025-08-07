
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const InstagramGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Array com todas as imagens da galeria
  const galleryImages = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    src: `/lovable-uploads/galeria/midia_${index + 1}.jpg`,
    alt: `Evento ${index + 1} - Adão Cadeiras`
  }));

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

        {/* Instagram-style grid */}
        <div className="instagram-gallery">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="gallery-image"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="close-button"
                aria-label="Fechar modal"
              >
                <X size={24} />
              </button>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="modal-image"
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

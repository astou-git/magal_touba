import React from 'react';

const galleryImages = [
  {
    src: '/Grande_mosquée_de_Touba.jpg',
    alt: 'Grande Mosquée de Touba',
  },
  {
    src: '/touba-senegal_1057-9665.jpg',
    alt: 'Touba Sénégal',
  },
  {
    src: '/Grande-mosquee-de-touba-Magal-kazurajab-2025-scaled.jpg',
    alt: 'Magal Kazurajab 2025',
  },
  {
    src: '/main-mosque.webp',
    alt: 'Magal Kazurajab 2025',
  },
  
];

function GalleryCarousel() {
  return (
    <section data-theme="light" className="py-16 bg-base-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Galerie de Touba</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Découvrez en images quelques lieux emblématiques de Touba pour les pèlerins : la Grande Mosquée, le mausolée, la bibliothèque et les places historiques. Cette galerie vous offre un aperçu de la spiritualité et de l'architecture de la ville.</p>
        <div className="carousel rounded-box w-full max-w-4xl mx-auto mb-8">
          {galleryImages.map((img, idx) => (
            <div className="carousel-item" key={idx}>
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover rounded-lg shadow-md border border-base-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryCarousel;

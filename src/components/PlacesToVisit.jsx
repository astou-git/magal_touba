import React from 'react';

function PlacesToVisit() {
  const places = [
    {
      name: 'Grande Mosquée de Touba',
      image: '/Grande_mosquée_de_Touba.jpg',
      description: 'Fondée en 1887 par Cheikh Ahmadou Bamba, cette mosquée est l\'un des plus grands lieux de culte d\'Afrique, pouvant accueillir jusqu\'à 7 000 fidèles.',
      stats: ['7 000 places', '7 minarets', '3 dômes principaux'],
    },
    {
      name: 'Mausolée de Cheikh Ahmadou Bamba',
      image: '/Grande_mosquée_de_Touba.jpg',
      description: 'Lieu de repos de Cheikh Ahmadou Bamba, fondateur du mouridisme, ce mausolée est un site de pèlerinage majeur.',
      stats: ['Lieu de pèlerinage', 'Site historique'],
    },
    {
      name: 'Bibliothèque de Touba',
      image: '/Grande_mosquée_de_Touba.jpg',
      description: 'Avec plus de 160 000 volumes, cette bibliothèque est un centre de savoir et de recherche pour les musulmans.',
      stats: ['160 000 livres', 'Centre de recherche'],
    },
    {
      name: 'Place de l\'Indépendance',
      image: '/Grande_mosquée_de_Touba.jpg',
      description: 'Centre névralgique de la ville, cette place est le point de rassemblement lors des grandes cérémonies.',
      stats: ['Centre de rassemblement', 'Lieu d\'événements'],
    },
  ];

  return (
    <section data-theme="light" className="py-16 bg-base-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-8">À Visiter à Touba</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {places.map((place, index) => (
            <div key={index} className="card bg-base-100 shadow-xl rounded-lg">
              <figure>
                <img src={place.image} alt={place.name} className="rounded-t-lg h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">{place.name}</h3>
                <p className="text-gray-700 mb-4">{place.description}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {place.stats.map((stat, index) => (
                    <li key={index}>{stat}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlacesToVisit;

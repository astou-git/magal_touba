import React, { useEffect, useState } from 'react';

function PlacesToVisit() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/places')
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement des lieux');
        return res.json();
      })
      .then(data => {
        setPlaces(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section data-theme="light" className="py-16 bg-base-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-8">À Visiter à Touba</h2>
        {loading ? (
          <p className="text-lg text-gray-600">Chargement...</p>
        ) : error ? (
          <p className="text-error">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {places.map((place) => (
              <div key={place.id} className="card bg-base-100 shadow-xl rounded-lg">
                <figure>
                  <img src={place.image} alt={place.nom} className="rounded-t-lg h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">{place.nom}</h3>
                  <p className="text-gray-700 mb-4">{place.description}</p>
                  <span className="text-sm text-gray-500">{place.type}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PlacesToVisit;

import React, { useEffect, useState } from 'react';

function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/prayer-times')
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement des horaires');
        return res.json();
      })
      .then(data => {
        setPrayerTimes(data);
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
        <h2 className="text-4xl font-bold text-blue-800 mb-8">Horaires de Prières</h2>
        {loading ? (
          <p className="text-lg text-gray-600">Chargement...</p>
        ) : error ? (
          <p className="text-error">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {prayerTimes.map((prayer) => (
              <div key={prayer.id} className="card bg-white shadow-xl rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">{prayer.nom}</h3>
                <p className="text-xl text-gray-700">{prayer.heure.slice(0,5)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PrayerTimes;

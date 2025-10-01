import React from 'react';

function PrayerTimes() {
  const prayerTimes = [
    { name: 'Fajr', time: '05:48' },
    { name: 'Dhuhr', time: '13:01' },
    { name: 'Asr', time: '16:22' },
    { name: 'Maghrib', time: '19:04' },
    { name: 'Isha', time: '20:15' },
  ];

  return (
    <section data-theme="light" className="py-16 bg-base-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-8">Horaires de Prières</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {prayerTimes.map((prayer, index) => (
            <div key={index} className="card bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{prayer.name}</h3>
              <p className="text-xl text-gray-700">{prayer.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrayerTimes;

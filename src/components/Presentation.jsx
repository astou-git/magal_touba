import React from 'react';
import sampleImg from '../assets/Grande_mosquée_de_Touba.jpg'; // remplace par l'image correcte si nécessaire

function Presentation() {
  return (
    <section data-theme="light" className="py-12 bg-base-200">
      <div className="container mx-auto flex flex-col items-center justify-between min-h-[48vh]">
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800  mb-4">Présentation</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Retrouvez ici l'historique, les valeurs et les temps forts du Grand Magal de Touba. Informations pratiques, conseils de déplacement et ressources officielles.
          </p>
        </div>

        {/* image placée tout en bas */}
        <div className="w-full flex justify-center mt-8">
          <img src={sampleImg} alt="Presentation" className="w-full max-w-sm object-contain" />
        </div>
      </div>
    </section>
  );
}

export default Presentation;

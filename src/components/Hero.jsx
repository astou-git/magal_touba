import React from 'react';
import heroImage from '../assets/Grande-mosquee-de-touba-Magal-kazurajab-2025-scaled.jpg'; 

function Hero() {
  return (
    <>
      <div
        id="hero"
        className="hero min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay bg-black/40"></div>
        {/* Contenu aligné à gauche et centré verticalement */}
        <div className="hero-content text-white w-full items-center justify-start">
          <div className="max-w-2xl w-1/2 pl-12">
            <h1 className="mb-5 text-[6rem] md:text-[10rem] leading-none font-extrabold uppercase">Le Grand Magal de Touba</h1>
            <p className="mb-6 text-lg md:text-2xl">
              Informations officielles, itinéraires et mises à jour en direct pour suivre le Grand Magal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

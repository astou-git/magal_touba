import React from 'react';
import heroImage from '../assets/Grande-mosquee-de-touba-Magal-kazurajab-2025-scaled.jpg'; 

function Hero() {
  return (
    <>
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${heroImage})`,
      
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-9xl font-bold">Bienvenue au Magal de Touba</h1>
      <p className="mb-5">
        Consultez les horaires, inscrivez-vous et suivez les notifications en temps réel.
      </p>
      <button className="btn btn-primary">S'inscrire</button>
    </div>
  </div>
</div>
    </>
  );
}

export default Hero;

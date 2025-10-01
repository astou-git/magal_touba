import React from 'react';

function Presentation() {
  return (
    <div data-theme="light" className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/touba-senegal_1057-9665.jpg"
          alt="Grande Mosquée de Touba"
          className="max-w-sm rounded-lg shadow-2xl h-96 object-cover"
        />
        <div>
          <h1 className="text-5xl font-bold text-blue-800">Le Grand Magal de Touba</h1>
          <p className="py-6 text-lg text-gray-700">
            Le Grand Magal de Touba est la plus grande fête religieuse du Sénégal, célébrée chaque année par la confrérie mouride. Il commémore le départ en exil de Cheikh Ahmadou Bamba, fondateur du mouridisme, en 1895. Cet événement attire des millions de pèlerins venus rendre hommage à son héritage spirituel et à son engagement envers la foi islamique.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Presentation;

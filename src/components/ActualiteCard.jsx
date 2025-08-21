import React from 'react';

const ActualiteCard = ({ type, title, image, link }) => {
  return (
    <div className="relative h-80 block overflow-hidden rounded-lg shadow-lg group">
      {/* Conteneur de l'image et du dégradé */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Dégradé pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
      </div>

      {/* Contenu de la carte */}
      <div className="relative p-6 h-full flex flex-col justify-end text-white">
        <div>
          <span className="text-xs font-semibold mb-2 block uppercase">
            {type}
          </span>
          <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight">
            {title}
          </h3>
          <a href={link} className="flex items-center text-xs font-semibold uppercase text-yellow-300">
            Lire la suite
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActualiteCard;
import React from 'react';

const ThemeCard = ({ image, title, link }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300">
            {/* Conteneur de l'image */}
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Contenu de la carte */}
            <div className="p-4 flex flex-col">
                <h3 className="text-lg text-center font-semibold text-gray-800 mb-2">{title}</h3>
                <a 
                    href={link}
                    className="text-sm p-2 w-30 font-bold text-blue-600 uppercase tracking-wider border-2 border-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                    Consulter
                </a>
            </div>
        </div>
    );
};

export default ThemeCard;
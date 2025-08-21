import React from "react";

const ProjetRecentCard = ({ title, description, image, link }) => {
    return (
        <div className="relative block group overflow-hidden rounded-lg shadow-lg aspect-square transition-transform duration-300 hover:scale-105">
            {/* L'image de fond est utilisée directement ici */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
                        <div className="absolute inset-0 bg-black/50"></div>

            {/* Le contenu est superposé, sans la couche noire */}
            <div className="relative p-6 h-full flex flex-col justify-between text-white">
                {/* Le texte est affiché directement sur l'image */}
                <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                        {title}
                    </h3>
                    <p className="text-sm md:text-base font-medium opacity-80">
                        {description}
                    </p>
                </div>
                
                <div className="self-start mt-4">
                    <a href={link} className="text-sm font-semibold border-b-2 border-yellow-300 text-yellow-300 pb-1">
                        EN SAVOIR +
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjetRecentCard;
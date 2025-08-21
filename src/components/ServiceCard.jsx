import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="flex flex-col border border-gray-300 p-4 transition duration-300 ease-in-out hover:shadow-lg">
      <div className="flex-grow">
        <h3 className="text-sm font-bold mb-2 text-gray-800 leading-tight">{title}</h3>
        <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="mt-4 border-t border-gray-300 pt-4">
        <a href="#" className="flex items-center justify-between text-xs font-semibold uppercase text-gray-800 hover:text-[#0052A3]">
          <span>Faire une demande</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
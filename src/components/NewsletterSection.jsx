import React from 'react';

const NewsletterSection = () => {
  return (
    <div className=" py-24">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Titres */}
        <p className="text-sm text-gray-500 font-medium mb-1">Ne ratez aucune information</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8">
          Abonnez-vous à notre newsletter
        </h2>

        {/* Formulaire */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Nom et prénoms"
            className="w-full md:w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052A3]"
          />
          <input
            type="email"
            placeholder="Votre adresse mail"
            className="w-full md:w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052A3]"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 text-sm font-semibold text-white bg-[#0052A3] hover:bg-[#003875] transition-colors duration-300 rounded-md"
          >
            S'ABONNER
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
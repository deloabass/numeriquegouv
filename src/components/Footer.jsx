import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Rss, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#002244] text-gray-300">
      {/* Bandeau de couleurs */}
      <div className="h-2 flex">
        <div className="bg-[#008751] flex-1"></div>
        <div className="bg-[#fcd116] flex-1"></div>
        <div className="bg-[#e81414] flex-1"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo et infos du ministère */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Supposons que vous avez un chemin vers votre logo */}
          <img
            src="https://numerique.gouv.bj/img/img/logo_MND_white_font.png?w=500&s=cbb5bc6b11d43374a65481f5b4b47f34"
            alt="Ministère du Numérique"
            className="h-16 mb-2"
          />
          <p className="text-sm font-semibold mb-1">
            MINISTÈRE DU NUMÉRIQUE ET DE LA DIGITALISATION
          </p>
          <p className="text-xs">
            RÉPUBLIQUE DU BÉNIN
          </p>
        </div>

        {/* Liens de navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
          <div>
            <h4 className="text-sm font-bold text-white mb-4">LE SECTEUR</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white">Réformes</a></li>
              <li><a href="#" className="hover:text-white">L'écosystème au Bénin</a></li>
              <li><a href="#" className="hover:text-white">Plateformes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">LE MINISTÈRE</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white">La Ministre</a></li>
              <li><a href="#" className="hover:text-white">Mission</a></li>
              <li><a href="#" className="hover:text-white">Organigramme</a></li>
              <li><a href="#" className="hover:text-white">Directions</a></li>
              <li><a href="#" className="hover:text-white">Struct. sous tutelle</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">PROJETS</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white">Projets en cours</a></li>
              <li><a href="#" className="hover:text-white">Projets terminés</a></li>
              <li><a href="#" className="hover:text-white">Appels à projets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">PUBLICATIONS</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white">Actualités</a></li>
              <li><a href="#" className="hover:text-white">Documents</a></li>
              <li><a href="#" className="hover:text-white">Opportunités</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">CONTACT</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>
                Rue 440, Cotonou
                  {/* Sise à Agblangandan,
                  <br />
                  BP 328 */}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto: numerique@gouv.bj" className="hover:text-white">
                numerique@gouv.bj
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span> 00229 21 30 02 36</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section des réseaux sociaux et copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Rss size={20} />
            </a>
          </div>
          <p className="text-xs text-gray-500">
            © 2024 Ministère du Numérique et de la Digitalisation. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
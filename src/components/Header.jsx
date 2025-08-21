import React, { useState } from 'react';
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Search } from 'lucide-react';

// Assurez-vous d'avoir installé la dépendance suivante :
// npm install lucide-react

const Header = () => {
    // État pour gérer la visibilité du menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // État pour gérer les dropdowns du menu mobile
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Fonction de bascule pour le menu mobile (ouverture/fermeture du sidebar)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Réinitialise le dropdown actif lorsque le menu est fermé
        if (isMenuOpen) {
            setActiveDropdown(null);
        }
    };

    // Gère le basculement des dropdowns dans le menu mobile
    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <header className="relative z-50">
            {/* Arrière-plan du dégradé */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0052A3] via-[#1e3a8a] to-[#402090] opacity-95"></div>

            {/* Conteneur principal de l'en-tête */}
            <div className="container mx-auto px-4 py-4 md:py-6 relative flex justify-between items-center">
                {/* Section du logo */}
                <div className="flex items-center">
                    <img src="/logo_MND_white_font.png" alt="MND Logo" className="h-10 md:h-12" />
                </div>

                {/* Icônes de réseaux sociaux et de recherche (version de bureau) */}
                <div className="hidden lg:flex items-center space-x-4 ml-auto mr-8">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                        <Facebook size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                        <Twitter size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                        <Instagram size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                        <Linkedin size={20} />
                    </a>
                    <div className="w-px h-6 bg-white/30 mx-2"></div>
                    <a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                        <Search size={20} />
                    </a>
                </div>

                {/* Liens de navigation (version de bureau) */}
                <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
                    {/* Le Secteur Dropdown */}
                    <div className="relative group">
                        <a href="/secteur" className="flex items-center space-x-1 text-white text-lg font-medium hover:text-gray-200 transition-all duration-300">
                            <span>Le Secteur</span>
                            <ChevronDown size={16} className="transform transition-transform duration-300 group-hover:rotate-180" />
                        </a>
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <a href="/secteur/reformes" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0052A3]/10 hover:to-[#402090]/10 hover:text-[#0052A3] transition-all duration-200 font-medium">Réformes</a>
                            <a href="/secteur/ecosysteme" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0052A3]/10 hover:to-[#402090]/10 hover:text-[#0052A3] transition-all duration-200 font-medium">L'écosystème au Bénin</a>
                            <a href="/secteur/plateformes" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0052A3]/10 hover:to-[#402090]/10 hover:text-[#0052A3] transition-all duration-200 font-medium">Plateformes</a>
                        </div>
                    </div>
                    {/* Le Ministère Dropdown */}
                    <div className="relative group">
                        <a href="/ministere" className="flex items-center space-x-1 text-white text-lg font-medium hover:text-gray-200 transition-all duration-300">
                            <span>Le Ministère</span>
                            <ChevronDown size={16} className="transform transition-transform duration-300 group-hover:rotate-180" />
                        </a>
                        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <a href="/ministere/ministre" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0052A3]/10 hover:to-[#402090]/10 hover:text-[#0052A3] transition-all duration-200 font-medium">La Ministre</a>
                            <a href="/ministere/mission" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0052A3]/10 hover:to-[#402090]/10 hover:text-[#0052A3] transition-all duration-200 font-medium">Mission</a>
                            <a href="/ministere/organigramme" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0052A3]/10 hover:to-[#402090]/10 hover:text-[#0052A3] transition-all duration-200 font-medium">Organigramme</a>
                            <a href="/ministere/directions" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0052A3]/10 hover:to-[#402090]/10 hover:text-[#0052A3] transition-all duration-200 font-medium">Directions</a>
                            <a href="/ministere/structures-tutelles" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0052A3]/10 hover:to-[#402090]/10 hover:text-[#0052A3] transition-all duration-200 font-medium">Structures sous tutelles</a>
                        </div>
                    </div>
                    {/* Projets */}
                    <a href="/projets" className="text-white text-lg font-medium hover:text-gray-200 transition-all duration-300">Projets</a>
                    {/* Publications Dropdown */}
                    <div className="relative group">
                        <a href="/publications" className="flex items-center space-x-1 text-white text-lg font-medium hover:text-gray-200 transition-all duration-300">
                            <span>Publications</span>
                            <ChevronDown size={16} className="transform transition-transform duration-300 group-hover:rotate-180" />
                        </a>
                        <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <a href="/publications/actualites" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0052A3]/10 hover:to-[#402090]/10 hover:text-[#0052A3] transition-all duration-200 font-medium">Actualités</a>
                            <a href="/publications/documents" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0052A3]/10 hover:to-[#402090]/10 hover:text-[#0052A3] transition-all duration-200 font-medium">Documents</a>
                            <a href="/publications/opportunites" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0052A3]/10 hover:to-[#402090]/10 hover:text-[#0052A3] transition-all duration-200 font-medium">Opportunités</a>
                        </div>
                    </div>
                    {/* Agenda */}
                    <a href="/agenda" className="text-white text-lg font-medium hover:text-gray-200 transition-all duration-300">Agenda</a>
                    {/* Contact */}
                    <a href="/contact" className="text-white text-lg font-medium hover:text-gray-200 transition-all duration-300">Contact</a>
                </nav>

                {/* Icône du menu hamburger (mobile) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg transition-all duration-300 hover:bg-white/10">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Arrière-plan sombre du sidebar */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-30 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={toggleMenu}
            ></div>

            {/* Sidebar mobile */}
            <div
                className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-gradient-to-b from-[#0052A3] to-[#402090] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-6 flex justify-end">
                    <button onClick={toggleMenu} className="text-white p-2">
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex flex-col px-6 space-y-4">
                    {/* Liens du menu mobile */}
                    <div>
                        <button
                            onClick={() => toggleDropdown('secteur')}
                            className="flex items-center justify-between w-full text-white text-xl font-bold hover:text-gray-200 transition-colors py-2"
                        >
                            <span>Le Secteur</span>
                            <ChevronDown size={20} className={`transform transition-transform duration-300 ${activeDropdown === 'secteur' ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === 'secteur' && (
                            <div className="ml-4 mt-2 space-y-2">
                                <a href="/secteur/reformes" onClick={toggleMenu} className="block text-white/80 text-lg hover:text-white transition-colors py-1">Réformes</a>
                                <a href="/secteur/ecosysteme" onClick={toggleMenu} className="block text-white/80 text-lg hover:text-white transition-colors py-1">L'écosystème au Bénin</a>
                                <a href="/secteur/plateformes" onClick={toggleMenu} className="block text-white/80 text-lg hover:text-white transition-colors py-1">Plateformes</a>
                            </div>
                        )}
                    </div>
                    <div>
                        <button
                            onClick={() => toggleDropdown('ministere')}
                            className="flex items-center justify-between w-full text-white text-xl font-bold hover:text-gray-200 transition-colors py-2"
                        >
                            <span>Le Ministère</span>
                            <ChevronDown size={20} className={`transform transition-transform duration-300 ${activeDropdown === 'ministere' ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === 'ministere' && (
                            <div className="ml-4 mt-2 space-y-2">
                                <a href="/ministere/ministre" onClick={toggleMenu} className="block text-white/80 text-lg hover:text-white transition-colors py-1">La Ministre</a>
                                <a href="/ministere/mission" onClick={toggleMenu} className="block text-white/80 text-lg hover:text-white transition-colors py-1">Mission</a>
                                <a href="/ministere/organigramme" onClick={toggleMenu} className="block text-white/80 text-lg hover:text-white transition-colors py-1">Organigramme</a>
                                <a href="/ministere/directions" onClick={toggleMenu} className="block text-white/80 text-lg hover:text-white transition-colors py-1">Directions</a>
                                <a href="/ministere/structures-tutelles" onClick={toggleMenu} className="block text-white/80 text-lg hover:text-white transition-colors py-1">Structures sous tutelles</a>
                            </div>
                        )}
                    </div>
                    <a href="/projets" onClick={toggleMenu} className="block text-white text-xl font-bold hover:text-gray-200 transition-colors py-2">Projets</a>
                    <div>
                        <button
                            onClick={() => toggleDropdown('publications')}
                            className="flex items-center justify-between w-full text-white text-xl font-bold hover:text-gray-200 transition-colors py-2"
                        >
                            <span>Publications</span>
                            <ChevronDown size={20} className={`transform transition-transform duration-300 ${activeDropdown === 'publications' ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === 'publications' && (
                            <div className="ml-4 mt-2 space-y-2">
                                <a href="/publications/actualites" onClick={toggleMenu} className="block text-white/80 text-lg hover:text-white transition-colors py-1">Actualités</a>
                                <a href="/publications/documents" onClick={toggleMenu} className="block text-white/80 text-lg hover:text-white transition-colors py-1">Documents</a>
                                <a href="/publications/opportunites" onClick={toggleMenu} className="block text-white/80 text-lg hover:text-white transition-colors py-1">Opportunités</a>
                            </div>
                        )}
                    </div>
                    <a href="/agenda" onClick={toggleMenu} className="block text-white text-xl font-bold hover:text-gray-200 transition-colors py-2">Agenda</a>
                    <a href="/contact" onClick={toggleMenu} className="block text-white text-xl font-bold hover:text-gray-200 transition-colors py-2">Contact</a>

                    {/* Icônes de réseaux sociaux pour mobile */}
                    <div className="flex items-center space-x-6 pt-8 border-t border-white/20 mt-8 justify-center">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-white hover:text-gray-300 transition-colors"><Facebook size={24} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-white hover:text-gray-300 transition-colors"><Twitter size={24} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-white hover:text-gray-300 transition-colors"><Instagram size={24} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-white hover:text-gray-300 transition-colors"><Linkedin size={24} /></a>
                        <a href="#" onClick={toggleMenu} className="text-white hover:text-gray-300 transition-colors"><Search size={24} /></a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
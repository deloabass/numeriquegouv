import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
    const slides = [
        {
            image: "https://numerique.gouv.bj/assets/num-135.jpg",
            title: "Code du numérique : le CES s’imprègne des enjeux d’une réforme stratégique",
            link: "#"
        },
        {
            image: "https://numerique.gouv.bj/assets/banner-amazones-du-digital-2025.jpg",
            title: "Appel à candidature « Amazones du digital » - Edition 2025",
            link: "#"
        },
        {
            image: "https://numerique.gouv.bj/assets/lancement-labet-startup-03-1747071678.jpg",
            title: "Labellisation des startups : résultats du premier appel à candidatures",
            link: "#"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Conteneur des diapositives */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative h-100 md:h-[650px] bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                        {/* Superposition sombre */}
                        <div className="absolute inset-0 flex flex-col justify-end items-center text-center">
                            {/* Titre principal "RÉSULTATS" en filigrane */}
                            {currentSlide === 2 && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <h1 className="text-white text-9xl font-extrabold opacity-10">
                                        RÉSULTATS
                                    </h1>
                                </div>
                            )}

                            {/* Contenu du texte et du bouton */}
                            <div className="text-white p-8 md:p-12 w-full max-w-2xl z-10">
                                <h2 className="text-xl md:text-3xl font-semibold mb-4 bg-black/50 inline-block px-4 py-2">
                                    {slide.title}
                                </h2>
                                <div className="mt-4">
                                    <a href={slide.link} className="inline-flex items-center space-x-2 px-6 py-3 bg-[#fddc00] text-[#0052a3] font-bold transition-all duration-300 hover:bg-[#ffeb3b] hover:shadow-lg">
                                        <span>LIRE L'ARTICLE</span>
                                        <ChevronRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Boutons de navigation (flèches) */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 md:p-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 z-10"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 md:p-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 z-10"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicateurs de diapositives */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-[#fddc00]' : 'bg-white/50 hover:bg-white'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
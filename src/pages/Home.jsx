import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import ProjetRecentCard from '../components/ProjetRecentCard';
import ServiceCard from '../components/ServiceCard';
import ActualiteCard from '../components/ActualiteCard';
import ThemeCard from '../components/ThemeCard';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const projectsData = [
  {
    title: "L'accès des citoyens aux médias et à l’information de qualité",
    description:
      'Favoriser l’émergence des médias modernes et l’accès des citoyens à l’information de qualité',
    image: 'https://numerique.gouv.bj/assets/num-135.jpg',
    link: '#',
  },
  {
    title: 'Le développement des usages et de la confiance numérique',
    description:
      'Adopter les services et usages numériques innovants et de manière sûre dans tous les secteurs de la vie économique et sociale',
    image: 'https://numerique.gouv.bj/assets/num-135.jpg',
    link: '#',
  },
  {
    title:
      'Le déploiement de l’identité civile et numérique de l’ensemble des citoyens béninois (PHASE 2)',
    description:
      "Finaliser le déploiement de l'identité civile et numérique de l'ensemble des citoyens béninois",
    image: 'https://numerique.gouv.bj/assets/num-135.jpg',
    link: '#',
  },
  {
    title: 'La transformation numérique des collectivités locales',
    description:
      'Renforcer l’effectivité des collectivités locales par le numérique',
    image: 'https://numerique.gouv.bj/assets/num-135.jpg',
    link: '#',
  },
  {
    title: 'La modernisation des médias de service public',
    description:
      'Moderniser les infrastructures de production des médias de services publics',
    image: 'https://numerique.gouv.bj/assets/num-135.jpg',
    link: '#',
  },
  {
    title:
      'La mise en œuvre de l’Administration Intelligente ou SMART GOUV (PHASE 2)',
    description:
      'Renforcer le service aux citoyens et aux entreprises par la dématérialisation des e-Services et son accompagnement par la digitalisation de l’administration publique',
    image: 'https://numerique.gouv.bj/assets/num-135.jpg',
    link: '#',
  },
];

const servicesData = [
  {
    title: 'Délivrance d’attestation de non exclusion de la commande publique',
    description:
      'Ce service public permet d’avoir une attestation de non exclusion de la commande publique.',
  },
  {
    title: 'Délivrance du Casier Judiciaire (Extrait B3 du casier judiciaire)',
    description:
      'Ce service permet à tout citoyen béninois, tout étranger résidant au pays de nationalité ou titulaire de domaine un extrait B3 de son casier judiciaire. Ce casier judiciaire est valide pour 3 mois.',
  },
  {
    title: 'Extrait du Registre de Commerce et de Crédit Mobilier (RCCM)',
    description:
      "Ce service permet d'obtenir un extrait du registre de commerce et du crédit mobilier (RCCM) et une inscription non radiée.",
  },
  {
    title: 'Première Immatriculation d’un Véhicule 4 Roues et plus',
    description:
      "Ce service permet d’immatriculer un véhicule neuf ou d'occasion de quatre (04) roues et plus. Il est conseillé de prendre ce service d’une personne pour effectuer ses démarches d’immatriculation.",
  },
];
const newsData = [
  {
    type: 'Nouvelles',
    title:
      'Code du numérique : le CES s’imprègne des enjeux d’une réforme stratégique',
    image: 'https://numerique.gouv.bj/assets/num-135.jpg',
    link: '#',
  },
  {
    type: 'Nouvelles',
    title: 'Appel à candidature « Amazones du digital » - Edition 2025',
    image:
      'https://numerique.gouv.bj/assets/banner-amazones-du-digital-2025.jpg',
    link: '#',
  },
  {
    type: 'Communiqués',
    title:
      'Labellisation des startups : résultats du premier appel à candidatures',
    image:
      'https://numerique.gouv.bj/assets/lancement-labet-startup-03-1747071678.jpg',
    link: '#',
  },
];
const themesData = [
  {
    image:
      'https://numerique.gouv.bj/assets/banner-amazones-du-digital-2025.jpg',
    title: 'Code du numérique',
    link: '#',
  },
  {
    image:
      'https://numerique.gouv.bj/assets/banner-amazones-du-digital-2025.jpg',
    title: 'Réformes',
    link: '#',
  },
  {
    image:
      'https://numerique.gouv.bj/assets/banner-amazones-du-digital-2025.jpg',
    title: 'Plateformes',
    link: '#',
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Header + Carousel */}
      <Header />
      <Carousel />

      {/* Section Projets récents */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-12 text-center text-[#0052A3] uppercase tracking-wide">
          Projets Récents
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="transform hover:-translate-y-2 transition duration-300"
            >
              <ProjetRecentCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section Portail national */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-[#0052A3] uppercase">
          Portail National des Services Publics
        </h2>
        <p className="text-gray-700 text-center leading-relaxed  mx-auto">
          Site officiel de l’administration publique, le Portail National des
          services publics est la porte d’entrée pour s’informer sur les
          services publics, sans se déplacer,{' '}
          <span className="font-semibold">24h/24 et 7j/7</span>, à partir d’un
          terminal connecté : smartphone, ordinateur, ou tablette. Cette
          plateforme numérique permet également de consommer les services
          publics partiellement ou entièrement dématérialisés.
        </p>

        {/* Bouton "Consulter les services populaires" */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 text-sm font-semibold text-white bg-[#0052A3] hover:bg-[#003875] transition-colors duration-300"
          >
            Consulter les e-services populaires
          </a>
        </div>
        {/* Grille des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        {/* Section Actualités */}
        <div className="container mx-auto py-16">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-gray-800">
              Actualités
            </h2>
            <a
              href="#"
              className="flex items-center text-sm font-semibold text-blue-500 hover:text-blue-700"
            >
              <span>Voir plus d'actualités</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news, index) => (
              <ActualiteCard
                key={index}
                type={news.type}
                title={news.title}
                image={news.image}
                link={news.link}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Section Thèmes */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {themesData.map((theme, index) => (
              <ThemeCard
                key={index}
                image={theme.image}
                title={theme.title}
                link={theme.link}
              />
            ))}
          </div>
        </div>
      </div>
        {/* Section Newsletter */}
        <NewsletterSection />
        <Footer />
    </div>
  );
};

export default Home;

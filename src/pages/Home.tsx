import { Link } from 'react-router-dom';
import { ChefHat, Clock, Truck, Star, ArrowRight } from 'lucide-react';
import { createWhatsAppGeneralUrl } from '../utils/whatsapp';
import SEO from '../components/SEO';

export default function Home() {
  const features = [
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: 'Plats Authentiques',
      description: 'Des recettes congolaises traditionnelles préparées avec passion',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Service Rapide',
      description: 'Livraison rapide pour vos commandes à Kinshasa',
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Livraison Fiable',
      description: 'Vos repas livrés chauds et frais à domicile',
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Qualité Garantie',
      description: 'Ingrédients frais et préparation soignée',
    },
  ];

  return (
    <div>
      <SEO
        title="Accueil"
        description="Découvrez nos plats traditionnels congolais et modernes, préparés avec amour et livrés directement chez vous à Kinshasa."
      />
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Savourez l'Authenticité Congolaise
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Découvrez nos plats traditionnels et modernes, préparés avec amour et livrés directement chez vous à Kinshasa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Découvrir Nos Menus
              </Link>
              <a
                href={createWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors text-center"
              >
                Commander Maintenant
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Nos Menus
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez notre sélection de plats savoureux et authentiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/menu?category=menu-classique"
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <ChefHat className="h-20 w-20 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Menu Classique</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Plats classiques et spécialités congolaises. Poulet au feu de bois, brochettes, salades et bien plus encore.
                </p>
                <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                  <span>Voir le menu</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>

            <Link
              to="/menu?category=menu-cocktail"
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <div className="text-center">
                  <Star className="h-20 w-20 text-secondary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Menu Cocktail</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Boissons rafraîchissantes, accompagnements et petits plaisirs. Jus naturels, fruits frais et sauces maison.
                </p>
                <div className="flex items-center text-secondary font-bold group-hover:translate-x-2 transition-transform">
                  <span>Voir le menu</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Service Traiteur pour Vos Événements
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Mariages, anniversaires, événements d'entreprise... Nous préparons des festins mémorables pour toutes vos occasions spéciales.
          </p>
          <Link
            to="/traiteur"
            className="inline-block bg-white text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Découvrir Nos Services Traiteur
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Prêt à Commander?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous via WhatsApp pour passer votre commande. Nous répondons rapidement!
          </p>
          <a
            href={createWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
          >
            Commander via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

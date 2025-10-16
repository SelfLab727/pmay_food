import { ChefHat, Users, Utensils, Phone, CheckCircle } from 'lucide-react';
import { createWhatsAppCateringUrl } from '../utils/whatsapp';
import SEO from '../components/SEO';

export default function Traiteur() {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Événements Privés',
      description: 'Mariages, anniversaires, baptêmes et célébrations familiales',
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: 'Événements d\'Entreprise',
      description: 'Séminaires, conférences, réceptions et cocktails professionnels',
    },
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: 'Menus Personnalisés',
      description: 'Création de menus sur mesure selon vos préférences et votre budget',
    },
  ];

  const advantages = [
    'Ingrédients frais et de qualité supérieure',
    'Équipe de chefs expérimentés',
    'Service de livraison et installation',
    'Respect des délais et engagement qualité',
    'Tarifs compétitifs et devis gratuit',
    'Flexibilité pour tous types d\'événements',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Service Traiteur"
        description="Faites de votre événement un moment inoubliable avec nos services de traiteur. Mariages, anniversaires, événements d'entreprise."
      />
      <div className="relative bg-gradient-to-br from-secondary to-secondary/90 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Service Traiteur Professionnel
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Faites de votre événement un moment inoubliable avec nos services de traiteur. Nous préparons des festins authentiques pour toutes vos occasions spéciales à Kinshasa.
            </p>
            <a
              href={createWhatsAppCateringUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Demander un Devis</span>
            </a>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Nos Services Traiteur
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour tous vos événements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Pourquoi Choisir Pmay Food?
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-lg">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nos Chefs à Votre Service
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Notre équipe de chefs passionnés met son expertise au service de vos événements. Avec des années d'expérience dans la cuisine congolaise traditionnelle et moderne, nous créons des plats qui raviront vos invités.
              </p>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 mb-6">
                <p className="text-gray-700 font-medium mb-2">
                  Spécialités Traiteur:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cochon de lait rôti</li>
                  <li>• Poulet au feu de bois</li>
                  <li>• Buffets variés et personnalisés</li>
                  <li>• Desserts et cocktails sur mesure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary to-secondary/90 text-white rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Prêt à Organiser Votre Événement?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et recevoir un devis gratuit personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={createWhatsAppCateringUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Demander un Devis</span>
              </a>
              <a
                href="tel:+243896846992"
                className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+243 896 846 992</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

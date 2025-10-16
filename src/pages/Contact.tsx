import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { createWhatsAppGeneralUrl } from '../utils/whatsapp';
import SEO from '../components/SEO';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Téléphone',
      content: '+243 896 846 992',
      link: 'tel:+243896846992',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'contact@pmayfood.com',
      link: 'mailto:contact@pmayfood.com',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Adresse',
      content: 'Kinshasa, RD Congo',
      link: null,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Horaires',
      content: 'Lun - Sam: 8h - 20h, Dim: 9h - 18h',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Contact"
        description="Contactez Pmay Food pour passer vos commandes ou obtenir des informations. Téléphone, WhatsApp, email."
      />
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contactez-Nous</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour toutes vos questions et commandes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Informations de Contact
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Pour passer commande ou obtenir des informations sur nos services, n'hésitez pas à nous contacter via WhatsApp. Nous répondons rapidement à toutes vos demandes.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Commander via WhatsApp
              </h3>
              <p className="text-gray-600 mb-4">
                La façon la plus rapide de commander! Contactez-nous directement sur WhatsApp pour passer votre commande ou poser vos questions.
              </p>
              <a
                href={createWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-colors w-full text-center"
              >
                Ouvrir WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Zones de Livraison
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nous livrons dans toute la ville de Kinshasa. Nos services de livraison couvrent les principales communes et quartiers de la capitale.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Zones Principales</h3>
                  <p className="text-gray-600 text-sm">
                    Gombe, Kinshasa, Ngaliema, Lemba, Limete, Matete, Kasa-Vubu, et plus encore...
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Délai de Livraison</h3>
                  <p className="text-gray-600 text-sm">
                    Généralement 30-60 minutes selon votre localisation et le trafic
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Commande Minimale</h3>
                  <p className="text-gray-600 text-sm">
                    Aucun montant minimum pour les commandes de repas
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Questions Fréquentes</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">Puis-je payer à la livraison?</p>
                    <p className="text-gray-600">Oui, nous acceptons le paiement en espèces à la livraison.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Proposez-vous des promotions?</p>
                    <p className="text-gray-600">Suivez notre page Facebook pour nos offres spéciales!</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Commandes pour événements?</p>
                    <p className="text-gray-600">Consultez notre page Service Traiteur pour les grands événements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à Commander?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contactez-nous maintenant et savourez nos délicieux plats chez vous!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={createWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
            >
              Commander via WhatsApp
            </a>
            <a
              href="tel:+243896846992"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-colors"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Facebook, Phone, Mail } from 'lucide-react';
import logo from '../assets/Screenshot_2025-07-10_215821-removebg-preview.png';

export default function Footer() {
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Pmay Food" className="h-10 w-auto" />
              <span className="text-xl font-bold">Pmay Food</span>
            </div>
            <p className="text-gray-400 text-sm">
              Traiteur et livraison de repas congolais à Kinshasa. Des plats frais, préparés avec soin et livrés rapidement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-primary transition-colors">
                  Nos Menus
                </Link>
              </li>
              <li>
                <Link to="/traiteur" className="text-gray-400 hover:text-primary transition-colors">
                  Service Traiteur
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/mentions" className="text-gray-400 hover:text-primary transition-colors">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`tel:+243896846992`}
                className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+243 896 846 992</span>
              </a>
              <a
                href="mailto:contact@pmayfood.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contact@pmayfood.com</span>
              </a>
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Suivez-nous sur Facebook</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Pmay Food. Tous droits réservés. Kinshasa, RD Congo.
          </p>
        </div>
      </div>
    </footer>
  );
}

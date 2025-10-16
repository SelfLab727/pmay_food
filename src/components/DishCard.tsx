import { ShoppingCart } from 'lucide-react';
import { Dish } from '../lib/supabase';
import { createWhatsAppOrderUrl, formatCDF } from '../utils/whatsapp';

interface DishCardProps {
  dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
  const handleOrder = () => {
    window.open(createWhatsAppOrderUrl(dish.name, dish.price_cdf), '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
        {dish.image_path ? (
          <img
            src={dish.image_path}
            alt={dish.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
            <span className="text-primary text-4xl font-bold opacity-30">P</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {dish.name}
        </h3>

        {dish.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {dish.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            {formatCDF(dish.price_cdf)} <span className="text-base">CDF</span>
          </div>

          {dish.available ? (
            <button
              onClick={handleOrder}
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full font-medium flex items-center space-x-2 transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Commander</span>
            </button>
          ) : (
            <span className="text-gray-400 text-sm font-medium">Indisponible</span>
          )}
        </div>
      </div>
    </div>
  );
}

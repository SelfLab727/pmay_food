import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase, Dish, Menu as MenuType } from '../lib/supabase';
import DishCard from '../components/DishCard';
import SEO from '../components/SEO';
import { Loader2 } from 'lucide-react';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [menus, setMenus] = useState<MenuType[]>([]);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const selectedCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [menusResult, dishesResult] = await Promise.all([
        supabase.from('menus').select('*').order('order_index'),
        supabase.from('dishes').select('*').order('name'),
      ]);

      if (menusResult.error) throw menusResult.error;
      if (dishesResult.error) throw dishesResult.error;

      setMenus(menusResult.data || []);
      setDishes(dishesResult.data || []);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Impossible de charger les menus. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const filteredDishes =
    selectedCategory === 'all'
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">{error}</p>
          <button
            onClick={fetchData}
            className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Nos Menus"
        description="Découvrez notre sélection de plats savoureux, disponibles à la commande via WhatsApp. Menu Classique et Menu Cocktail."
      />
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Nos Menus</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Découvrez notre sélection de plats savoureux, disponibles à la commande via WhatsApp
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-6 py-3 rounded-full font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Tous les Plats
          </button>
          {menus.map((menu) => (
            <button
              key={menu.slug}
              onClick={() => handleCategoryChange(menu.slug)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === menu.slug
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {menu.title}
            </button>
          ))}
        </div>

        {filteredDishes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-xl">Aucun plat disponible dans cette catégorie.</p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <p className="text-gray-600">
                {filteredDishes.length} plat{filteredDishes.length > 1 ? 's' : ''} disponible
                {filteredDishes.length > 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

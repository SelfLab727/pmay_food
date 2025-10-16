import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Menu = {
  id: string;
  slug: string;
  title: string;
  description: string;
  order_index: number;
  created_at: string;
};

export type Dish = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price_cdf: number;
  description: string;
  image_path: string;
  order_whatsapp_text: string;
  available: boolean;
  created_at: string;
};

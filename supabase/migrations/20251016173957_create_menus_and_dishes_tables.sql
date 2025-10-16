/*
  # Create Pmay Food Database Schema

  ## New Tables
  
  ### `menus`
  Top-level menu categories for organizing dishes
  - `id` (uuid, primary key) - Unique identifier
  - `slug` (text, unique) - URL-friendly identifier (e.g., 'menu-classique')
  - `title` (text) - Display name (e.g., 'Menu Classique')
  - `description` (text) - Brief description of the menu category
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp
  
  ### `dishes`
  All food items, appetizers, and cocktails available for order
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Dish name (e.g., 'Poulet au feu de bois')
  - `slug` (text, unique) - URL-friendly identifier
  - `category` (text) - References menus.slug
  - `price_cdf` (integer) - Price in Congolese Francs
  - `description` (text) - Dish description
  - `image_path` (text) - Supabase Storage public URL
  - `order_whatsapp_text` (text) - Pre-filled WhatsApp message
  - `available` (boolean) - Availability status
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  
  ### Row Level Security (RLS)
  - Enable RLS on both tables
  - Public read access for menus and dishes (no authentication required)
  - This allows the website to display menu items without user login
  
  ## Notes
  - No contact/order tables needed - all communication via WhatsApp
  - Prices stored as integers (CDF amounts without decimals)
  - Image paths will point to Supabase Storage public bucket
*/

-- Create menus table
CREATE TABLE IF NOT EXISTS menus (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  description text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create dishes table
CREATE TABLE IF NOT EXISTS dishes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  price_cdf integer NOT NULL,
  description text DEFAULT '',
  image_path text DEFAULT '',
  order_whatsapp_text text DEFAULT '',
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE menus ENABLE ROW LEVEL SECURITY;
ALTER TABLE dishes ENABLE ROW LEVEL SECURITY;

-- Create public read policies for menus
CREATE POLICY "Allow public read access to menus"
  ON menus
  FOR SELECT
  TO anon
  USING (true);

-- Create public read policies for dishes
CREATE POLICY "Allow public read access to dishes"
  ON dishes
  FOR SELECT
  TO anon
  USING (true);

-- Create index for faster category filtering
CREATE INDEX IF NOT EXISTS idx_dishes_category ON dishes(category);
CREATE INDEX IF NOT EXISTS idx_dishes_available ON dishes(available);
CREATE INDEX IF NOT EXISTS idx_menus_order ON menus(order_index);
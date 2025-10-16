import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const defaultDescription = 'Pmay Food - Traiteur et livraison de repas congolais à Kinshasa. Commandez via WhatsApp.';
const defaultImage = '/src/assets/Screenshot_2025-07-10_215821-removebg-preview.png';

export default function SEO({ title, description, image }: SEOProps) {
  const location = useLocation();
  const siteUrl = window.location.origin;
  const currentUrl = `${siteUrl}${location.pathname}`;

  const pageTitle = title ? `${title} - Pmay Food` : 'Pmay Food - Traiteur et Livraison de Repas à Kinshasa';
  const pageDescription = description || defaultDescription;
  const pageImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;

  useEffect(() => {
    document.title = pageTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }

    updateMetaTag('property', 'og:title', pageTitle);
    updateMetaTag('property', 'og:description', pageDescription);
    updateMetaTag('property', 'og:image', pageImage);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:type', 'website');

    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', pageTitle);
    updateMetaTag('name', 'twitter:description', pageDescription);
    updateMetaTag('name', 'twitter:image', pageImage);
  }, [pageTitle, pageDescription, pageImage, currentUrl]);

  return null;
}

function updateMetaTag(attribute: string, attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

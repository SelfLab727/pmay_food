const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '243896846992';

export const formatCDF = (amount: number): string => {
  return new Intl.NumberFormat('fr-CD', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const createWhatsAppOrderUrl = (dishName: string, price: number): string => {
  const message = `Bonjour, je voudrais commander ${dishName} - Prix: ${formatCDF(price)} CDF`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const createWhatsAppGeneralUrl = (message?: string): string => {
  const defaultMessage = message || 'Bonjour, je voudrais obtenir plus d\'informations sur vos services.';
  const encodedMessage = encodeURIComponent(defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const createWhatsAppCateringUrl = (): string => {
  const message = 'Bonjour, je voudrais obtenir un devis pour un service traiteur.';
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const languages = {
  de: "Deutsch",
  en: "English",
};

export const defaultLang = "de";

export const translations = {
  de: {
    "nav.home": "Startseite",
    "nav.services": "Leistungen",
    "nav.team": "Team",
    "nav.contact": "Kontakt",
    "nav.blog": "Aktuelles",
    "hero.title": "Ihre Zahnärztin in Zürich",
    "hero.subtitle":
      "Einfühlsame Zahnmedizin mit modernster Technik — für Ihr strahlendes Lächeln.",
    "hero.cta": "Termin vereinbaren",
    "services.title": "Unsere Leistungen",
    "services.subtitle":
      "Umfassende zahnmedizinische Versorgung für die ganze Familie.",
    "team.title": "Unser Team",
    "team.subtitle": "Kompetenz und Herzlichkeit — lernen Sie uns kennen.",
    "contact.title": "Kontakt",
    "contact.subtitle": "Wir freuen uns auf Ihren Besuch.",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.phone": "Telefon",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.address": "Adresse",
    "contact.hours": "Öffnungszeiten",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutz",
    "footer.imprint": "Impressum",
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "nav.blog": "News",
    "hero.title": "Your Dentist in Zurich",
    "hero.subtitle":
      "Compassionate dentistry with cutting-edge technology — for your radiant smile.",
    "hero.cta": "Book Appointment",
    "services.title": "Our Services",
    "services.subtitle":
      "Comprehensive dental care for the whole family.",
    "team.title": "Our Team",
    "team.subtitle": "Expertise and warmth — get to know us.",
    "contact.title": "Contact",
    "contact.subtitle": "We look forward to welcoming you.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.address": "Address",
    "contact.hours": "Opening Hours",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.imprint": "Legal Notice",
  },
} as const;

export type Lang = keyof typeof translations;

export function t(lang: Lang, key: keyof (typeof translations)["de"]): string {
  return translations[lang][key] || translations[defaultLang][key] || key;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

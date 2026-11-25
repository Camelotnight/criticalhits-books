// schema.org structured data (JSON-LD) for the home page and /book/. Values come from src/config.ts.
import { ASIN, AMAZON_URL, KINDLE_PRICE, PREORDER, RELEASE_ISO } from '../config';

export const personSchema = (site: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Robert Hasleton',
  url: new URL('/about/', site).href,
});

export const bookSchema = (site: URL, image: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'The Jovian Crisis',
  url: new URL('/book/', site).href,
  image,
  author: { '@type': 'Person', name: 'Robert Hasleton', url: new URL('/about/', site).href },
  isPartOf: { '@type': 'BookSeries', name: 'The Capa Incident' },
  position: 1,
  bookFormat: 'https://schema.org/EBook',
  inLanguage: 'en',
  identifier: { '@type': 'PropertyValue', propertyID: 'ASIN', value: ASIN },
  datePublished: RELEASE_ISO,
  offers: {
    '@type': 'Offer',
    url: AMAZON_URL,
    price: KINDLE_PRICE,
    priceCurrency: 'USD',
    availability: PREORDER ? 'https://schema.org/PreOrder' : 'https://schema.org/InStock',
  },
});

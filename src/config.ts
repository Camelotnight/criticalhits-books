// Site-wide settings. Placeholders are listed in README.md.

/** Kit form for the general mailing list. Replace the placeholder once that form exists. */
export const KIT_FORM_ID = 'KIT_FORM_ID_PLACEHOLDER';

/** Kit form for ARC (advance reader copy) requests. */
export const KIT_ARC_FORM_ID = '10222508';

/** Amazon listing (Kindle edition). */
export const AMAZON_URL = 'https://www.amazon.com/Jovian-Crisis-Capa-Incident-Book-ebook/dp/B0HRJ1L35R';

export const isPlaceholder = (value: string) =>
  value.includes('PLACEHOLDER') || value.startsWith('[');

export const RELEASE = 'January 12, 2027';
export const RELEASE_ISO = '2027-01-12';

/** "Pre-order" until release day, "Buy" after. Fixed at build time, so the next deploy after
 *  January 12, 2027 switches the wording. */
export const AMAZON_LABEL = new Date() < new Date(`${RELEASE_ISO}T00:00:00-05:00`) ? 'Pre-order on Amazon' : 'Buy on Amazon';
export const TAGLINE = 'Hard science fiction from the edge of Jupiter.';

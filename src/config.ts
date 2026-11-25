// Site-wide settings. Placeholders are listed in README.md.

/** The site's one Kit form. Every sign-up box and "Count me in" button posts here.
 *  Until December 22, 2026 it is the ARC (advance reader copy) list. */
export const KIT_FORM_ID = '10222508';

/** What the sign-up box asks for. 'arc' until December 22, 2026. On or after that date:
 *  set KIT_FORM_ID to the newsletter form, set this to 'newsletter', and redeploy. */
export const SIGNUP_MODE: 'arc' | 'newsletter' = 'arc';

/** Label for buttons and links that jump to the sign-up box. */
export const SIGNUP_CTA = SIGNUP_MODE === 'arc' ? 'Request an ARC' : 'Join the list';

/** Kindle edition. The ASIN is the same on every Amazon store. */
export const ASIN = 'B0HRJ1L35R';
export const AMAZON_URL = 'https://www.amazon.com/Jovian-Crisis-Capa-Incident-Book-ebook/dp/B0HRJ1L35R';
/** The same ASIN on other Amazon stores, shown as small links beside the Amazon.com button on /book/. */
export const AMAZON_INTL = [
  { label: 'UK', href: 'https://www.amazon.co.uk/dp/' + ASIN },
  { label: 'Canada', href: 'https://www.amazon.ca/dp/' + ASIN },
  { label: 'Australia', href: 'https://www.amazon.com.au/dp/' + ASIN },
];
export const KINDLE_PRICE = '5.99';
export const PRINT_PAGES = 340;

export const isPlaceholder = (value: string) =>
  value.includes('PLACEHOLDER') || value.startsWith('[');

export const RELEASE = 'January 12, 2027';
export const RELEASE_ISO = '2027-01-12';

/** "Pre-order" until release day, "Buy" after. Fixed at build time, so the next deploy after
 *  January 12, 2027 switches the wording. */
export const PREORDER = new Date() < new Date(`${RELEASE_ISO}T00:00:00-05:00`);
export const AMAZON_LABEL = PREORDER ? 'Pre-order on Amazon' : 'Buy on Amazon';
/** Short form for the header button. */
export const AMAZON_SHORT = PREORDER ? 'Pre-order' : 'Buy';

/** Formats line for the home hero and /book/. */
export const FORMATS_LINE = 'Kindle $' + KINDLE_PRICE + ' · Paperback · ' + PRINT_PAGES + ' pages · Read free with Kindle Unlimited · ' + RELEASE;
export const TAGLINE = 'Hard science fiction from the edge of Jupiter.';

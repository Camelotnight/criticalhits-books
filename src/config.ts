// Site-wide settings. Placeholders are listed in README.md.

/** The site's one Kit form. Every sign-up box and "Count me in" button posts here.
 *  Until December 22, 2026 it is the ARC (advance reader copy) list. */
export const KIT_FORM_ID = '10222508';

/** What the sign-up box asks for. 'arc' until December 22, 2026. On or after that date:
 *  set KIT_FORM_ID to the newsletter form, set this to 'newsletter', and redeploy. */
export const SIGNUP_MODE: 'arc' | 'newsletter' = 'arc';

/** Label for buttons and links that jump to the sign-up box. */
export const SIGNUP_CTA = SIGNUP_MODE === 'arc' ? 'Request an ARC' : 'Join the list';

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

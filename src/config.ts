// Site-wide settings. Placeholders are listed in README.md.

/** Kit form ID. Replace the placeholder once the Kit form exists. */
export const KIT_FORM_ID = 'KIT_FORM_ID_PLACEHOLDER';

/** Amazon pre-order URL. Replace once the pre-order exists. */
export const AMAZON_URL = '[AMAZON LINK]';

export const isPlaceholder = (value: string) =>
  value.includes('PLACEHOLDER') || value.startsWith('[');

export const RELEASE = 'December 2026';
export const TAGLINE = 'Hard science fiction from the edge of Jupiter.';

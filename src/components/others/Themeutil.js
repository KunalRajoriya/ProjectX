// themeUtils.js

/**
 * 1. Theme-aware CSS Class Mappings
 * Maps generic component names/roles to specific dark and light mode Tailwind classes.
 */
const THEME_CLASSES = {
  // --- Backgrounds ---
  // Primary container background (e.g., body, main page background)
  primaryBg: {
    dark: 'bg-gray-900',
    light: 'bg-white',
  },
  // Secondary background (e.g., cards, sidebars, modals)
  secondaryBg: {
    dark: 'bg-gray-800',
    light: 'bg-gray-100',
  },
  // --- Text Colors ---
  // Primary text color
  primaryText: {
    dark: 'text-white',
    light: 'text-gray-900',
  },
  // Secondary/Muted text color
  secondaryText: {
    dark: 'text-gray-400',
    light: 'text-gray-600',
  },
  // --- Borders/Separators ---
  // Border color for cards, inputs, or dividers
  border: {
    dark: 'border-gray-700',
    light: 'border-gray-300',
  },
  // --- Input/Form Elements (Example) ---
  input: {
    dark: 'bg-gray-700 text-white border-gray-600 focus:border-blue-500',
    light: 'bg-white text-gray-900 border-gray-300 focus:border-blue-500',
  },
};

/**
 * 3. Helper function to apply theme classes dynamically (Theme-aware className utility)
 * @param {string} theme The current theme ('dark' or 'light').
 * @param {string} classKey The key from THEME_CLASSES (e.g., 'primaryBg').
 * @param {string} [additionalClasses=''] Optional classes to always include.
 * @returns {string} A combined string of Tailwind classes.
 */
export function getThemeClasses(theme, classKey, additionalClasses = '') {
  const themeClass = THEME_CLASSES[classKey]?.[theme] || '';
  return `${themeClass} ${additionalClasses}`.trim();
}

/**
 * 4. Any additional theme utilities needed
 * Helper function to combine multiple theme-aware classes at once.
 * @param {string} theme The current theme ('dark' or 'light').
 * @param {{[key: string]: string}} mappings An object mapping class keys to optional additional classes.
 * @returns {string} A combined string of all resulting Tailwind classes.
 */
export function combineThemeClasses(theme, mappings) {
  return Object.entries(mappings)
    .map(([classKey, additional]) => getThemeClasses(theme, classKey, additional))
    .join(' ');
}

/**
 * 2. CSS transition classes for smooth theme switching
 * Apply these to the outermost container (e.g., the element rendered by ThemeProvider).
 */
export const TRANSITION_CLASSES = 'transition-colors duration-500 ease-in-out';

// You might also want a quick helper for adding transitions to specific elements:
export const SMOOTH_TRANSITION = 'transition duration-300 ease-in-out';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getThemeClasses, TRANSITION_CLASSES } from './Themeutil';

// --- Constants ---

/** Key used for storing the theme preference in localStorage. */
const THEME_STORAGE_KEY = 'theme';
/** Default theme to use if no preference is found in localStorage. */
const DEFAULT_THEME = 'dark'; // 'light' | 'dark'

// --- Context Setup ---

// Create the context with an initial undefined value.
const ThemeContext = createContext(undefined);

// ------------------------------------------------------------------

// --- ThemeProvider Component ---

/**
 * Manages the theme state, saves it to localStorage, and provides the theme context.
 */
export const ThemeProvider = ({ children }) => {
  // 1. Initialize state from localStorage or use the default
  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      // Ensure the stored value is one of the valid theme types
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
      }
      return DEFAULT_THEME;
    } catch (error) {
      console.error("Error reading theme from localStorage:", error);
      return DEFAULT_THEME;
    }
  });

  // 2. Effect to update localStorage whenever the theme state changes
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.error("Error writing theme to localStorage:", error);
    }
  }, [theme]);

  // 3. Effect to update the 'class' attribute on the document's root element (for Tailwind CSS)
  useEffect(() => {
    const root = window.document.documentElement;
    // Remove the opposite theme class and add the current one
    const oppositeTheme = theme === 'dark' ? 'light' : 'dark';
    
    root.classList.remove(oppositeTheme);
    root.classList.add(theme);
  }, [theme]);


  // 4. Function to toggle the theme
  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  }, []);

  // 5. Context value
  const contextValue = {
    theme,
    toggleTheme,
  };

 return (
    <ThemeContext.Provider value={contextValue}>
      {/* ⬅️ CRUCIAL CHANGE HERE: Apply the primary background class and the smooth transition */}
      <div 
        className={`${getThemeClasses(theme, 'primaryBg')} ${TRANSITION_CLASSES} min-h-screen`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// ------------------------------------------------------------------

// --- Custom Hook ---

/**
 * Custom hook to consume the theme context.
 * @returns An object containing the current theme and the toggleTheme function.
 * @throws An error if used outside of a ThemeProvider.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
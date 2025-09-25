// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from './ThemeProvider'; // Adjust this path if your ThemeProvider is elsewhere

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      // Base button styling: small, rounded, dark background, subtle hover
      // Relative position for icon animation
      className="
        relative 
        w-8 h-8 md:w-10 md:h-10 
        rounded-full 
        flex items-center justify-center 
        bg-gray-700 hover:bg-gray-600 
        text-white 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        transition-colors duration-300 ease-in-out
      "
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sun Icon (shown when current theme is dark, to toggle to light) */}
      <svg
        className={`
          absolute 
          h-5 w-5 md:h-6 md:w-6 
          text-yellow-400 // Sun color
          transition-all duration-300 ease-in-out
          ${theme === 'dark' ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'}
        `}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.405 4.606a.75.75 0 01-.707-.167L4.908 2.653a.75.75 0 111.06-1.06l1.79 1.79a.75.75 0 01-.168.707zM.75 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H1.5a.75.75 0 01-.75-.75zM4.908 21.347a.75.75 0 011.06-1.06l1.79 1.79a.75.75 0 01-.168.707.75.75 0 01-.707-.167L4.908 21.347zM3 12.75a.75.75 0 01-.75-.75V9.75a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM17.295 4.606a.75.75 0 01-.168-.707l1.79-1.79a.75.75 0 111.06 1.06l-1.79 1.79a.75.75 0 01-.707.167zM12 21.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM21.347 19.092a.75.75 0 01-.167-.707l1.79-1.79a.75.75 0 111.06 1.06l-1.79 1.79a.75.75 0 01-.707-.168zM21 12.75a.75.75 0 01-.75-.75V9.75a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM19.092 4.908a.75.75 0 01-.707.167.75.75 0 01-.168-.707l1.79-1.79a.75.75 0 111.06 1.06l-1.79 1.79z" />
      </svg>

      {/* Moon Icon (shown when current theme is light, to toggle to dark) */}
      <svg
        className={`
          absolute 
          h-5 w-5 md:h-6 md:w-6 
          text-indigo-300 // Moon color
          transition-all duration-300 ease-in-out
          ${theme === 'light' ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-90'}
        `}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" d="M9.529 1.25a1.5 1.5 0 011.01 1.01L10.5 3.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2.25c-.179-.179-.387-.33-.607-.445A8.904 8.904 0 0012 21.75a9 9 0 008.23-5.367.75.75 0 011.574.053 10.5 10.5 0 01-10.029 6.064 10.5 10.5 0 01-9.34-15.75c.34-.614.777-1.182 1.287-1.691z" clipRule="evenodd" />
      </svg>
    </button>
  );
}

export default ThemeToggle;
// components/others/Header.jsx

import React from 'react';
import ThemeToggle from './ThemeToggle'; 
import { useTheme } from './ThemeProvider';
import { getThemeClasses, SMOOTH_TRANSITION } from './Themeutil'; 

/**
 * Common Header component for both Admin and Employee dashboards.
 * @param {object} data - Employee data (if available).
 * @param {function} logOut - Logout function.
 * @param {boolean} isAdmin - Flag to determine the greeting text.
 */
const Header = ({ data, logOut, isAdmin }) => {
    const { theme } = useTheme();
    
    // ⬅️ Use secondaryBg for the header background
    const headerClasses = getThemeClasses(theme, 'secondaryBg', 'flex items-center justify-between p-4 shadow-lg');
    const textClasses = getThemeClasses(theme, 'primaryText');
    
    const userName = isAdmin ? "Admin" : (data?.name || "Employee");

    return (
        // Apply theme-aware classes and smooth transition
        <header className={`${headerClasses} ${SMOOTH_TRANSITION} rounded-xl mb-6`}> 
            <h1 className={`text-2xl font-medium ${textClasses}`}>
                Hello <br /> 
                <span className='text-3xl font-semibold'>{userName}👋</span>
            </h1>

            <div className="flex items-center space-x-4">
                {/* ⬅️ ThemeToggle Button added here */}
                <ThemeToggle /> 
                
                {/* Log Out Button */}
                <button 
                    onClick={logOut} 
                    className='bg-red-500 hover:bg-red-600 text-lg text-white px-5 py-2 rounded-2xl transition-colors' 
                >
                    Log Out
                </button>
            </div>
        </header>
    );
};

export default Header;
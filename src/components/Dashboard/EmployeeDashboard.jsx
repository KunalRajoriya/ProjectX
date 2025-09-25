// components/Dashboard/EmployeeDashboard.jsx

import Header from "../others/Header"
import TaskListNum from "../others/TaskListNum"
import TaskList from "../TaskList/TaskList"
// ⬅️ Import Theme Utilities
import { useTheme } from '../others/ThemeProvider';
import { getThemeClasses, SMOOTH_TRANSITION } from '../others/Themeutil';

const EmployeeDashboard = ({data, logOut}) => {
    const { theme } = useTheme();

    // ⬅️ Apply theme-aware text class
    const textClasses = getThemeClasses(theme, 'primaryText'); 
    
    // ⬅️ Hybrid Conditional Background: Preserves custom gradient for dark mode
    const backgroundClasses = 
        theme === 'dark'
        ? 'bg-[radial-gradient(ellipse_at_top,_#131a2e_0%,_#0b0f1a_70%)]' // Your custom dark gradient
        : getThemeClasses(theme, 'primaryBg'); // Use theme utility for light mode (e.g., bg-white)
        
    // Combine all wrapper classes
    const wrapperClasses = `p-5 h-screen ${backgroundClasses} ${textClasses} ${SMOOTH_TRANSITION}`; // Changed p-10 to p-5 to match AdminDashboard for consistency
    
    return (
        // The outer div is kept to ensure H-screen wrapper is correctly applied
        <div> 
            {/* ⬅️ Apply combined theme classes to the main container */}
            <div className={wrapperClasses}>
                
                {/* ⬅️ 1. Integrated Header Component (now includes ThemeToggle) */}
                <Header data={data} logOut={logOut} isAdmin={false} /> 
                
                {/* These children components must be updated internally 
                    to use theme utilities for their containers 
                    while preserving the colorful task card gradients. */}
                <TaskListNum data = {data} />
                <TaskList data = {data} />
            </div>
        </div>
    );
}

export default EmployeeDashboard
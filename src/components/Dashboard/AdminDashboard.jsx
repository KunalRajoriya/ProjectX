// components/Dashboard/AdminDashboard.jsx

import Header from "../others/Header"; // ⬅️ The updated Header component
import AllTasks from "../others/AllTasks";
// ⬅️ Import Theme Utilities
import { useTheme } from '../others/ThemeProvider';
import { getThemeClasses, SMOOTH_TRANSITION } from '../others/Themeutil';

const AdminDashboard = ({ logOut }) => {
    const { theme } = useTheme();

    // Text color is applied here to affect all inner elements
    const textClasses = getThemeClasses(theme, 'primaryText'); 

    // ⬅️ Define classes for the Task Creation Form container
    const formContainerClasses = getThemeClasses(
        theme,
        'secondaryBg', // Will switch between bg-gray-800 and bg-gray-100
        'mt-5 flex flex-wrap w-full items-start justify-between rounded-3xl p-5'
    );
    
    // Define theme-aware classes for all input fields (using 'input' key from ThemeUtil)
    const inputClasses = getThemeClasses(
        theme,
        'input',
        'text-sm py-2 px-3 w-4/5 rounded outline-none border'
    );
    
    const textareaClasses = getThemeClasses(
        theme,
        'input',
        'w-full h-44 border rounded px-4 py-2 resize-none'
    );

    return (
        // Apply text and smooth transition to the dashboard wrapper
        <div className={`h-screen w-full p-5 ${textClasses} ${SMOOTH_TRANSITION}`}>
            
            {/* ⬅️ 2. Integrated Header Component (replaces the old greeting/logout button) */}
            <Header logOut={logOut} isAdmin={true} /> 

            {/* Task Creation Form */}
            <div>
                <form 
                    className={`${formContainerClasses} ${SMOOTH_TRANSITION}`} // ⬅️ Applied theme classes
                >
                    {/* Left Column (Inputs) */}
                    <div className="w-1/2 p-5 space-y-3">
                        {/* Example: Input fields now use inputClasses */}
                        <div>
                            <h3>Task Title</h3>
                            <input className={inputClasses} type="text" placeholder="Make a UI Design" />
                        </div>
                        <div>
                            <h3>Date</h3>
                            <input className={inputClasses} type="date" />
                        </div>
                        {/* ... (rest of the input fields) ... */}
                        <div>
                            <h3>Assign To</h3>
                            <input className={inputClasses} type="text" placeholder="Employee Name" />
                        </div>
                        <div>
                            <h3>Category</h3>
                            <input className={inputClasses} type="text" placeholder="Design, Dev, etc" />
                        </div>
                    </div>

                    {/* Right Column (Description & Button) */}
                    <div className="w-2/5 flex flex-col items-start p-5">
                        <h3>Description</h3>
                        <textarea
                            className={textareaClasses} // ⬅️ Applied theme classes
                            name="" id="" cols={30} rows={10}
                        ></textarea>
                        
                        <button className=" w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded mt-5 px-5 py-2 transition-colors">
                            Create Task
                        </button>
                    </div>
                </form>
            </div>

            {/* All Tasks Component - ensure its containers use theme utilities */}
            <AllTasks />
        </div>
    );
};

export default AdminDashboard;
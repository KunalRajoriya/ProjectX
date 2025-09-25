// components/Auth/Login.jsx

import { useState } from "react";
// ⬅️ Import Theme Utilities
import { useTheme } from '../../components/others/ThemeProvider';
import { getThemeClasses, SMOOTH_TRANSITION } from '../../components/others/Themeutil';


const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // ⬅️ Get the theme context
  const { theme } = useTheme(); 

  // ⬅️ Define classes for Light Mode overrides
  const lightModeBg = 'bg-white';
  const lightModeText = 'text-gray-900';
  const lightModeInput = 'border-gray-400/60 bg-gray-50 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40';


  const submitHandler=(e) => {
    e.preventDefault();
    handleLogin(email, password);
   setEmail("");
   setPassword("");
  }

  // ⬅️ Apply conditional classes
  const formCardClasses = `
    rounded-3xl w-[90%] max-w-md backdrop-blur-sm shadow-[0_8px_40px_rgba(2,6,23,0.6)] p-8 
    ${SMOOTH_TRANSITION}
    ${
      theme === 'light' 
        ? `${lightModeBg} border border-gray-300 shadow-xl` 
        : 'bg-white/6 border border-white/6'
    }
  `;

  // Apply conditional classes to the full-screen background wrapper
  const fullScreenBgClasses = `
    flex h-screen w-screen items-center justify-center relative overflow-hidden
    ${theme === 'light' 
      ? 'bg-gray-100' // Simple light mode background
      : `bg-[radial-gradient(ellipse_at_center,_rgba(0,180,120,0.08)_0%,_transparent_40%)] 
         bg-gradient-to-b from-[#0a0f1a] via-[#05080f] to-[#010203]` // Your custom dark background
    }
  `;
  // Note: The custom animated gradient layer is kept only for dark mode
  const animatedBgClasses = theme === 'dark' ? 
    `absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,255,200,0.05)] to-transparent 
     animate-[moveGradient_8s_ease-in-out_infinite]` : '';
  

  return (
    <div className={fullScreenBgClasses}>
      {/* ⬅️ Animated Background Layer (Only visible in dark mode) */}
      <div className={animatedBgClasses}></div>

      <div className={formCardClasses}>

        <form 
        onSubmit={(e) => {
          submitHandler(e);
        }} 
        className='flex flex-col items-center justify-center p-5 '>
          
          {/* Email Input */}
          <input 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required 
            className={`
              w-full border-2 border-emerald-600/60 text-lg px-5 py-3 rounded-full 
              focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 
              transition-all ${SMOOTH_TRANSITION}
              ${theme === 'light' ? lightModeInput : 'bg-transparent text-white'}
            `} 
            type="email" 
            placeholder="Email" 
          />

          {/* Password Input */}
          <input 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required 
            className={`
              w-full border-2 border-emerald-600/60 text-lg px-5 py-3 rounded-full 
              focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 
              transition-all mt-3 ${SMOOTH_TRANSITION}
              ${theme === 'light' ? lightModeInput : 'bg-transparent text-white'}
            `} 
            type="password" 
            placeholder="Password" 
          /> 

          {/* Login Button */}
          <button 
            className={` 
              w-full bg-emerald-500 hover:bg-emerald-400 text-white text-lg px-5 py-3 rounded-full mt-8 
              transition-all 
              ${theme === 'dark' ? 
                'shadow-[0_0_10px_rgba(16,185,129,0.7),0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_15px_rgba(16,185,129,0.9),0_0_30px_rgba(16,185,129,0.7)]' : 
                'shadow-lg'
              }
            `} 
          >
            Log In
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthProvider.jsx'
import { ThemeProvider } from './components/others/ThemeProvider.jsx'
// import AuthProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  
    
      <AuthContext>
        <ThemeProvider>
        <App />
      </ThemeProvider>
      </AuthContext>
    
  
)

  

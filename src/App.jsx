// App.jsx
import Login from "./components/Auth/login";
import { useContext, useState, useEffect } from "react"; // Added useEffect to the import list
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { Authcontext } from "./context/AuthProvider";
// ⬅️ Import Theme Utilities
import { useTheme } from './components/others/ThemeProvider';
import { getThemeClasses, SMOOTH_TRANSITION } from './components/others/Themeutil';


const App = () => {
  // ⬅️ Get the theme context
  const { theme } = useTheme(); 

  // ⬅️ Apply theme-aware text color to the root App content
  const rootTextClasses = getThemeClasses(theme, 'primaryText', 'min-h-screen');

  useEffect(() => {
    // -------------8-------------------
    setLocalStorage()
    getLocalStorage()
  }, []) // ⬅️ Adjusted dependency array to prevent unnecessary runs

  const [user, setuser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const Authdata = useContext(Authcontext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setuser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setuser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (Authdata) {
      const employee = Authdata.employees.find((e) => e.email === email && e.password === password)
      if (employee) {
        setuser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    } else {
      alert("invalid credentials")
    }
  }

  const logOut = () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload()
  }

  return (
    // ⬅️ Apply the theme-aware text class and smooth transition to the root element
    // min-h-screen class is added here for good measure, though it's likely on the parent div in ThemeProvider
    <div className={`${rootTextClasses} ${SMOOTH_TRANSITION}`}> 
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard logOut={logOut} />
      ) : (
        (user == 'employee' ? <EmployeeDashboard data={LoggedInUserData} logOut={logOut}/> : null)
      )}
    </div>
  );
};

export default App;
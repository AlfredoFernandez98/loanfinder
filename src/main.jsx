import React,{ StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
//Layouts
import MainLayout from './layouts/MainLayout.jsx'

//Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/LogIn.jsx'
import SignUp from './pages/SignUp.jsx'
import AdminStart from './pages/AdminStart.jsx'

//Util
import facade from './util/apiFacade.js'







// Login Context to share state between components
export const AuthContext = React.createContext();

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      await facade.login(username, password); // Call login from the facade
      const token = facade.getToken();
      const role = token ? JSON.parse(atob(token.split('.')[1])).roles : null;
      setUser({ token, role });
      console.log('Logged in with token:', token);
      console.log('User role:', role);
    } catch (err) {
      console.error('Login failed:', err);
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    facade.logout(); // Clear token
    setUser(null); // Clear user data
    console.log('User logged out');
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={
          <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            <MainLayout />
          </AuthContext.Provider>
        }
      >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route
          path='login'
          element={
            !user ? (
              <Login login={handleLogin} />
            ) : user.role === 'admin' ? (
              <AdminStart user={user} />
            ) : user.role === 'user' ? (
              <UserStart user={user} />
            ) : (
              <Navigate to='/' replace />
            )
          }
        />
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)

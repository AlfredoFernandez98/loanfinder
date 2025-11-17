import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';

// Importer layout og sider
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';
import AdminStart from './pages/AdminStart.jsx';
import AdminBanks from './pages/AdminBanks.jsx';
import CustomerService from './pages/CustomerService.jsx';
import UserStart from './pages/UserStart.jsx';
import Request from './pages/Request.jsx';
import Loans from './pages/Loans.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import BankPartners from './pages/BankPartners.jsx';

// Importer hjælpefunktioner
import facade from './util/apiFacade.js';

// Komponent til at beskytte ruter baseret på brugerroller
const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = React.useContext(AuthContext);

  // Omdiriger til login, hvis ingen bruger er logget ind
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Omdiriger til hjemmesiden, hvis brugerens rolle ikke matcher den krævede
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // Render børnekomponenter, hvis rollekravet er opfyldt
  return children;
};

// Context til at dele autentifikationsstatus mellem komponenter
export const AuthContext = React.createContext();

const App = () => {
  const [user, setUser] = useState(null);

  // Håndter brugerlogin
  const handleLogin = async (username, password) => {
    try {
      await facade.login(username, password);
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

  // Håndter brugerlogout
  const handleLogout = () => {
    facade.logout();
    setUser(null);
    console.log('User logged out');
  };

  // Opsæt router med ruter
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            <MainLayout />
          </AuthContext.Provider>
        }
      >
        {/* Definer offentlige ruter */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="hvordan" element={<HowItWorks />} />
        <Route path="banker" element={<BankPartners />} />
        <Route path="customerservice" element={<CustomerService />} />
        <Route path="signup" element={<SignUp />} />

        {/* Definer betinget loginrute */}
        <Route
          path="login"
          element={
            !user ? (
              <Login login={handleLogin} />
            ) : user.role === 'admin' ? (
              <Navigate to="/admin" replace />
            ) : user.role === 'user' ? (
              <Navigate to="/user" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Definer admin-ruter */}
        <Route
          path="admin"
          element={
            <PrivateRoute requiredRole="admin">
              <AdminStart user={user} />
            </PrivateRoute>
          }
        />
        <Route
          path="adminbanks"
          element={
            <PrivateRoute requiredRole="admin">
              <AdminBanks />
            </PrivateRoute>
          }
        />
         <Route
          path="requests"
          element={
            <PrivateRoute requiredRole="admin">
              <Request/>
            </PrivateRoute>
          }
        />
         <Route
          path="loans"
          element={
            <PrivateRoute requiredRole="admin">
              <Loans/>
            </PrivateRoute>
          }
        />

        {/* Definer brugerrute */}
        <Route
          path="user"
          element={
            <PrivateRoute requiredRole="user">
              <UserStart user={user} />
            </PrivateRoute>
          }
        />

        {/* Fallback-rute for ukendte stier */}
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

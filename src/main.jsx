import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router';
// Layouts
import MainLayout from './layouts/MainLayout.jsx';

// Pages
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

// Util
import facade from './util/apiFacade.js';

// PrivateRoute Component
const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = React.useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

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
        path="/"
        element={
          <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            <MainLayout />
          </AuthContext.Provider>
        }
      >
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="customerservice" element={<CustomerService />} />
        <Route path="signup" element={<SignUp />} />

        {/* Login Route */}
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

        {/* Admin Routes */}
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

        {/* User Route */}
        <Route
          path="user"
          element={
            <PrivateRoute requiredRole="user">
              <UserStart user={user} />
            </PrivateRoute>
          }
        />

        {/* Fallback Route */}
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

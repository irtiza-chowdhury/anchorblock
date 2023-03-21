import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/routing/PrivateRoute';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Registration from './pages/Registration';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Registration />} />
      </Routes>

      <Routes>
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

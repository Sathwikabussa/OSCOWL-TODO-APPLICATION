import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import TodoList from './components/Todos/TodoList'; // Import TodoList if you plan to use it
import Profile from './components/Profile/Profile';
import './App.css';
import HomePage from './pages/HomePage';

const App = () => {
  const isAuthenticated = localStorage.getItem('token'); // Assuming you're storing the token in localStorage

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/todos" /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/todos" /> : <Signup />} />
        <Route path="/todos" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/" element={isAuthenticated ? <Navigate to="/todos" /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;


import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Login from './../pages/Auth/Login';
import Register from './../pages/Auth/Register';
import Profile from './../pages/User/Profile';

const WebRoutes = () => {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default WebRoutes;
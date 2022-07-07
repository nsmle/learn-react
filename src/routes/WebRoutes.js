import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { SwitchPageProvider } from './../context/SwitchPageContext'
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';

const WebRoutes = () => {
  return (
    <SwitchPageProvider>
      <Router basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </SwitchPageProvider>
  );
}

export default WebRoutes;
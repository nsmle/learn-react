import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SwitchPageProvider } from './../context/SwitchPageContext'
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';

const WebRoutes = () => {
  return (
    <SwitchPageProvider>
      <Router>
        <Routes>
          <Route path={`/${process.env.PUBLIC_URL}`} element={<Home />} />
          <Route path={`/${process.env.PUBLIC_URL}/about`} element={<About />} />
          <Route path={`/${process.env.PUBLIC_URL}/contact`} element={<Contact />} />
        </Routes>
      </Router>
    </SwitchPageProvider>
  );
}

export default WebRoutes;
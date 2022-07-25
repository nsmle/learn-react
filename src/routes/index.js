import React from 'react'
import { BrowserRouter as Router, Routes as RouteList, Route } from 'react-router-dom'
import GuestRoute from './GuestRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Login from './../pages/Auth/Login';
import Register from './../pages/Auth/Register';
import Profile from './../pages/User/Profile';

const Routes = () => {
  
  return (
    <Router basename={ 
        (process.env.NODE_ENV !== 'development' ?
        `/${process.env.PUBLIC_URL}` : '/')
    }>
      <RouteList>
        <Route path="/" element={
          <PublicRoute Page={Home} />
        } />
        <Route path="/about" element={
          <PublicRoute Page={About} />
        } />
        <Route path="/contact" element={
          <PublicRoute Page={Contact} />
        } />
        <Route path="/login" element={
          <GuestRoute Page={Login} />
        } />
        <Route path="/register" element={
          <GuestRoute Page={Register} />
        } />
        <Route path="/profile" element={
          <PrivateRoute Page={Profile} />
        } />
      </RouteList>
    </Router>
  );
}

export default Routes;
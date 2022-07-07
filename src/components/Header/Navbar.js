import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { SwitchPageContext } from './../../context/SwitchPageContext'

const Navbar = () => {
  
  const { count, addCounter } = useContext(SwitchPageContext)
  
  return (
      <nav className="bg-slate-100">
        <div className="flex w-full h-10 items-center">
          <div className="w-2/5 text-center">
            <h1 className="text-red-500 text-lg font-medium">Learn-React</h1>
          </div>
          <div className="w-3/5">
            <div className="flex justify-center text-sm md:text-md gap-2 md:gap-4">
                <NavLink onClick={addCounter} to="/" className={({ isActive }) => (isActive ? 'text-red-400 font-medium' : 'text-gray-500')}>
                  Home
                </NavLink>
                <NavLink onClick={addCounter} to="/about" className={({ isActive }) => (isActive ? 'text-red-400 font-medium' : 'text-gray-500')}>
                  About
                </NavLink>
                <NavLink onClick={addCounter} to="/contact" className={({ isActive }) => (isActive ? 'text-red-400 font-medium' : 'text-gray-500')}>
                  Contact
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
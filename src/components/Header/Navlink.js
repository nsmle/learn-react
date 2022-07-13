import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { SwitchPageContext } from './../../context/SwitchPageContext'

const Navlink = () => {
  const { handleAddCounter } = useContext(SwitchPageContext)
  
  return (
    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <NavLink onClick={handleAddCounter}
                      to="/"
               className={({ isActive }) => (isActive ?
                 'block py-2 pr-4 pl-3 text-teal-600 border-b border-slate-200 hover:bg-gray-200/40 active:text-teal-600 md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:active:text-teal-500 md:p-0' :
                 'block py-2 pr-4 pl-3 text-gray-500 border-b border-slate-200 hover:bg-gray-200/40 md:hover:bg-transparent md:border-0 md:hover:text-teal-400 md:p-0')
        }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleAddCounter}
                      to="/about"
               className={({ isActive }) => (isActive ?
                 'block py-2 pr-4 pl-3 text-teal-600 border-b border-slate-200 hover:bg-gray-200/40 active:text-teal-600 md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:active:text-teal-500 md:p-0' :
                 'block py-2 pr-4 pl-3 text-gray-500 border-b border-slate-200 hover:bg-gray-200/40 md:hover:bg-transparent md:border-0 md:hover:text-teal-400 md:p-0')
        }>
          About
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleAddCounter}
                      to="/contact"
               className={({ isActive }) => (isActive ?
                 'block py-2 pr-4 pl-3 text-teal-600 hover:bg-gray-200/40 active:text-teal-600 md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:active:text-teal-500 md:p-0' :
                 'block py-2 pr-4 pl-3 text-gray-500 hover:bg-gray-200/40 md:hover:bg-transparent md:border-0 md:hover:text-teal-400 md:p-0')
        }>
          Contact
        </NavLink>
      </li>
    </ul>
  )
}

export default Navlink;
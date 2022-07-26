import React, { useState } from 'react'
import { useSwitchPageContext } from './../../context/SwitchPageContext'
import { useAuthContext } from './../../context/AuthContext'
import { Link, useLocation } from 'react-router-dom'
import Navlink from './Navlink'
import Navprofile from './Navprofile'
import { ButtonPrimary, ButtonPrimaryOutline } from './../Buttons/'

const Navbar = () => {
  const { handleAddCounter } = useSwitchPageContext()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const AuthContext = useAuthContext()
  
  const handleIsMobileMenuChange = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  
  return (
    <nav className="bg-slate-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center px-4">
          <span className="text-teal-600 self-center text-xl font-semibold whitespace-nowrap">Learn React</span>
        </Link>
        <div className="flex md:hidden">
          <button onClick={handleIsMobileMenuChange} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span className="sr-only">Open main menu</span>
            { !isMobileMenuOpen ?
              (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>) :
              (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>)
            }
          </button>
        </div>
        <div className={ (!isMobileMenuOpen && 'hidden' ) + " justify-between items-center w-full md:flex md:w-auto md:order-1"}>
          <Navlink/>
        </div>
        <div className={ (!isMobileMenuOpen && 'hidden') + " flex md:block w-full md:w-auto pt-2 md:pt-0 justify-end md:order-3"}>
          { /*location.pathname !== '/login' &&
            (<Link onClick={handleAddCounter} className="mx-1" to="/login">
              <ButtonPrimaryOutline>Login</ButtonPrimaryOutline>
             </Link>)*/
          }
          { /*location.pathname !== '/register' &&
            (<Link onClick={handleAddCounter} className="mx-1" to="/register">
              <ButtonPrimary>Register</ButtonPrimary>
             </Link>)*/
          }
          { !(Object.keys(AuthContext.user).length === 0) ?
              (<Navprofile />) :
              (<div>
                  { location.pathname !== '/login' &&
                    (<Link onClick={handleAddCounter} className="mx-1" to="/login">
                      <ButtonPrimaryOutline>Login</ButtonPrimaryOutline>
                     </Link>)
                  }
                  { location.pathname !== '/register' &&
                    (<Link onClick={handleAddCounter} className="mx-1" to="/register">
                      <ButtonPrimary>Register</ButtonPrimary>
                     </Link>)
                  }
               </div>)
          }
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar;
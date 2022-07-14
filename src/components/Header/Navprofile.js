import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonDangerOutline } from '../Buttons'
import { useAuthContext } from './../../context/AuthContext'

const Navprofile = () => {
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false)
  const { user, logout } = useAuthContext()
  
  return (
    <div className="relative border-t border-gray-300 md:border-none w-full md:w-auto">
      <button onClick={() => setIsOpenUserMenu(!isOpenUserMenu)} className="hidden md:flex mr-3 text-sm bg-gray-400 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300">
        <span className="sr-only">Open user menu</span>
        <image className="w-8 h-8 rounded-full" src="https://xsgames.co/randomusers/avatar.php?g=male" alt="user photo" />
      </button>
      <div className={ (!isOpenUserMenu && 'md:hidden') + " md:-ml-28 md:absolute z-50 mt-2 md:my-4 text-base list-none md:bg-slate-50 divide-y divide-gray-200 rounded md:shadow"}>
        <div className="flex items-center px-4 py-3">
          <div className="mr-4 md:hidden">
            <image className="w-10 h-10 rounded-full" src="https://xsgames.co/randomusers/avatar.php?g=male" alt="user photo" />
          </div>
          <div>
            <span className="block text-sm text-gray-900">{ user?.name }</span>
            <span className="block text-sm font-medium text-gray-500 truncate">{ user?.email }</span>
          </div>
        </div>
        <ul className="py-1 md:divide-y md:divide-gray-200" aria-labelledby="dropdown">
          <li>
            <NavLink to="/profile"
              className={({ isActive }) => (isActive ?
                'text-teal-700' :
                'text-gray-700')
                + ' block px-4 py-2 text-base md:text-sm hover:bg-gray-100'
            }>
              Profile
            </NavLink>
          </li>
        </ul>
        <NavLink to="/login" onClick={logout}
          className={({ isActive }) => (isActive ?
            'text-teal-700' :
            'text-gray-700')
            + ' flex justify-end px-4 py-2 text-sm hover:bg-gray-100'
        }>
          <ButtonDangerOutline className="md:w-full py-1">
            Logout
          </ButtonDangerOutline>
        </NavLink>
      </div>
    </div>
  )
}

export default Navprofile;
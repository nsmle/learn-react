import { useState, useEffect, createContext, useContext } from 'react';
import { Navigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    let authLocalStorage = JSON.parse(localStorage.getItem('authenticated-user'))
    !!authLocalStorage && setUser(authLocalStorage)
  }, [])
  
  
  const Auth = {
    user,
    setUser: (user) => {
      localStorage.setItem('authenticated-user', JSON.stringify(user))
      setUser(user)
    }
  }
  
  return (
    <AuthContext.Provider value={Auth}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}


export const withAuth = (WrappedComponent, role) => ({...props}) => {
  const auth = useContext(AuthContext)
  if (Object.keys(auth.user).length === 0) return <Navigate to="/login" />
  
  return (
    <>
      <WrappedComponent {...props} {...auth}/>
    </>
  )
};

export const withGuest = (WrappedComponent, role) => ({...props}) => {
  const auth = useContext(AuthContext)
  if (Object.keys(auth.user).length > 0) return <Navigate to="/profile" />
  
  return (
    <>
      <WrappedComponent {...props} {...auth}/>
    </>
  )
};

import { 
  useState,
  useEffect,
  createContext,
  useContext
} from 'react';
import { Navigate } from 'react-router-dom'
import {
  jwtVerify,
  SignJWT
} from 'jose'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  
  // Generate random user for dummy data
  const generateUser = async (userProperty) => {
    let user = {}
    try {
      const response = await fetch('https://randomuser.me/api/')
      user = (await response.json()).results[0]
    } catch (err) {
      return false
    }
    
    user.name = userProperty.name ?
      userProperty.name :
      `${user.name.title}. ${user.name.first} ${user.name.last}`
    user.email = userProperty.email;
    user.login = { 
      password: userProperty.password
    };
    
    return user;
  }
  
  // Generate JWT token
  const generateToken = async (data) => {
    console.log(data);
    const token = await new SignJWT({ data: data })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt(Math.floor(new Date().getTime() / 1000))
      .setIssuer(window.location.href)
      .setAudience(window.location.origin)
      .setExpirationTime(process.env.REACT_APP_JWT_EXPIRES)
      .sign(new TextEncoder().encode(process.env.REACT_APP_JWT_SECRET))
    
    return token;
  }
  
  // Verify token and return user data
  const verifyToken = async (token) => {
    const {
      payload,
      protectedHeader
    } = await jwtVerify(token, new TextEncoder().encode(process.env.REACT_APP_JWT_SECRET), {
      audience: window.location.origin,
    })
    
    console.log({ 
      token: token,
      payload: payload,
      protectedHeader: protectedHeader
    })
    
    return payload.data;
  }
  
  useEffect(() => {
    // Get token from local storage and set user by token payload
    const authenticate = async () => {
      let token = localStorage.getItem('token');
      
      if (!!token) {
        let userAuth = await verifyToken(token);
        !!userAuth ? setUser(userAuth) : userAuth({})
      }
    }
    
    authenticate()
  }, [])
  
  
  // Value of AuthContext
  const Auth = {
    user,
    loginRegister: async (user) => {
      let token = await generateToken(user)
      
      localStorage.setItem('token', token)
      setUser(user)
    },
    logout: () => {
      localStorage.removeItem('token')
      setUser({})
    },
    generateUser
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
  
  if (Object.keys(auth?.user).length === 0) return <Navigate to="/login" />
  
  return (
    <>
      <WrappedComponent {...props} {...auth}/>
    </>
  )
};

export const withGuest = (WrappedComponent, role) => ({...props}) => {
  const auth = useContext(AuthContext)
  
  if (!(Object.keys(auth?.user).length === 0)) return <Navigate to="/profile" />
  
  return (
    <>
      <WrappedComponent {...props} {...auth}/>
    </>
  )
};

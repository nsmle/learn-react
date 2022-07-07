import React, { useState, createContext } from 'react';

const SwitchPageContext = createContext()

const SwitchPageProvider = ({children}) => {
  const [count, setCount] = useState(0)
  const addCounter = () => {
    setCount(count+1)
  }
  
  return (
    <SwitchPageContext.Provider value={{ count, addCounter }}>
      {children}
    </SwitchPageContext.Provider>
  )
}

export {
  SwitchPageContext,
  SwitchPageProvider
}
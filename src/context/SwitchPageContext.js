import { Component, useRef, useState, useEffect, createContext } from 'react';

const SwitchPageContext = createContext()

const SwitchPageProvider = ({children}) => {
  const isInitialMount = useRef(true);
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (isInitialMount.current) {
      let newCount = Number(localStorage.getItem('switch-page-count')) + 1;
      setCount(newCount)
      localStorage.setItem('switch-page-count', newCount);
      isInitialMount.current = false;
    }
  }, [count])
  
  const handleAddCounter = () => {
    let newCount = count + 1
    localStorage.setItem('switch-page-count', newCount);
    setCount(newCount)
  }
  
  const handleResetCounter = () => {
    setCount(0)
    localStorage.removeItem("switch-page-count");
  }
  
  return (
    <SwitchPageContext.Provider value={{ count, handleAddCounter, handleResetCounter }}>
      {children}
    </SwitchPageContext.Provider>
  )
}

export {
  SwitchPageContext,
  SwitchPageProvider
}
import { useRef, useState, useEffect, createContext, useContext } from 'react';

export const SwitchPageContext = createContext()

export const SwitchPageProvider = ({children}) => {
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
  
  const SwitchPageContextValue = {
    count,
    handleAddCounter,
    handleResetCounter
  }
  
  return (
    <SwitchPageContext.Provider value={SwitchPageContextValue}>
      {children}
    </SwitchPageContext.Provider>
  )
}

export const useSwitchPageContext = () => {
  return useContext(SwitchPageContext)
}
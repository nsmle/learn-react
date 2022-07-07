import Header from './../components/Header'
import { SwitchPageContext } from './../context/SwitchPageContext'

const AppLayout = ({children}) => {
  return (
    <>
      <Header />
      
      <main>
        {children}
        <SwitchPageContext.Consumer>
          {({count, handleResetCounter}) => {
            return (count > 0 ) &&
            (<div className="mt-8">
              <p className={ (count > 10 && " animate-bounce" ) + " text-center text-pink-400" }>
                You have switched pages <span className="text-red-500 font-bold">{count}</span> times
              </p>
              {
                ( count > 10 &&
                  <div className="flex justify-center ">
                    <button onClick={handleResetCounter} className="mt-2 px-2 py-1 bg-red-400 text-lg text-white font-semibold rounded active:scale-95 active:bg-red-400/90">
                      Reset
                    </button>
                  </div>)
              }
            </div>)
          }}
        </SwitchPageContext.Consumer>
      </main>
      
      <footer className="text-center">
        <p className="text-slate-100" >footer</p>
      </footer>
    </>
  )
}

export default AppLayout;
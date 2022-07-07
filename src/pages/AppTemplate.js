import Header from './../components/Header'
import { SwitchPageContext } from './../context/SwitchPageContext'

const AppTemplate = ({children}) => {
  return (
    <>
      <Header />
      
      <main>
        {children}
        <SwitchPageContext.Consumer>
          {({count}) => {
            console.log(count)
            return (count > 0 ) &&
            (<p className={ (count > 10 && "animate-bounce" ) + " text-center mt-4 text-pink-400" }>
              You have switched pages <span className="text-red-500 font-bold">{count}</span> times
            </p>)
          }}
        </SwitchPageContext.Consumer>
      </main>
      
      <footer className="text-center">
        <p className="text-slate-100" >footer</p>
      </footer>
    </>
  )
}

export default AppTemplate;
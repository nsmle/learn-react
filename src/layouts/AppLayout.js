import Header from './../components/Header'
import Footer from './../components/Footer'
import { ButtonPrimaryOutline } from './../components/Buttons'
import { useSwitchPageContext } from './../context/SwitchPageContext'


const AppLayout = ({children}) => {
  const switchPage = useSwitchPageContext()
  
  return (
    <>
      <Header />
      
      <main>
        <div className="flex pt-2 md:pt-12 justify-center">
          {children}
        </div>
        
        <div className="w-full mt-8">
          { switchPage.count > 0 &&
            (<p className={ (switchPage.count > 10 && " animate-bounce" ) + " text-center text-teal-400" }>
              You have switched pages <span className="text-teal-500 font-bold">{switchPage.count}</span> times
            </p>)
          }
          
          { switchPage.count > 10 &&
            (<div className="flex justify-center">
                <ButtonPrimaryOutline onClick={switchPage.handleResetCounter}>
                  Reset
                </ButtonPrimaryOutline>
            </div>)
          }
        </div>
      </main>
      
      <Footer />
    </>
  )
}

export default AppLayout;
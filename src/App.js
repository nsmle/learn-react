import Routes from './routes'
import { SwitchPageProvider } from './context/SwitchPageContext'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <SwitchPageProvider>
       <AuthProvider>
          <Routes />
        </AuthProvider>
    </SwitchPageProvider>
  )
}

export default App;

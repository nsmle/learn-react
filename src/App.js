import WebRoutes from './routes/WebRoutes'
import { SwitchPageProvider } from './context/SwitchPageContext'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <SwitchPageProvider>
       <AuthProvider>
          <WebRoutes />
        </AuthProvider>
    </SwitchPageProvider>
  )
}

export default App;

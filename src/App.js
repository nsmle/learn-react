import WebRoutes from './routes/WebRoutes'
import { SwitchPageProvider } from './context/SwitchPageContext'

const App = () => {
  return (
    <SwitchPageProvider>
      <WebRoutes />
    </SwitchPageProvider>
  )
}

export default App;

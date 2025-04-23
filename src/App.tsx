import './App.css'
import { AppProvider } from './Context/AppContext'
import AntivirusCard from './ui/AntivirusCard/AntivirusCard'

function App() {
  return (
    <AppProvider>
      <AntivirusCard />
    </AppProvider>
  )
}

export default App

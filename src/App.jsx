import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ConfigEditor from './components/configEditor'
import DataProvider from './components/data'
import MainLayout from './components/layout'
import VidoeCarousel from './components/VidoeCarousel'

function App() {
  if (window.Shopify) {
    return <ConfigEditor />
  }
  return (

    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route path="/api/data" element={<DataProvider />} />
          <Route path="/" element={<ConfigEditor />} />
          <Route path="/preview" element={<VidoeCarousel />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App

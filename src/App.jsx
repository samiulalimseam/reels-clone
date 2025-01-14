import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VerticalPlayer from './components/verticalPlayer'
import VidoeCarousel from './components/VidoeCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VidoeCarousel />
    </>
  )
}

export default App

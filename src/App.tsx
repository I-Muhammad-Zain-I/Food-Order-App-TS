import { useState } from 'react'

import './App.css'
import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BackgroundImage>
      <Header />
     </BackgroundImage>
    </>
  )
}

export default App

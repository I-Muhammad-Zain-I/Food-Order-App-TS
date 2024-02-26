import { useState } from 'react'

import './App.css'
import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import Header from './components/Header/Header'
import InfoBoard from './components/InfoBoard/InfoBoard'
import FoodList from './components/FoodList/FoodList'

function App() {
  const [count, setCount] = useState(0)

  return (
     <BackgroundImage>
      <Header />
      <main>
        <InfoBoard />
        <FoodList />
      </main>
     </BackgroundImage>
  )
}

export default App

import { useContext, useState } from 'react'

import './App.css'
import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import Header from './components/Header/Header'
import InfoBoard from './components/InfoBoard/InfoBoard'
import FoodList from './components/FoodList/FoodList'
import ModalAppearContext from './context/ModalAppearContext'
import OrderModal from './components/OrderModal/OrderModal'

function App() {
  const [count, setCount] = useState(0)
  const {appear} = useContext(ModalAppearContext)
  return (
     <BackgroundImage>
      <Header />
      <main>
        <InfoBoard />
        <FoodList />
      </main>
      {appear && <OrderModal />}
     </BackgroundImage>
  )
}

export default App

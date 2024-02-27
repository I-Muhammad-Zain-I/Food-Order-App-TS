import { useContext } from 'react'

import './App.css'
import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import Header from './components/Header/Header'
import InfoBoard from './components/InfoBoard/InfoBoard'
import FoodList from './components/FoodList/FoodList'
import ModalAppearContext from './context/ModalAppearContext'
import OrderModal from './components/OrderModal/OrderModal'

function App() {

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

/**
 * <BackgroundImage />: Cover Image component changes cover every 3 seconds
 * 
 * <Header />: Component that contains number of different meals ordered, clicking it triggers Order modal Window
 * 
 * <InfoBoard />: stateless presentational Component
 * 
 * <FoodList />: List Component that renders meals as it's List Items 
 * 
 * <OrderModal />: Modal Window triggered upon clicking on Cart button in header
 */
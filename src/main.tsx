import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { OrderModalContextProvider } from './context/OrderModalContext.tsx'
import { ModalAppearContextProvider } from './context/ModalAppearContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OrderModalContextProvider>
      <ModalAppearContextProvider>
        <App />
      </ModalAppearContextProvider>
    </OrderModalContextProvider>
  </React.StrictMode>,
)

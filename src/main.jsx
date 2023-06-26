import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './contexts/UserContext.jsx'
import AddCartContext from './contexts/CartItemsLocalStore.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <AddCartContext>
        <App />
      </AddCartContext>
    </UserContext>
  </React.StrictMode>
)

import { RouterProvider } from 'react-router-dom'
import './App.css'

import router from './routes/routes'
import { useContext } from 'react'
import { AuthContext } from './contexts/UserContext'
import { Toaster } from 'react-hot-toast'


function App() {
const {user}=useContext(AuthContext)
console.log(user,"check user")

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App

import { RouterProvider } from 'react-router-dom'
import './App.css'

import router from './routes/routes'
import { useContext } from 'react'
import { AuthContext } from './contexts/UserContext'


function App() {
const {user}=useContext(AuthContext)
console.log(user,"check user")

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

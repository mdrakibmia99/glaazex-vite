import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/UserContext"
import AfterSignIn from "./AfterSignIn"
import BeforeSignIn from "./BeforeSignIn"
import HomeLoading from "../Loading/HomeLoading"
import AddCardPage from "../AddCardPage"

function Navbar() {
  const {user,loading} = useContext(AuthContext)
  const [cartChecked,setCardChecked]=useState(true)
  if(loading){
    return <HomeLoading></HomeLoading>
  }
  return (
    <div className="w-full bg__bg shadow-lg z-10">
    <div className="container mx-auto navbar">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
      <AddCardPage cartChecked={cartChecked} setCardChecked={setCardChecked}/>
        <div className="dropdown dropdown-end">
          <label htmlFor="card-open-drawer" tabIndex={0} className="btn btn-ghost btn-circle">
            <div 
            onClick={()=>setCardChecked(!cartChecked)}
            className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
        </div>
        {
          (user && user?.uid)? <AfterSignIn/>: <BeforeSignIn/>
        }
      </div>
    </div>
    </div>
  )
}

export default Navbar
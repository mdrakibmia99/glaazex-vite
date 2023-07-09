import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/UserContext"
import AfterSignIn from "./AfterSignIn"
import BeforeSignIn from "./BeforeSignIn"
import HomeLoading from "../Loading/HomeLoading"
import AddCardPage from "../AddCardPage"
import { CartContext } from "../../contexts/CartItemsLocalStore"
import { Link } from "react-router-dom"
import MenuSideBar from "../MenuSideBar/MenuSideBar"

function Navbar() {
  const { user, loading } = useContext(AuthContext)
  const { addItems } = useContext(CartContext)
  const [cartChecked, setCardChecked] = useState(true)
  if (loading) {
    return <HomeLoading></HomeLoading>
  }
  return (
    <div className="w-full bg__bg shadow-lg z-10 box-border">
      <div className="container mx-auto navbar ">
        <div className="flex flex-row  w-full justify-between">
          <div className="flex items-center">
          <div>
            <MenuSideBar/>
          </div>
        <div className=" max-w-[150px]  ">
          <div className="join w-full ">
            <input className="input input-bordered lg:max-w-[250px] max-w-[100px] join-item rounded-l-full focus:outline-0" placeholder="Search..." />
            <button className="btn join-item rounded-r-full">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </button>
          </div>
        </div>
        </div>
        <Link to={'/'}>
        <svg className="fill-[#08fc51] " xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M403.5 455.41A246.17 246.17 0 0 1 256 504C118.81 504 8 393 8 256 8 118.81 119 8 256 8a247.39 247.39 0 0 1 165.7 63.5 3.57 3.57 0 0 1-2.86 6.18A418.62 418.62 0 0 0 362.13 74c-129.36 0-222.4 53.47-222.4 155.35 0 109 92.13 145.88 176.83 178.73 33.64 13 65.4 25.36 87 41.59a3.58 3.58 0 0 1 0 5.72zM503 233.09a3.64 3.64 0 0 0-1.27-2.44c-51.76-43-93.62-60.48-144.48-60.48-84.13 0-80.25 52.17-80.25 53.63 0 42.6 52.06 62 112.34 84.49 31.07 11.59 63.19 23.57 92.68 39.93a3.57 3.57 0 0 0 5-1.82A249 249 0 0 0 503 233.09z"/></svg>
        </Link>
        <div className="flex justify-center items-center">
          <AddCardPage cartChecked={cartChecked} setCardChecked={setCardChecked} />
          <div className="dropdown dropdown-end">
            <label htmlFor="card-open-drawer" tabIndex={0} className="btn btn-ghost btn-circle">
              <div
                onClick={() => setCardChecked(!cartChecked)}
                className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">{addItems.length}</span>
              </div>
            </label>
          </div>
          {
            (user && user?.uid) ? <AfterSignIn /> : <BeforeSignIn />
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
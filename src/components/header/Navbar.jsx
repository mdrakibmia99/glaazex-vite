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
  const dropdownStyle="dropdown-end";
  const { user, loading } = useContext(AuthContext)
  const { addItems } = useContext(CartContext)
  const [cartChecked, setCardChecked] = useState(true)
  if (loading) {
    return <HomeLoading></HomeLoading>
  }
  return (
    <section className="w-full bg-[white] md:bg-[#b1beb5] lg:bg-[#b1beb5]  shadow-lg z-10 box-border">
      <div className="container mx-auto navbar box-border">
        <div className="flex  flex-row  w-[98%] justify-between box-border">
          <div className="flex  justify-start basis-5/6 lg:basis-1/3  md:basis-1/3 ">
          {/* <div className="flex  place-content-around w-full lg:w-auto md:w-auto "> */}
          <div className="lg:mr-[30] md:mr-[30px] mr-0 ">
            <MenuSideBar/>
          </div>
        <div className=" join shrink w-full lg:w-full md:w-full overflow-auto flex">
          {/* <div className="join w-full outline-none border-none "> */}
            <input className="input w-full md:w-[220px] lg:w-[220px] input-bordered bg-[#eeeeee] border-none  join-item rounded-l-full focus:outline-0" placeholder="Search..." />
            <button className="btn  join-item rounded-r-full bg-[#eeeeee] border-none">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </button>
          {/* </div> */}
        </div>
        </div>
        <Link to={'/'} className='hidden lg;flex md:flex justify-center basis-1/3   '>
        <svg className="fill-[#08fc51] " xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M403.5 455.41A246.17 246.17 0 0 1 256 504C118.81 504 8 393 8 256 8 118.81 119 8 256 8a247.39 247.39 0 0 1 165.7 63.5 3.57 3.57 0 0 1-2.86 6.18A418.62 418.62 0 0 0 362.13 74c-129.36 0-222.4 53.47-222.4 155.35 0 109 92.13 145.88 176.83 178.73 33.64 13 65.4 25.36 87 41.59a3.58 3.58 0 0 1 0 5.72zM503 233.09a3.64 3.64 0 0 0-1.27-2.44c-51.76-43-93.62-60.48-144.48-60.48-84.13 0-80.25 52.17-80.25 53.63 0 42.6 52.06 62 112.34 84.49 31.07 11.59 63.19 23.57 92.68 39.93a3.57 3.57 0 0 0 5-1.82A249 249 0 0 0 503 233.09z"/></svg>
        </Link>
        <div className="flex justify-center items-center basis-1/6 lg:basis-1/3 md:basis-1/3">
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
          {/* <div className="w-full lg:block md:block hidden"> */}

          {
            (user && user?.uid) ? <AfterSignIn dropdownStyle={dropdownStyle}/> : <BeforeSignIn />
          }
          {/* </div> */}
        </div>
      </div>
    </div>

   

    </section>
  )
}

export default Navbar
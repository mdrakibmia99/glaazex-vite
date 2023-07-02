import { useState } from "react"
import { categories } from "../../database/productsData"

function MenuSideBar() {
	const [sideNavBar, setSideNavBar] = useState(true)
	return(
			<div className="drawer">
		<input id="menu-side-bar" type="checkbox" 
		
		checked={`${sideNavBar? '':'checked'}`}
		className="drawer-toggle" />
		<div className="drawer-content">
		  {/* Page content here */}
		  <label 
		 onClick={()=>setSideNavBar(!sideNavBar)} 
		  htmlFor="menu-side-bar" className="btn btn-primary drawer-button">

		  <svg className="" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path></svg>
		  </label>
		</div> 
		<div className="drawer-side">
		  <label htmlFor="menu-side-bar" className="drawer-overlay"></label>
		  <div className="bg-base-200 w-80  h-screen z-50  fixed">

            <div className="py-5 bg__bg ">
		  <div className="flex justify-between px-5 items-center">
                <div>
                  <p className="text-lg font-bold">Product Categories</p>
                  <span className="text-sm ">Show all Categories</span>
                </div>
                <div
                  onClick={()=>setSideNavBar(!sideNavBar)} 
                  className="outline rounded-full  shadow-black w-[20px] h-[20px] hover:cursor-pointer hover:scale-[1.05]">
                  <svg stroke="currentColor" fill="currentColor" className="rounded-full" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                </div>
                </div>
              </div>
			  <nav className="">
        <ul className="">
			{
				categories &&
				categories.map(item=>(
					<li className="m-4 group relative">
					<div className="flex items-center">
					<img className="w-[30px]" src={item.img} alt="" />
					<a className="text-gray-400  ml-3 hover:text-white" href="/about">{item.product_name}</a>
					</div>
					<ul  className="hidden absolute w-48 rounded p-3 top-0 bg-base-200 left-80 group-hover:block">
					  <li className="mb-3">
						<a className="text-gray-400  hover:text-black" href="/about/history">History</a>
					  </li>
					  <li>
						<a className="text-gray-400 hover:text-black" href="/about/team">Team</a>
					  </li>
					</ul>
				  </li>
				))
			}
         
         
          
          
        </ul>
      </nav>
		</div>
		
		</div>
		</div>
	  
  )
}

export default MenuSideBar
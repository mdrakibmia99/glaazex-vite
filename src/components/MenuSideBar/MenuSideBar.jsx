import { useState } from "react"
import { Link } from "react-router-dom"
import { categories } from "../../database/productsData"

function MenuSideBar() {
	const [sideNavBar, setSideNavBar] = useState(true)
	return (
		<div className="drawer z-[999]">
			<input id="menu-side-bar" type="checkbox"

				checked={`${sideNavBar ? '' : 'checked'}`}
				className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<label
					onClick={() => setSideNavBar(!sideNavBar)}
					htmlFor="menu-side-bar" className="btn btn-primary drawer-button bg-transparent scale-[1.3] border-none hover:scale-[2] rounded-full hover:bg-transparent">

					<svg className="" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path></svg>
				</label>
			</div>
			<div className="drawer-side">
				<label htmlFor="menu-side-bar" className="drawer-overlay"></label>
				<div className="bg-base-200 w-80  h-screen z-50  overflow-y-auto fixed">

					<div className="py-5 bg__bg ">
						<div className="flex justify-between px-5 items-center">
							<div>
								<p className="text-lg font-bold">Product Categories</p>
								<span className="text-sm ">Show all Categories</span>
							</div>
							<div
								onClick={() => setSideNavBar(!sideNavBar)}
								className="outline rounded-full  shadow-black w-[20px] h-[20px] hover:cursor-pointer hover:scale-[1.05]">
								<svg stroke="currentColor" fill="currentColor" className="rounded-full" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
							</div>
						</div>
					</div>
					<nav className="">
						<ul className="w-full bg-white">
							{
								categories &&
								categories.map((item,index) => (
									<li key={index} className=" group">
										<div className="collapse collapse-arrow bg-base-200 rounded-none">
											<input type="radio" name="glaazex-accordion" />
											<div className="collapse-title text-xl font-medium bg-white">
												<div className="flex items-center ">
													<img className="w-[30px]" src={item.img} alt="" />
													<p className="text-gray-400  ml-3 hover:text-white" >{item.product_name}</p>
												</div>
											</div>
											<div className="collapse-content block bg-white ">
												<ul className='leading-10'>
													<li ><Link to={`/allProducts/${item.product_name}`} onClick={() => setSideNavBar(!sideNavBar)}> {item.product_name}</Link> </li>
													{

														Object.keys(item.sub_category)?.map(keyName => (

															<li className="border-t-2" key={keyName}><Link to={`/sub_category/${item.sub_category[keyName]}`} onClick={() => setSideNavBar(!sideNavBar)}> {item.sub_category[keyName]}</Link> </li>
														))

													}
												</ul>
											</div>
										</div>

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
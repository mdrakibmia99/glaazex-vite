/* eslint-disable react/prop-types */

import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/CartItemsLocalStore"


const AddCardPage = ({ cartChecked, setCardChecked }) => {
  const { addItems, setAddItems, countItem, setCountItem } = useContext(CartContext)

  const handleDelete = (selectIndex) => {
    const deleteItem = addItems.filter((item, index) => {
      if (index !== selectIndex) {
        return item
      }
    })
    setAddItems([...deleteItem])
  }

  return (
    <>
      <div className="drawer drawer-end z-50">
        <input id="card-open-drawer"
          checked={`${cartChecked ? '' : 'checked'}`}
          type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

        </div>
        <div className="drawer-side">
          <label htmlFor="card-open-drawer" className="drawer-overlay"></label>
          <div className="bg-base-200 w-80 h-screen z-50 fixed">

            <div className="mt-2 ">
              <div className="flex justify-between px-5 items-center">
                <div>
                  <p className="text-lg font-bold">Cart</p>
                  <span className="text-base font-normal">Wish to Purchase</span>
                </div>
                <div
                  onClick={() => setCardChecked(!cartChecked)}
                  className="outline rounded-full  shadow-black w-[20px] h-[20px] hover:cursor-pointer hover:scale-[1.05]">
                  <svg stroke="currentColor" fill="currentColor" className="rounded-full" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                </div>

              </div>
              <div className="divider mt-0"></div>
              {/* cart items here */}
              <div className="h-[70vh] w-full overflow-x-hidden ">
                {
                  addItems.length === 0 ?
                    <span>No Card Item</span> :

                    <ul className="w-full">
                      {
                        addItems.map((item, index) => (

                          <li key={index} className="mb-3">
                            <div className="flex items-center gap-2 px-5 w-full">

                              <div className=" w-1/6 rounded-lg ">

                                <img className="w-full rounded-lg" src={item.product_image} alt="" />
                              </div>

                              <div className="w-4/6">
                                <p className="whitespace-nowrap truncate">{item.product_title} </p>
                                <p> {item.qty} <span>Items x </span> {item.price}</p>
                              </div>

                              <div
                                onClick={() => handleDelete(index)}
                                className="w-[25px] ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" id="delete" x="0" y="0" version="1.1" viewBox="0 0 29 29" ><path d="M19.795 27H9.205a2.99 2.99 0 0 1-2.985-2.702L4.505 7.099A.998.998 0 0 1 5.5 6h18a1 1 0 0 1 .995 1.099L22.78 24.297A2.991 2.991 0 0 1 19.795 27zM6.604 8 8.21 24.099a.998.998 0 0 0 .995.901h10.59a.998.998 0 0 0 .995-.901L22.396 8H6.604z"></path><path d="M26 8H3a1 1 0 1 1 0-2h23a1 1 0 1 1 0 2zM14.5 23a1 1 0 0 1-1-1V11a1 1 0 1 1 2 0v11a1 1 0 0 1-1 1zM10.999 23a1 1 0 0 1-.995-.91l-1-11a1 1 0 0 1 .905-1.086 1.003 1.003 0 0 1 1.087.906l1 11a1 1 0 0 1-.997 1.09zM18.001 23a1 1 0 0 1-.997-1.09l1-11c.051-.55.531-.946 1.087-.906a1 1 0 0 1 .905 1.086l-1 11a1 1 0 0 1-.995.91z"></path><path d="M19 8h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-8-2h7V4h-7v2z"></path></svg>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                }
              </div>


              <div className="divider mt-0"></div>
            </div>



            <div className="fixed bottom-0 w-full px-5">
              <div className="flex justify-between my-3">
                <p className="font-bold">SUB TOTAL</p>
                <p className="font-bold">120 <span>TK</span> </p>
              </div>
              <Link
                onClick={() => setCardChecked(!cartChecked)}
                to={'/order/product'} className="block text-center w-full mb-5 bg__bg rounded-md py-2 text-black font-bold hover:cursor-pointer hover:bg-[#939f90] ease-in-out duration-200">ORDER NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddCardPage
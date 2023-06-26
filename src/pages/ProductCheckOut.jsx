import { Link } from "react-router-dom"
import CheckOutCartItem from "../components/ProductCheckOut/CheckOutCartItem"
import { useContext } from "react"
import { CartContext } from "../contexts/CartItemsLocalStore"

const ProductCheckOut = () => {
    const { addItems } = useContext(CartContext)
    let total = 0
    for (let item of addItems) {
        total = total + parseFloat(item.price) * parseFloat(item.qty)
    }
    return (
        <>
            <div className="container mx-auto">

                <div className="flex lg:flex-row md:flex-row flex-col gap-2 px-5 w-full">

                    <div className="md:w-2/3 lg:w-2/3 w-full mb-2 mt-5 border-2 rounded-md">
                     {addItems.length !==0 &&
                      addItems.map((item,index)=>(

                          <CheckOutCartItem 
                           key={index}
                           item={item}
                           index={index}
                           />
                      ))

                     }
                     <div className="w-full text-center">

                         <Link className='my-5 inline-block  mr-5 border-2 px-3 py-2 hover:shadow-lg text-[#ffc300] bg-black font-bold rounded-md ' to='/'>CONTINUE SHOP</Link>
                     </div>

                    </div>

                    <div className="lg:w-1/3 md:w-1/3 w-full">
                        <h2 className="font-semibold my-5 text-2xl">Cart Totals</h2>

                        <div className="">
                            <div className="flex justify-between border-y-2 mb-2 py-2">
                                <p className="text-base font-normal">SUBTOTAL</p>
                                <p className="font-normal"><span className="font-bold">{total}</span>TK</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-base font-normal">TOTAL</p>
                                <p className="font-normal"><span className="font-bold">{total}</span>TK</p>
                            </div>

                            <Link to={"/order/product/Information"} className="block mt-3 text-center w-full mb-5 bg__bg rounded-md py-2 text-black font-bold hover:cursor-pointer hover:bg-[#939f90] ease-in-out duration-200">PROCEED TO CHECKOUT</Link>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCheckOut
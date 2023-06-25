import { Link } from "react-router-dom"
import CheckOutCartItem from "../components/ProductCheckOut/CheckOutCartItem"

const ProductCheckOut = () => {
    return (
        <>
            <div className="container mx-auto">

                <div className="flex lg:flex-row md:flex-row flex-col gap-2 px-5 w-full">

                    <div className="md:w-2/3 lg:w-2/3 w-full mb-2 mt-5 border-2 rounded-md">

                        <CheckOutCartItem />
                        <CheckOutCartItem />
                        <CheckOutCartItem />
                        <CheckOutCartItem />

                    </div>

                    <div className="lg:w-1/3 md:w-1/3 w-full">
                        <h2 className="font-semibold my-5 text-2xl">Cart Totals</h2>

                        <div className="">
                            <div className="flex justify-between border-y-2 mb-2 py-2">
                                <p className="text-base font-normal">SUBTOTAL</p>
                                <p className="font-normal"><span className="font-bold">120</span>TK</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-base font-normal">TOTAL</p>
                                <p className="font-normal"><span className="font-bold">120</span>TK</p>
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
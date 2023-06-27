/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { allProductData } from "../../database/productsData"
import ProductCart from "./ProductCart"



const Product = ({ pro_cat }) => {
    allProductData
    // if has  sub category it will be true
    const isTrue = pro_cat.sub_category
   

    return (
        <>
            <div className='flex flex-row flex-wrap my-3 gap-2 mb-5 '>
                {isTrue &&
                    Object.values(isTrue).map((category, index) => (

                        <Link
                        to={`/sub_category/${category}`}
                            key={index}
                            className='whitespace-nowrap text-xs lg:text-lg rounded-full mr-2 bg-[#E0E0E0] hover:shadow ease-in px-4 py-2'>
                            {category}
                        </Link>
                    ))
                }

               

            </div>
            {/* <div className='grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-5 place-content-around '> */}
            <div className='grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-5 place-content-around '>
                {/* product card use for product img and name show */}
                {
                    allProductData.map((product) => (
                        <>
                            <ProductCart  product={product} />
                        </>
                    ))
                }
            </div>

        </>
    )
}

export default Product
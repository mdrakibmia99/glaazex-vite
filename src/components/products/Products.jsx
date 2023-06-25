import { Link } from "react-router-dom"
import { categories } from "../../database/productsData"
import Product from "./Product"

const Products = () => {
    return (
        <div className='container mx-auto w-full mb-5'>
            <h1 className='text-2xl  font-bold mt-5'>Products</h1>

            {
                categories.map((pro_cat,index) => (
                    <>
                        <div key={index} className='flex justify-between my-2 border-y py-2 border-[#314c3d]'>
                            <h3 className=' font-medium text-lg'>{pro_cat.product_name}</h3>
                            <Link to={`/allProducts/${pro_cat.product_name}`} className='btn-rk'>See More</Link>
                        </div>
                        <Product key={pro_cat.id} pro_cat={pro_cat} />
                    </>
                ))
            }
        </div>
    )
}

export default Products
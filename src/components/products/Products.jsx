import { Link } from "react-router-dom"
import { categories } from "../../database/productsData"
import Product from "./Product"
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartItemsLocalStore"


const Products = () => {
  const {productDetail}=useContext(CartContext)
// console.log(productDetail,'prodcut detail');

    return (
        <div className='container my-5 mx-auto'>
            <h1 className='text-2xl  font-bold mt-5'>Products</h1>

            {
                categories.map((pro_cat, index) => (
                    <div key={index}>
                        <div key={index} className='flex lg:px-0 md:px-0 px-3 justify-between my-2 border-y py-2 border-[#314c3d]'>
                            <h3 className=' font-medium text-lg'>{pro_cat.product_name}</h3>
                            <Link to={`/allProducts/${pro_cat.product_name}`} className='btn-rk'>See More</Link>
                        </div>
                        <Product  key={pro_cat.id} pro_cat={pro_cat} />
                    </div>
                ))
            }
            {
                productDetail.length !==0 &&
                <ProductDetailModal productDetail={productDetail}></ProductDetailModal>
            }
        </div>
    )
}

export default Products
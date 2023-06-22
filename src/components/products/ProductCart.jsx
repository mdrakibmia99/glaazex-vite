/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


const ProductCart = ({product}) => {
  return (
    <div className='flex gap-3'>
      <Link to={`/product/${product.id}`}>
      <div className="w-[170px] md:w-[220px] lg:w-[220px] ease-in-out duration-150 product-card shadow-inner hover:shadow-xl">
        <div className="px-2 pt-2 ">
          <img className='h-[280px] rounded hover:scale-[0.99] ' src={product.product_image} alt="Shoes"  />
        </div>
        <div className="flex flex-col items-center py-3 font-normal">
          <p className="text-xs text-center">{product.product_name}</p>
          <p>{product.price} <span>TK</span></p>
        </div>
      </div>
      </Link>

    </div>
  )
}

export default ProductCart
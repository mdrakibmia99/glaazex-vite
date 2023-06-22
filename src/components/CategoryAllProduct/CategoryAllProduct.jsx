/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom"
import { allProductData, categories } from "../../database/productsData"
import ProductCart from "../products/ProductCart"


const CategoryAllProduct = () => {
  const { productType } = useParams()
    const filterArray = allProductData.filter(product => product.product_name.toLowerCase() === productType.toLowerCase())
    const filterSubCat = categories.filter(product => product.product_name.toLowerCase() === productType.toLowerCase())
  
  
    return (
      <div>
        <h1>
          Category : <span> {productType}</span>
        </h1>
        <div className='flex my-3 gap-2'>
                  {filterSubCat &&
                      Object.values(filterSubCat[0].sub_category).map((category,index)=>(
  
                          <Link to='#' className='rounded-full bg-[#ffffff] px-4 py-2'>
                           {category}
                      </Link>
                      ))
                  }
                 
              </div>
        <div className='grid gap-2 grid-cols-2 place-content-around md:grid-cols-3 lg:grid-cols-5'>
          {
            filterArray &&
  
  
            filterArray?.map((product) => (
              <>
                <ProductCart product={product} />
              </>
            ))
          }
  
  
        </div>
  
      </div>
    )
        }
export default CategoryAllProduct
import SelectImage from './SelectImage'
import SelectDetails from './SelectDetails'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartItemsLocalStore'

const ProductDetail = ({ productDetail }) => {
  // console.log(productDetail, 'whit is this')
  // const { id } = useParams()

  const { addItems, countItem, setCountItem } = useContext(CartContext)
  const { setProductDetail } = useContext(CartContext)
  // allProductData
  // const productData = allProductData.find(product => product.id == id)
  const productData = productDetail
  const detailImage = productData.product_details.product_images;


  const handleAddCart = () => {

    setProductDetail([])
    setCountItem(0)
  }


  return (
    <div className='relative mt-5 lg:w-9/12 md:w-9/12 w-full  mx-auto flex justify-center items-center '>
      <div className='w-full shadow p-5 rounded shadow-green-400'>

        <div className='w-full grid md:flex lg:flex sm:w-full '>
          <SelectImage detailImage={detailImage} />
          <SelectDetails productData={productData} />
        </div>
        <div className="alert bg-[#fdf2f2] mt-5 flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center ">
          <div className='flex lg:justify-start justify-center w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Sign in to See Price & Order!</span>
          </div>
          <div className='w-full'>

            <div className='flex justify-center lg:text-base md:text-base text-xs items-center lg:justify-end  w-full'>
        
              <div
                className="indicator mr-5">
                <span
                  onClick={handleAddCart}
                  className='bg-[#ffc300] hover:bg-[#a7924c] hover:cursor-pointer ease-in-out duration-200 rounded-sm text-black px-5 font-medium py-2'> ADD TO CART</span>
                <span className="badge rounded-full badge-md bg-black text-white indicator-item">{countItem}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <form method="dialog" className="absolute top-0 right-0">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
    </div>
  )
}

export default ProductDetail
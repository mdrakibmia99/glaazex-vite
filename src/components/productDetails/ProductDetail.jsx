import SelectImage from './SelectImage'
import SelectDetails from './SelectDetails'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { allProductData } from '../../database/productsData'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartItemsLocalStore'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItems, countItem } = useContext(CartContext)

  allProductData
  const productData = allProductData.find(product => product.id == id)
  const detailImage = productData.product_details.product_images;


  const handleAddCart = () => {
    console.log(addItems, 'show add item')
    navigate('/')
  }


  return (
    <div className='mt-5 lg:w-9/12 md:w-9/12 w-full  mx-auto flex justify-center items-center '>
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
              <Link className='mr-5 border-2 px-3 py-2 hover:shadow-lg text-[#ffc300] bg-black font-bold rounded-md ' to='/'>CONTINUE SHOP</Link>
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
    </div>
  )
}

export default ProductDetail
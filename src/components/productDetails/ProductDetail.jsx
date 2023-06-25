import SelectImage from './SelectImage'
import SelectDetails from './SelectDetails'
import { useParams } from 'react-router-dom'
import { allProductData } from '../../database/productsData'

const ProductDetail = () => {
  const { id } = useParams()
  allProductData
  const productData = allProductData.find(product=> product.id==id)
  const detailImage=productData.product_details.product_images;
  return (
    <div className='mt-5 lg:w-9/12 md:w-9/12 w-full  mx-auto flex justify-center items-center '>
    <div className='w-full grid md:flex lg:flex sm:w-full shadow p-5 rounded shadow-green-400'>
        <SelectImage detailImage={detailImage}/>
        <SelectDetails productData={productData} />
    </div>
</div>
  )
}

export default ProductDetail
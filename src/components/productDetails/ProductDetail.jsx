import SelectImage from './SelectImage'
import SelectDetails from './SelectDetails'

const ProductDetail = () => {
  return (
    <div className='mt-5 lg:w-9/12 md:w-9/12 w-full  mx-auto flex justify-center items-center '>
    <div className='w-full grid md:flex lg:flex sm:w-full shadow p-5 rounded shadow-green-400'>
        <SelectImage />
        <SelectDetails />
    </div>
</div>
  )
}

export default ProductDetail
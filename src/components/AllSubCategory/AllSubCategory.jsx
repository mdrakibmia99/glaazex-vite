
import { allProductData } from '../../database/productsData';
import { useParams } from 'react-router-dom';
import ProductCart from '../products/ProductCart';

const AllSubCategory = () => {
    allProductData
    const { subCat } = useParams()
    const filterData = allProductData.filter(product => product.product_category.toLowerCase() === subCat.toLowerCase())

    return (
        <div className='container my-5 mx-auto '>
           <h1 className='text-xl mx-5'>Subcategory: <span className='uppercase font-bold text-[#314C3D]'>{subCat}</span> </h1> <br />
           <p className='text-lg mb-3 mx-5'><span className='font-bold text-xl text-[#314C3D]'>{filterData.length}</span> Result Found</p>
            <div className=' grid gap-2 grid-cols-2 place-content-around md:grid-cols-3 lg:grid-cols-5'>
                {/* product card use for product img and name show */}
                {
                    filterData.map((product,index) => (
                       
                            <ProductCart key={index} product={product} />
                        
                    ))
                }
            </div>
        </div>
    )
}

export default AllSubCategory
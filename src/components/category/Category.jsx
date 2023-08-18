import { Link } from "react-router-dom"
import { categories } from "../../database/productsData"
const Category = () => {
    return (
        <div className="container mx-auto">
            <h1 className='text-2xl font-bold mt-5'>
                Categories
            </h1>
            
           
         <div className='container mx-auto m-[5px]'>
         <div className="flex flex-wrap justify-center  gap-1 my-2 mx-auto w-[99%] ">
                {
                    categories.map((categoric,index) =>{
                      return (
                        <Link key={index} to={`/allProducts/${categoric.product_name}`}  className="flex flex-col hover:shadow-md p-3 items-center mx-auto justify-center  bg-[#ffffff] w-[110px] h-[110px] lg:w-[130px] lg:h-[130px]  text-dark rounded border-solid border-2 border-[#d5e4db] no-underline whitespace-nowrap">
                        <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
                            <img
                             src={categoric.img}
                             className="w-full" />
                        </div>

                       <h6 className="text-[0.8rem] whitespace-pre-wrap text-center mt-1 ">{categoric.product_name}</h6>
                
                    </Link>
                      )
                    })
                }
                
                {/* <a className="flex flex-col items-center mx-auto justify-center  bg-[#ffffff] w-[130px] h-[130px] text-dark rounded border-solid border-2 border-[#d5e4db] no-underline">
                    <div className="max-w-[80px] max-h-[80px]">
                        <Image
                         src="/images/babyItem.png"
                         className="w-full"
                         width={50}
                         height={50} />
                    </div>
                    <h6 className="">Lip Care </h6>
                </a>
                 */}
            </div>
         </div>
        </div>
    )
}

export default Category
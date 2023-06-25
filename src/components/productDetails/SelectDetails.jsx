/* eslint-disable react/prop-types */
import QuantityTable from "./QuantityTable"


const SelectDetails = ({productData}) => {
  // const total_qty=productData.color_qty.map(items=> )
  const quantities = productData.color_qty.map(item => item.qty);
  const total = quantities.reduce((acc, curr) => acc + curr, 0);
  const qtyTableData=productData.color_qty;
  

  return (
    <div className='w-full md:w-7/12 lg:w-7/12'>
      <h2 className="font-bold text-2xl">{productData?.product_title}</h2>
       <p className="text-5xl font-bold text-[#314C3D] mt-3 relative">{productData.price} <span className="text-sm absolute">TK</span></p>
      <div className="flex items-center my-5">
        <button
         className={`${productData.stock? 'bg-[#314C3D] ':'bg-warning'} text-white p-2 rounded-xl mr-3`}
         >{productData.stock? 'IN Stock':'Out Stock'}</button>
        <p>Quantity: <span className="font-bold">{total}</span> </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl ">Overview:</h3>
        <p className="text-md mt-2 mb-5">{productData.product_details.overview}</p>
      </div>

      <QuantityTable  qtyTableData={qtyTableData}/>
     

    </div>
  )
}

export default SelectDetails
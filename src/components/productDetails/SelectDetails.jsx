import QuantityTable from "./QuantityTable"


const SelectDetails = () => {
  return (
    <div className='w-full md:w-7/12 lg:w-7/12'>
      <h2 className="font-bold text-2xl">Product Name</h2>
      <div className="flex items-center my-5">
        <button className='bg-green-300 p-2 rounded-xl mr-3'>in stock</button>
        <p>Quantity: <span className="font-bold">125</span> </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl ">Overview:</h3>
        <p className="text-md mt-2 mb-5">Beatty glazed lipsticks</p>
      </div>

      <QuantityTable />
     

    </div>
  )
}

export default SelectDetails
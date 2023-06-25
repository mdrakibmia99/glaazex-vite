/* eslint-disable react/prop-types */
import SelectQuantity from "./SelectQuantity"


const QuantityTable = ({qtyTableData}) => {
    console.log(qtyTableData,"qtyTableData")
    return (
        <div className="overflow-x-auto max-h-[300px]">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-1 py-3 lg:px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Color</th>
                        <th className="px-1 py-3 lg:px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-1 lg:px-6 text-center py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">Select Quantity</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">

                    {qtyTableData &&
                    qtyTableData.map((data,index)=>(
                      <>
                      <tr key={index}>
                        <td className="px-1 lg:px-6 text-center py-4 whitespace-nowrap">{data.color}</td>
                        <td className="px-1 lg:px-6 text-center py-4 whitespace-nowrap">{data.qty}</td>
                        <td className="px-1 lg:px-6 text-center py-4 whitespace-nowrap flex justify-center">
                            <SelectQuantity qty={data.qty}/>
                        </td>
                    </tr>
                      </>  
                    ))

                    }
                   
                </tbody>
            </table>
        </div>




    )
}

export default QuantityTable
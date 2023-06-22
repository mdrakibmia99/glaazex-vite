import SelectQuantity from "./SelectQuantity"


const QuantityTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-1 py-3 lg:px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Color</th>
                        <th className="px-1 py-3 lg:px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-1 lg:px-6 text-center py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">Select Quantity</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-1 lg:px-6 text-center py-4 whitespace-nowrap">Red</td>
                        <td className="px-1 lg:px-6 text-center py-4 whitespace-nowrap">10</td>
                        <td className="px-1 lg:px-6 text-center py-4 whitespace-nowrap flex justify-center">
                            <SelectQuantity />
                        </td>
                    </tr>
                    {/* ... Add more table rows as needed */}
                </tbody>
            </table>
        </div>




        // <div>
        //     <div className="overflow-x-auto h-96">
        //         <table className="table table-pin-rows">
        //             {/* head */}
        //             <thead>
        //                 <tr>
        //                     <th>Color</th>
        //                     <th>Quantity</th>
        //                     <th>Select Quantity</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {/* row  */}
        //                 <tr>
        //                     <th>Red</th>
        //                     <td>125</td>
        //                     <td>
        //                         <SelectQuantity />
        //                     </td>

        //                 </tr>
        //                 {/* row  */}
        //                 <tr>
        //                     <th>Red</th>
        //                     <td>125</td>
        //                     <td>
        //                         <SelectQuantity />
        //                     </td>

        //                 </tr>
        //                 {/* row  */}
        //                 <tr>
        //                     <th>Red</th>
        //                     <td>125</td>
        //                     <td>
        //                         <SelectQuantity />
        //                     </td>

        //                 </tr>
        //                 {/* row  */}
        //                 <tr>
        //                     <th>Red</th>
        //                     <td>125</td>
        //                     <td>
        //                         <SelectQuantity />
        //                     </td>

        //                 </tr>
        //                 {/* row  */}
        //                 <tr>
        //                     <th>Red</th>
        //                     <td>125</td>
        //                     <td>
        //                         <SelectQuantity />
        //                     </td>

        //                 </tr>
        //                 {/* row  */}
        //                 <tr>
        //                     <th>Red</th>
        //                     <td>125</td>
        //                     <td>
        //                         <SelectQuantity />
        //                     </td>

        //                 </tr>
        //                 {/* row  */}
        //                 <tr>
        //                     <th>Red</th>
        //                     <td>125</td>
        //                     <td>
        //                         <SelectQuantity />
        //                     </td>

        //                 </tr>
        //                 {/* row  */}
        //                 <tr>
        //                     <th>Red</th>
        //                     <td>125</td>
        //                     <td>
        //                         <SelectQuantity />
        //                     </td>

        //                 </tr>
        //                 {/* row  */}
        //                 <tr>
        //                     <th>Red</th>
        //                     <td>125</td>
        //                     <td>
        //                         <SelectQuantity />
        //                     </td>

        //                 </tr>
        //                 {/* row  */}
        //                 <tr>
        //                     <th>Red</th>
        //                     <td>125</td>
        //                     <td>
        //                         <SelectQuantity />
        //                     </td>

        //                 </tr>

        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    )
}

export default QuantityTable
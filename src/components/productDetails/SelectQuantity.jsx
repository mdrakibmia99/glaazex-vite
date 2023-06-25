/* eslint-disable react/prop-types */
import { useState } from "react";

const SelectQuantity = ({qty}) => {
    const [count, setCount] = useState(0);
   const handleIncrement=()=>{
     if(count<qty){
        setCount(prev=> prev+1)
    }
    console.log(count,"inc")
   }
   const handleDecrement=()=>{
    if(count>0){
        setCount(prev=> prev - 1)
        console.log(count,"dec")
     }
   }

    return (
        <div className="flex items-center">
            <button
                className="bg-gray-200 text-gray-800 rounded-l px-4 py-2"
                onClick={handleDecrement }
            >
                -
            </button>
            <span className="bg-gray-200 text-gray-800 px-4 py-2">{count}</span>
            <button
                className="bg-gray-200 text-gray-800 rounded-r px-4 py-2"
                onClick={handleIncrement}
            >
                +
            </button>
        </div>
    )
}

export default SelectQuantity
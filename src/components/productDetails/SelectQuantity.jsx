import { useState } from "react";

const SelectQuantity = () => {
    const [count, setCount] = useState(0);


    return (
        <div className="flex items-center">
            <button
                className="bg-gray-200 text-gray-800 rounded-l px-4 py-2"
                onClick={() => setCount(count - 1)}
            >
                -
            </button>
            <span className="bg-gray-200 text-gray-800 px-4 py-2">{count}</span>
            <button
                className="bg-gray-200 text-gray-800 rounded-r px-4 py-2"
                onClick={() => setCount(count + 1)}
            >
                +
            </button>
        </div>
    )
}

export default SelectQuantity
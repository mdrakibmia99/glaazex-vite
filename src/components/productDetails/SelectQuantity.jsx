/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartItemsLocalStore";

const SelectQuantity = ({ data ,CartData}) => {
    const [count, setCount] = useState(0);
    const { addItems, setAddItems, setCountItem } = useContext(CartContext)
    const handleIncrement = () => {
        if (count < data.qty) {
            setCount(prev => prev + 1)
            setCountItem(prev => prev + 1)
            const findItem = addItems.filter(item =>item.color !== data.color)
            setAddItems([...findItem, { qty: count + 1, color: data.color ,id:CartData.id,price:CartData.price,product_image:CartData.product_image,product_title:CartData.product_title}])
           

        }

    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(prev => prev - 1)
            setCountItem(prev => prev - 1)
            if(count>1){

                const findItem = addItems.filter(item => item.color !== data.color )
                setAddItems([...findItem, { qty: count - 1, color: data.color ,id:CartData.id,price:CartData.price,product_image:CartData.product_image, product_title:CartData.product_title}])
            }else{
                const findItem = addItems.filter(item => item.color !== data.color )
                setAddItems([...findItem])

            }
        }
    }

    return (
        <div className="flex items-center">
            <button
                className="bg-gray-200 text-gray-800 rounded-l px-4 py-2"
                onClick={handleDecrement}
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
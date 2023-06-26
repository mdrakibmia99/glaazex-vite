import { createContext, useState } from "react";

export const CartContext = createContext();


// eslint-disable-next-line react/prop-types
const AddCartContext = ({ children }) => {
    const [addItems, setAddItems] = useState([])
    const [countItem, setCountItem] = useState(0)
    
   



    const CartInfo = {
        addItems, setAddItems,
        countItem, setCountItem
   

    }



    return (
        <CartContext.Provider value={CartInfo}>

            {children}
        </CartContext.Provider>
    )
}

export default AddCartContext
import { createContext, useState } from "react";
import { commerce } from '../lib/commerce';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState()

    const cartHelperFunctions = {

        deleteItem: (lineItemId) => {
            commerce.cart.remove(lineItemId)
                .then(res => {
                    setCart(res.cart)
                })
        },
        addQaunity: (lineItemId, newQuanity) => {
            commerce.cart.update(lineItemId, { quantity: newQuanity })
                .then(res => {
                    setCart(res.cart)

                })
        },
        subtractQuanity: (lineItemId, newQuanity) => {

            if (newQuanity === 0) {
                cartHelperFunctions.deleteItem(lineItemId)
            } else {
                commerce.cart.update(lineItemId, { quantity: newQuanity })
                    .then(res => {
                        setCart(res.cart)
                    })
            }

        }
    }
    console.log(cartHelperFunctions)

    const data = {
        cartHelperFunctions,
        cart, 
        setCart
    }

    return (
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext
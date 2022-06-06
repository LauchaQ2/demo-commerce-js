import React, { useContext } from 'react'
import CartContext from '../../context/cartContext'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartTable from '../CartTable/CartTable'


const Cart = () => {

    const {cart, setCart} = useContext(CartContext)


  return (
    <div>{cart && cart.total_unique_items > 0 ? (
        <>
        <CartTable cart={cart}/>
        </>
    ) :
        (

            <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Carrito vacío
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Andá a comprar, dale
                </Typography>
            </Box>

        )}</div>
  )
}

export default Cart
import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import CartContext from '../../context/cartContext'
import './CartItem.css'

const CartItems = ({ item }) => {
  console.log(item)
  const { cartHelperFunctions } = useContext(CartContext)

  return (
    <div className='container-fluid'>
      <div className='row d-flex'>
        <div className='col-4'>
          <p>Nombre: {item.name}</p>
        </div>
        <div className='col-5'>
          <div className='btn-group'>
            <Button onClick={() => {
              let newQuanity = item.quantity - 1
              cartHelperFunctions.subtractQuanity(item.id, newQuanity)
            }} className='substract-btn'>-</Button>
            <TextField className='quantity-input' value={item.quantity}></TextField>
            <Button onClick={() => {
              let newQuanity = item.quantity + 1
              cartHelperFunctions.addQaunity(item.id, newQuanity)
            }} className='add-btn'>+</Button>
          </div>
        </div>
        <div className='col-3'>
          <p>Tamaño: {item.selected_options[0].option_name}</p>

        </div>
      </div>
    </div>
      

  )
}

export default CartItems;
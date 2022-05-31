import React from 'react'
import "./CartIcon.css"

const CartIcon = ({cart, handleOpen}) => {
    console.log(cart)
  return (
      <div className='cart-icon'>
      {cart && cart.total_unique_items > 0
        ?
    <button onClick={handleOpen} className='total-items green'>{cart.total_items}</button>
    :
    <button onClick={handleOpen} className='total-items red'>0</button>
    }
    </div>
    )
}

export default CartIcon
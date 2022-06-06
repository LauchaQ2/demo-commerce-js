import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from '../../pages/ProductPage'
import Cart from '../Cart/Cart'
import { commerce } from '../../lib/commerce';
import NavBar from '../NavBar/NavBar';
import CartContext, {CartProvider} from '../../context/cartContext'


const AppRouter = () => {

    const { cart, setCart} = useContext(CartContext)


    const emptyCart = () => {
      commerce.cart.empty().then((response) => {
        setCart(null)
      });
    }
  
   

  return (
    <>
        <BrowserRouter>
        <NavBar emptyCart={emptyCart} cart={cart} />
        <Routes>
            <Route index path='/' element={<ProductPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter
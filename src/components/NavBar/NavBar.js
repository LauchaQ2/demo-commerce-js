import React, {useState} from 'react'
import CartIcon from '../CartIcon/CartIcon'
import CartModal from '../CartModal/CartModal'
import "./NavBar.css"

const NavBar = ({cart,emptyCart}) => {

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='container-flu'>
        NAVBAR
        <CartIcon handleOpen={handleOpen} cart={cart}/>
        <CartModal cart={cart} emptyCart={emptyCart} open={open} handleOpen={handleOpen} handleClose={handleClose}/>
    </div>
  )
}

export default NavBar
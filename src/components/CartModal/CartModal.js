import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CartItems from '../CartItems/CartItems'
import { Link } from 'react-router-dom';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CartModal({ cart, open, emptyCart, handleClose }) {

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {cart && cart.total_unique_items > 0 ? (
                    <>
                    <Box sx={style}>
                        {cart.line_items.map((item)=>{
                            return(<CartItems key={item.id} item={item}/>)
                        })}
                        <Button variant="contained" color="success" onClick={emptyCart}>VACIAR CARRITO</Button>
                        <Link to={'/cart'}>
                            <Button variant="contained" color="primary">IR A CARRITO</Button>
                        </Link>
                    </Box>
                    </>
                ) :
                    (

                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Carrito vacío
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Andá a comprar, dale
                            </Typography>
                        </Box>

                    )}
            </Modal>
        </>

    );
}

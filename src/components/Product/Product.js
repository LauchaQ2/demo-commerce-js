import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Product.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { commerce } from '../../lib/commerce';
import { Button } from '@mui/material';


const Product = ({ product, addToCart }) => {

    const [sizes, setSizes] = useState([])
    const [variantGroupID, setVariantGroupID] = useState([])
    const [variantID, setVariantID] = useState()
    const [variantSelected, setVariantSelected] = useState("")
    const [variantInfo, setVariantInfo] = useState()
    const [sizeSel, setSizeSel] = useState("")


    useEffect(() => {

        let finalSizeArray = product.variant_groups[0].options.map(option => {
            let sizeInfo = {}

            sizeInfo.key = option.name
            sizeInfo.value = option.name
            sizeInfo.id = option.id

            return sizeInfo
        })

        setSizes(finalSizeArray)
    }, [])


    useEffect(() => {
        setVariantGroupID(product.variant_groups[0].id)
    }, []);
    
    useEffect(() => {
        setVariantInfo({ [variantGroupID]: variantID })
    }, [variantID])
    


    const handleSize = (e) => {
        setSizeSel(e.target.value)
    }
    const handleID = (e) => {
        setVariantID(e.target.id)
    }


    // setSizeSel(e.target.value)
    // 


    

    const handleButtonAddCart = e => {
        e.preventDefault()
        addToCart(product.id, variantInfo)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (


        <><Card className='card-product'>
            <CardMedia
                className='img-product'
                component="img"
                height="200"
                image={product.image.url}
                alt="green iguana" />
            <CardContent className='card-content'>
                <Typography gutterBottom className='cbold title' variant="h5" component="h5">
                    {product.name}
                </Typography>
                <Typography className='cbold price' variant="body2" color="text.secondary">
                    <Select
                        label="Age"
                        value={sizeSel}
                        onChange={handleSize}
                    >
                        {sizes.map(size => {
                            return <MenuItem onClick={handleID} value={size.value} key={size.id} id={size.id}>{size.value}</MenuItem>
                        })}
                    </Select>
                </Typography>
            </CardContent>
            <CardContent className='card-content'>
                <Button variant="contained" color="success" className='add-button' onClick={handleButtonAddCart}>
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
        </>
    )
}

export default Product



/*
{product.variants_groups.options.map(option=>{
            return(
                <MenuItem>{option}</MenuItem>
            )
        })}
        */
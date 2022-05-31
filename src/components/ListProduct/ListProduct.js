import { Button } from '@mui/material'
import React from 'react'
import Product from '../Product/Product'
import './ListProduct.css'

const ListProduct = ({ products, categories, addToCart, setActiveCategory }) => {

    return (
        <>
            <div className='list-buttons'>
                <h1>CATEGORÍAS</h1>
                <Button variant="contained" onClick={() => setActiveCategory("all")}>TODOS</Button>
                {categories === undefined || categories === null
                    ?
                    null :
                    categories.map(category => {
                        return <Button variant="contained" onClick={() => setActiveCategory(category.name)}>{category.name}</Button>
                    })
                }
            </div>
            <h1>PRODUCTOS</h1>
            <div className="list-container">
                {products.map(product => {
                    return <Product addToCart={addToCart} key={product.id} product={product} />
                })}
            </div>
        </>
    )
}

export default ListProduct
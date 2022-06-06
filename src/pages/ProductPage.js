import React, { useContext, useEffect, useState } from 'react'
import ListProduct from '../components/ListProduct/ListProduct'
import CartContext, {CartProvider} from '../context/cartContext'
import { commerce } from '../lib/commerce';


const ProductPage = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState()
    const [activeCategory, setActiveCategory] = useState('all')
  
    const { cart, setCart} = useContext(CartContext)
  
    const fetchProducts = async () => {
      const { data } = await commerce.products.list()
      setProducts(data.filter((data) => (activeCategory === 'all') ? data : data.categories[0].name === activeCategory))
    }
    const fetchCategories = async () => {
      const { data } = await commerce.categories.list()
      setCategories(data)
    }
  
    useEffect(() => {
      commerce.cart.retrieve()
        .then(res => {
          setCart(res)
          console.log(cart)
        })
    }, [])
  
    useEffect(() => {
      fetchProducts();
      fetchCategories();
    }, [activeCategory])
  
  
  
    console.log("PRODUCTOS: ",products)
    console.log("CATEGORIAS: ",categories)
  
  
    const addToCart = (productId, variantInfo) => {
  
      if (variantInfo) {
        commerce.cart.add(productId, 1, variantInfo)
          .then(res => {
            setCart(res.cart)
            alert("PRODUCTO AÑADIDO AL CARRITO")
            console.log(cart)
          })
      } else {
        alert('Please Select a Shirt Size')
      }
    }

  return (
    <>
        <ListProduct setActiveCategory={setActiveCategory} categories={categories} addToCart={addToCart} products={products}/>
    </>
  )
}

export default ProductPage
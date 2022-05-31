import logo from './logo.svg';
import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { commerce } from './lib/commerce';
import ListProduct from './components/ListProduct/ListProduct';
import NavBar from './components/NavBar/NavBar';
import CartContext, {CartProvider} from './context/cartContext'

function App() {
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

  const emptyCart = () => {
    commerce.cart.empty().then((response) => {
      setCart(null)
    });
  }

  console.log(activeCategory)


  // FUNCIONES DE CARRITO

 

  return (
    <div className="App">
      <NavBar emptyCart={emptyCart} cart={cart} />
      <ListProduct setActiveCategory={setActiveCategory} categories={categories} addToCart={addToCart} products={products} />
    </div>
  );
}

export default App;

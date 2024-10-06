import {useEffect, useState} from 'react'
import './App.css'
import Product from "./product/Product.jsx";

function App() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products')
                const data = await response.json()
                console.log(data)
                setProducts(data.products)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching the products:", error);
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <>LOADING...</>
        )
    }
  return (
      <div>
          <h1>Product List</h1>
          <div style={productListStyle}>
              {products.map((product) => (
                  <Product key={product.id} product={product}/>
              ))}
          </div>
      </div>
  )
}

const productListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
};

export default App

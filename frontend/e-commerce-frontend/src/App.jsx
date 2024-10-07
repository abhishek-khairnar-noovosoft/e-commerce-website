import {useEffect, useState} from 'react'
import './App.css'
import Navbar from "./navigation/Navbar.jsx";

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
          <Navbar/>
      </div>
  )
}


export default App

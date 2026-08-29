import axios from 'axios'
import  { useEffect, useState } from 'react'
import type { Product } from './types'
import ProductCard from './components/ProductCard'


const App = () => {

const [products, setProducts] = useState<Product[]>([])

  let getData = async ()=>{
    let res = await axios.get("https://fakestoreapi.com/products")
   console.log(res)
   setProducts(res.data)
   
    
  }
   useEffect(() => {
      getData()
    }, [])


  return (
    <div>
      {
      products.map((val)=>(
        <ProductCard key={val.id} product={val}/>
      ))
      }
    </div>

  )
}

export default App
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'

const App = () => {
  let limit = 10


const [Products, setProducts] = useState(null)
const [Page, setPage] = useState(0)

  const getAllproducts = async()=>{
    try {
      console.log("api calling")
        let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${Page * limit}`)
        setProducts(res.data)
        
    } catch (error) {
        console.log("Error in api " ,error)
    }
}

let totalPages = Math.ceil( Products?.total / limit) 


useEffect(()=>{
  getAllproducts()
},[Page])


  return (
     <div className="flex flex-col items-center gap-6">
    <div className={"grid w-full p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"}>
      {Products?.products.map((val)=>{
        return <ProductCard key={val.id} product={val}/> }
      )
     }
    
    </div>
    <div className='flex gap-5 p-5'>
      <button
      disabled={Page === 0}
       onClick={()=> setPage(Page - 1)} className='p-4 bg-red-700 text-white rounded-xl'>Previous</button>
      <p
       className='flex items-center'

       >Page {Page + 1} of {totalPages}
       </p>
      <button
      disabled={Page >= totalPages - 1 }
      onClick={()=> setPage(Page + 1)} className='p-4 bg-red-700 text-white rounded-xl'>Next</button>
     </div>
   </div>
  )
}

export default App

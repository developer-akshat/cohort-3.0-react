import { keepPreviousData, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getAllproducts } from './api/ProductAPI'
import ProductCard from './components/ProductCard'

const TanStack = () => {
  let limit = 10 
   const [Page, setPage] = useState(0)
    let {data ,isPending, isError ,isPlaceholderData} = useQuery({
        queryKey:['products',Page],
        queryFn: () => getAllproducts(limit,Page),
        placeholderData : keepPreviousData

    })
  if(isPending) return "Loading..."
  if(isError) return "Something went wrong"

  console.log(data)


  let totalPages = Math.ceil(data.total / limit)

  return (
     <div className="flex flex-col items-center gap-6">
    <div
    style={{opacity:isPlaceholderData ? 0.3 : 1}}
     className={"grid w-full p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"}>
      {data?.products.map((val)=>{
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

export default TanStack

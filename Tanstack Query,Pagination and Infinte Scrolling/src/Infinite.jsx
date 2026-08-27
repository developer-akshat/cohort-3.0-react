import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllproducts } from './api/ProductAPI'
import ProductCard from './components/ProductCard';


const Infinite = () => {

    let limit = 40 ;
  let {data,isPending, fetchNextPage,hasNextPage,isFetchingNextPage} = useInfiniteQuery({
    queryKey: ["products"],
    queryFn:({pageParam})=> getAllproducts(limit,pageParam),
    initialPageParam:0,
    getNextPageParam: (lastPage,allPage)=> {
       let loadedData = allPage.length * limit
       if(loadedData < lastPage.total)
        return loadedData
    return undefined
    }
  })

  if(isPending)  return "Loading..."

  console.log(
  )

  let allProducts = data?.pages?.flatMap((val)=>val.products) ?? []
  return (
     <div className="flex flex-col items-center gap-6">
    <div
     className={"grid w-full p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"}>
      {
        allProducts.map((val)=>{
          return  <ProductCard key={val.id} product={val}
             />
            }
        )
      }
    </div>
    {
        hasNextPage && 
        <button onClick={()=> fetchNextPage()} className='p-5'>{isFetchingNextPage?"Loading...":"Load more"}</button>
    }
    </div>
  )
}
export default Infinite

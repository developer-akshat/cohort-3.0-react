import React from 'react'
import { useState } from "react";

const App = () => {
  const  [count, setcount] = useState(0)
  return (
    

    <div className="h-50 bg-blue-800 w-100 flex flex-col 
    items-center justify-center gap-5 
    ">
      
      <h1 className="text-2xl font-semibold">Your Count is {count}</h1>
      <button onClick={()=>{setcount(count+1)}} className="px-2 py-3 bg-red-400 rounded-xl">Counter</button>
    </div>
  )
}

export default App

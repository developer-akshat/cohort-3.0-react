import React from 'react'
import {useState,useEffect} from 'react'
import axios from "axios"
const App = () => {
  // Debouncing
  const [productsData, setproductsData] = useState([])
  const [searchData, setsearchData] = useState(null)
  const [ScrollY, setScrollY] = useState(null)

  let throttle = false

  let products = async () => {
    let res = await axios.get("https://fakestoreapi.com/products")
    setproductsData(res.data)
  }
  
  let filteredData = ()=>{
    console.log("filter is running...")
    let result = productsData.filter((val)=>{
      return val.title.toLowerCase().includes(searchData.toLowerCase()) 
    });
    setproductsData(result)
  }
  useEffect(() => {
      if(!searchData) return
    let timeout = setTimeout(() => {
      filteredData()
    }, 700);
     return ()=> clearTimeout(timeout) // it run when new value come and old go
  }, [searchData])
  

  useEffect(() => {
  
    products()
  }, [])
  
  // Throttling

  useEffect(() => {
    let handelScroll = ()=>{
        if (throttle) return

       throttle = true
      
      console.log("scroll triggered...")
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle = false
      }, 5000);
    }
    window.addEventListener('scroll',handelScroll)

    return ()=> window.removeEventListener("scroll",handelScroll)
  }, [])
  
  
  return (
    <div>
      <h1>Debouncing</h1>
      <input
      style={{padding:"10px"}}
       type="text" placeholder="Search Products" 
      onChange={(e)=>{
        setsearchData(e.target.value)

      }}
       />
      {
        productsData.map((val)=>{
            return <h1 key={val.id} >{val.title}</h1>
        })
      }
    </div>
  )
}

export default App
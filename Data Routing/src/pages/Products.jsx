import React from "react";
import axios from 'axios'
import { useState } from 'react'
import {useEffect} from 'react'

const Products = () => {
  const [productsData, setproductsData] = useState([])

  const [Category, setCategory] = useState("all")

  useEffect(() => {
    const product = async () => {
   try {
    let res =  await axios.get('https://fakestoreapi.com/products')
    setproductsData(res.data)
   } catch (error) {
    console.log(error)
   }
  }
  product()
  }, [])
 
  
  
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Products
        </h1>

        <p className="text-gray-500 mt-2">
          Discover our latest products and find something you love.
        </p>
      </div>


      {/* Search & Filter UI */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row gap-4 justify-between">

        {/* Search */}
        <div className="w-full md:w-96">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <select
          className="px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          value={Category}
          onChange={(e)=> setCategory(e.target.value)
          }
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewellery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

      </div>


      {/* Products Grid */}
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            productsData.filter((product)=>
            Category === "all" ? true :
          product.category === Category
        ).map((product) => (

    <div
      key={product.id}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition"
    >

      {/* Product Image */}
      <div className="h-56 bg-gray-100 flex items-center justify-center p-5">

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />

      </div>


      {/* Product Details */}
      <div className="p-5">

        <p className="text-sm text-blue-600 font-medium capitalize">
          {product.category}
        </p>

        <h2 className="text-lg font-semibold text-gray-900 mt-2 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>


        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">

          <span className="text-yellow-500">
            ★
          </span>

          <span className="text-sm text-gray-600">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-400">
            ({product.rating.count})
          </span>

        </div>


        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">

          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>

        </div>

      </div>

    </div>

  ))}

</div>

</div>
           
  );
};

export default Products;
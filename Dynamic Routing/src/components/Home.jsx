import React from 'react'
import axios from 'axios'
import {useEffect} from 'react'
const Home = () => {
    // const [Products, setProducts] = useState([])
   let product = async () => {
    try {
        let res = await axios.get("https://fakestoreapi.com/products")
        console.log(res)
    } catch (error) {
        console.log(`API error ${error}`)
    }
   }
    
   useEffect(() => {
     product()
   }, [])
   

  return (
    <div className="grid grid-cols-4">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">

    {/* Image */}
    <div className="relative bg-gray-100 h-64 flex items-center justify-center p-6">

        <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full capitalize">
            {product.category}
        </span>

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition">
            ❤️
        </button>

        <img
            src={product.image}
            alt={product.title}
            className="h-48 object-contain group-hover:scale-110 transition duration-300"
        />
    </div>

    {/* Content */}
    <div className="p-5">

        <h2 className="text-lg font-semibold line-clamp-2 text-gray-800">
            {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">

            <div className="flex items-center gap-2">

                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                    ⭐ {product.rating?.rate}
                </span>

                <span className="text-gray-500 text-sm">
                    ({product.rating?.count})
                </span>

            </div>

            <span className="text-xs text-gray-400 uppercase">
                {product.category}
            </span>

        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-5">

            <h3 className="text-2xl font-bold text-indigo-600">
                ${product.price}
            </h3>

            <span className="text-green-600 text-sm font-medium">
                In Stock
            </span>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

            <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition font-medium">
                Add to Cart
            </button>

            <button className="flex-1 border border-indigo-600 text-indigo-600 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition font-medium">
                View
            </button>

        </div>

    </div>

</div>

    </div>
  )
}

export default Home

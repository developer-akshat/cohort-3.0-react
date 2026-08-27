import React from 'react'

const ProductCard = ({product}) => {
  return (
       <div className="w-full max-w-sm bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">

      {/* Product Image */}
      <div className="h-56 bg-gray-50 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-6"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col">

        {/* Brand */}
        <p className="text-sm text-gray-500">
          {product.brand}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 mt-1 line-clamp-1">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-600">
            ⭐ {product.rating}
          </span>

          <span className="text-sm text-green-600">
            {product.availabilityStatus}
          </span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-gray-900 mt-3">
          ${product.price}
        </p>

        {/* Add to Cart */}
        <button
          className="w-full mt-5 bg-black text-white py-3 rounded-lg
                     hover:bg-gray-800 transition duration-200"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};



export default ProductCard
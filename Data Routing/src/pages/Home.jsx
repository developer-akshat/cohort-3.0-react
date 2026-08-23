import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  const categories = [
    "Electronics",
    "Jewellery",
    "Men's Clothing",
    "Women's Clothing",
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <p className="text-blue-200 font-semibold mb-3">
              WELCOME TO MYSTORE
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Everything You Need,
              <br />
              All in One Place.
            </h1>

            <p className="mt-5 text-blue-100 text-lg max-w-lg">
              Discover quality products at amazing prices.
              Browse our collection and find something you'll love.
            </p>

            <NavLink
              to="/products"
              className="inline-block mt-8 bg-white text-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Shop Now →
            </NavLink>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
              alt="Shopping"
              className="w-full max-w-lg h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>


      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Browse Categories
          </h2>

          <p className="text-gray-500 mt-2">
            Find products according to your needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {categories.map((category) => (
            <NavLink
              to="/products"
              key={category}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                {category.charAt(0)}
              </div>

              <h3 className="font-semibold text-gray-800">
                {category}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Explore Products →
              </p>
            </NavLink>
          ))}

        </div>
      </section>


      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>

            <p className="text-gray-500 mt-2">
              Some of our popular products
            </p>
          </div>

          <NavLink
            to="/products"
            className="text-blue-600 font-semibold hover:underline"
          >
            View All →
          </NavLink>
        </div>


        {/* Product Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition"
            >

              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">
                  Product Image
                </span>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">
                  Product Name
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Product description
                </p>

                <div className="flex items-center justify-between mt-4">

                  <span className="text-xl font-bold text-gray-900">
                    ₹999
                  </span>

                  <NavLink
                    to="/products"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                  >
                    View
                  </NavLink>

                </div>
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">

          <h2 className="text-3xl font-bold">
            Ready to Start Shopping?
          </h2>

          <p className="text-gray-400 mt-3">
            Explore our complete collection of products.
          </p>

          <NavLink
            to="/products"
            className="inline-block mt-6 bg-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Products
          </NavLink>

        </div>
      </section>

    </div>
  );
};

export default Home;
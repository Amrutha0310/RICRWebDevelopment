import React from 'react'
import photo from "../assets/foodback.jpg"

const Home = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gray-100">
      
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-950">
          Delicious Food, Delivered Fast
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Order from your favourite restaurants near you
        </p>
        <button className="bg-orange-600 px-6 py-3 rounded-lg text-lg text-white hover:bg-red-700 transition">
          Start Ordering
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img 
          src={photo} 
          alt="Delicious Food" 
          className="rounded-xl w-100 h-100 md:w-100 md:h-100 object-cover shadow-lg"
        />
      </div>

    </div>
  )
}

export default Home

import React from 'react'

const about = () => {
  return (
     <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      {/* Card */}
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        {/* Restaurant Info */}
        <h1 className="text-2xl font-bold text-gray-800">
          Padmavati Bhojanalaye
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Pure Veg • Indian • Thali
        </p>

        <p className="text-sm text-gray-700 mt-2">
          ⭐ 4.3 • 30–35 mins • MP Nagar
        </p>

        <hr className="my-5" />

        {/* Menu */}
        <h2 className="text-xl font-semibold mb-4">Menu</h2>

        {/* Dish Item */}
        <div className="flex justify-between items-center py-3 border-b">
          <div>
            <p className="font-medium">Rajasthani Thali</p>
            <p className="text-sm text-gray-500">₹149</p>
          </div>
          <button className="border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition">
            ADD
          </button>
        </div>

        <div className="flex justify-between items-center py-3 border-b">
          <div>
            <p className="font-medium">Dal Baati Churma</p>
            <p className="text-sm text-gray-500">₹129</p>
          </div>
          <button className="border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition">
            ADD
          </button>
        </div>

        <div className="flex justify-between items-center py-3 border-b">
          <div>
            <p className="font-medium">Special Veg Thali</p>
            <p className="text-sm text-gray-500">₹179</p>
          </div>
          <button className="border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition">
            ADD
          </button>
        </div>

        <div className="flex justify-between items-center py-3">
          <div>
            <p className="font-medium">Paneer Butter Masala</p>
            <p className="text-sm text-gray-500">₹199</p>
          </div>
          <button className="border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
  

export default about
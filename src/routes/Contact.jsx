import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div><Navbar></Navbar>

<div className="bg-gray-200 flex items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-40 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-center text-2xl font-semibold text-black mb-4">Your Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-transparent  placeholder-white focus:outline-none focus:border-gray-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block \">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-transparent  placeholder-white focus:outline-none focus:border-gray-500"
              placeholder="Your Email"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white  py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <Footer></Footer>
    </div>
  )
}

export default Contact
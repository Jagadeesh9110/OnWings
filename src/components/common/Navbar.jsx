import React from 'react'
import { Link } from 'react-router-dom'
import { Send } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="bg-black shadow-md fixed top-0 w-full z-50">
      
      <nav className="h-16 flex items-center justify-between px-8">
        
        <Link to="/" className="text-3xl font-bold text-white flex items-center">
          OnWings
        </Link>
        
        <div className="flex items-center space-x-6">

          <Link to="/" className="text-white font-medium hover:text-secondary transition-colors">
            Luggage
          </Link>
          
          <Link to="/" className="text-white font-medium hover:text-secondary transition-colors">
            Find a Flight
          </Link>
          
          <button className="bg-transparent text-white font-semibold py-2 px-4 rounded-full border border-white hover:text-red-600 hover:border-red-600 transition-all duration-200">
            Log In
          </button>

          <button className="padding-left-0px bg-transparent text-white font-semibold py-2 px-0 rounded-full hover:text-red-600 transition-all duration-200">
            SignUp
          </button>



        </div>
      </nav>
    </header>
  )
}

export default Navbar
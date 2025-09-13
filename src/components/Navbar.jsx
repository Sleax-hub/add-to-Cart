import React from 'react'
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-full bg-slate-100'>
        <nav className='max-w-7xl px-4 mx-auto flex  h-16 items-center justify-between'>
            <h1 className='font-extrabold tracking-wide text-2xl'>CART</h1>
            <ul className='
            flex gap-2 items-center '>
                <li className='font-semibold text-lg hover:border-b-2 border-b-orange-400'>Home</li>
                <li className='font-semibold text-lg hover:border-b-2 border-b-orange-400'>Categories</li>
                <li className='font-semibold text-lg hover:border-b-2 border-b-orange-400'>Overseas</li>
                <li className='font-semibold text-lg hover:border-b-2 border-b-orange-400'>About</li>
            </ul>

            <div>
                <FaShoppingBag className='text-2xl' />
            </div>

        </nav>
      
    </div>
  )
}

export default Navbar

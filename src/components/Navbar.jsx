import React from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-full bg-stone-300 shadow-md/30 h-16 fixed 2-200'>
        <nav className='max-w-7xl px-6 mx-auto flex  h-full items-center justify-between'>
            <h1 className='font-extrabold tracking-wide text-2xl'>CART</h1>
            <ul className='
            flex gap-2 items-center '>
                <li className='font-semibold text-lg hover:border-b-2 border-b-orange-400'>Home</li>
                <li className='font-semibold text-lg hover:border-b-2 border-b-orange-400'>Categories</li>
                <li className='font-semibold text-lg hover:border-b-2 border-b-orange-400'>Overseas</li>
                <li className='font-semibold text-lg hover:border-b-2 border-b-orange-400'>About</li>
            </ul>

            <div className='flex items-center space-x-2'>
              <BiSearchAlt className='text-3xl hover:text-orange-500'/>
                <FaShoppingBag className='text-2xl' />
            </div>

        </nav>
      
    </div>
  )
}

export default Navbar

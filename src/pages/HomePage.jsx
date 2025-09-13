import React from 'react';
import { toast } from 'react-toastify';

const HomePage = () => {
  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 bg-red-200 h-screen text-white flex flex-col items-center justify-center'>
        <h1 className='text-white'>hello home</h1>
        <button onClick={()=>toast.success("hello world",{
          theme: "colored",
          position: "top-center",
          autoClose: 500,
          
        })} className='cursor-pointer border p-2 rounded-full bg-gradient-to-br from-orange-500 to-cyan-500'>JAMBO</button>

      </div>
        
      
    </div>
  );
}

export default HomePage;

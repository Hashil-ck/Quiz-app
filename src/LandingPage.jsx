import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="bg-gradient-to-l from-[#AEF0FA] via-blue-300 to-blue-900 h-screen w-full flex flex-col justify-center items-center  absolute text-center">      
          <h1 className='bg-white text-transparent bg-clip-text  justify-center items-center text-center flex text-5xl md:text-8xl 2xl:text-12xl font-black transition-all duration-1000 ease-in-out hover:bg-gradient-to-r to-blue-400 from-blue-700 hover:tracking-widest  ' ><img className='w-20' src="https://cdn-icons-png.flaticon.com/128/9184/9184638.png" alt="Quiz Game" />Quiz Game</h1>
          <Link className='md:h-14 h-10 w-40 text-2xl rounded-2xl md:w-44 mt-16 md:text-3xl py-2 px-4 transition-all duration-900 ease-in bg-[#0b105e80] hover:bg-[#181b43ef]' to={'/Quiz'}>
          <button className=' bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text font-black  '>Let's Start</button>
         </Link>
    </div>
  )
}

export default LandingPage
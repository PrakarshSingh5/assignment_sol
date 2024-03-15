import React from 'react'


const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        Unlock the Secrets of Journalism with 
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
            {" "}Mr. Arun
        </span>
        </h1>
        <p>
        Welcome to a Journey of Insight and Inspiration
        Are you ready to embark on a transformative journey into the world of journalism?
        Meet Mr. Arun, a seasoned journalist with decades of experience in uncovering stories, igniting conversations, and shaping public discourse. After a rich and fulfilling career, Mr. Arun is ready to pass on his wealth of knowledge to the next generation of aspiring journalists.
        </p>
        <div className='flex mt-10 justify-center'>
            <img className='rounded-lg w-1/2 border border-white-100 shadow-orange-400 mx-2 my-4 ' src='src/assets/1.j.jpg'/>
            <img className='rounded-lg w-1/2 border border-white-100 shadow-orange-400 mx-2 my-4 ' src='src/assets/2.j.jpg'/>
        </div>
    </div>
   
  )
}

export default Hero

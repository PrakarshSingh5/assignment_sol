import React from 'react'
import {learnings} from '../constants'
const Feature = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className='text-center'>
  <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>What You'll 
  <span className='bg-gradient-to-r from-orange-800 text-transparent bg-clip-text'>{" "}Learn</span></h2>
      </div>
        <div className='mt-10 flex flex-wrap lg:mt-20'>
            { learnings.map((learning,index)=>(
                     <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                     <div className="flex">
                        <div>
                         <h5 className="mt-1 mb-6 text-xl">{learning.text}</h5>
                         <p className="text-md p-2 mb-20 text-neutral-500">
                           {learning.description}
                         </p>
                        </div>
                    </div>     
             </div>
                          
            ))}
        </div>
    </div>
  )
}

export default Feature


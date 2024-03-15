import React from 'react'
import {testimonials} from "../constants"

const Testinomial = () => {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-5xl text-center my-10 lg:my-20 lg:text-6xl'>
        What people are saying
      </h2>
      <div className='flex flex-wrap justify-center'>
        { testimonials.map((test,index)=>(
            <div key={index} className='w-full sm:w-1/3 px-4 py-2'>
                <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
                    <p>{test.text}</p>
                    <div className='flex mt-8 items-start'>
                <img className="w-12 h-12 rounded-full border-neutral-300 " src={test.image}/>
                <div>
                  <h6>{test.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {test.company}
                  </span>
                </div>
                    </div>
                    </div>
            </div>
        ))

        }
      </div>
    </div>
  )
}

export default Testinomial

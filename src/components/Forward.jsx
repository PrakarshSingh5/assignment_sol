import React from 'react'

const Forward = () => {
  return (
    <div className='box-border flex flex-col bg-gradient-to-r from-orange-500 to-red-800 rounded-lg'>
      <div>
      <h2 className='text-2xl sm:text-5xl lg:text-6xl'>Our journey so far</h2>
      </div>
      <div className="forwardsec">
        <div className=' font-sans text-center'>
            <h1 className='font-bold text-3xl'>4.8⭐</h1>
            <p>Course ratings</p>
        </div>
        <div className=' font-sans text-center'>
            <h1 className='font-bold first-letter text-3xl'>10000</h1>
            <p>Enrollments</p>
        </div>
        <div className=' font-sans text-center'>
            <h1 className='font-bold text-3xl'>
                150+
            </h1>
            <p>Countries</p>
        </div>
      </div>
    </div>
  )
}

export default Forward

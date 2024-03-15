import React from 'react'
import {CheckCircle2} from 'lucide-react'

function Workflow() {
  return (
    <div className='mt-20'>
    <h1 className='text-3xl text-center mt-6'>Accelerate your Journilism Carrier</h1>
    <div className='flex flex-wrap justify-center'>
        <div className='p-2 w-full lg:w-1/2'>
            <div className='p-20'>
            <div class="card">
              <div>
                <div>
                  <img
                    class="course-thumbnail"
                    src='https://online.sbu.edu/sites/default/files/field/image/shutterstock_430087837.jpg'
                    alt="Course Thumbnail" />
                </div>
                <div >
                  <div>
                    <p class="card-level text-bold">
                      BEGINNER TO ADVANCED 🔥🔥🔥
                    </p>
                    <h3 class="course-title">
                      Journalism Unveiled BootCamp
                    </h3>
                  </div>
                  
                  <div className="line mb-2"></div>
                  <div className='flex place-content-between'>
                  <div className="course-price-section text-bold">
                    <p className="final-price">₹699</p>
                    <p className="prev-price">₹1499</p>
                    <p className="discount-percent">60% off</p>
                  </div>
                  <div><p className='buy_now'>Buy Now</p></div>
                  </div>
                 
                </div>
              </div>
            </div>
            </div>
           
     </div>
        <div className='pt-12 w-full lg:w-1/2'>
          <div className='flex mt-11 text-2xl flex-col'>
                  <div>
                  <h1 className='font-medium text-3xl '> Join Us Today:</h1>
                  <p className='text-neutral-500'>Don't miss this opportunity to learn from the best in the field. Whether you're a budding journalist or a seasoned writer looking to sharpen your skills, Mr. Arun's course is your gateway to success in the world of journalism.</p>
                  </div>
                  <div className='mt-5'>
                    <h3 className='mt-5 font-medium'>Course Details:</h3>
                   <h4 className='mt-5'>Duration : <span> 2 Weeks</span></h4>
                    <h4 className='mt-5'>Format : <span>Online Session</span></h4>
                  </div>
          </div>
          
        </div>
    </div>
    </div>
  )
}

export default Workflow

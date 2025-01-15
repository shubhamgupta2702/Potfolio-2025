import React from 'react'
import { EcommerceImage, Project1Heading, Project2Description } from '../Constants/Constants.js';

function ProjectCard() {
  return (
    <>
      <div>
            <div className='flex flex-auto mx-44 p-14 mb-8 items-center justify-center  lg:justify-center border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
              <div className='w-1/2'>
              <img src={EcommerceImage} className=' rounded-lg' alt="" />

              </div>
              <div 
              className='pl-4 text-white w-full max-w-xl lg:w-3/4'
              >
                <h3 className='mb-2 font-semibold text-2xl'>{Project1Heading} </h3>
                <p className='mb-4 text-white'>{Project2Description}</p>
                
               
                <span className='mr-2 rounded bg-orange-900 p-2 text-sm font-medium text-stone-100'>
                  HTML</span>
                <span className='mr-2 rounded bg-cyan-900 p-2 text-sm font-medium text-stone-100'>
                  React.js</span>
                <span className='mr-2 rounded bg-yellow-400 p-2 text-sm font-medium text-stone-100'>
                  Javascript</span>
                <span className='mr-2 rounded bg-fuchsia-900 p-2 text-sm font-medium text-stone-100'>
                  Mongo DB</span>
              </div>
              
            </div>
            

            </div>
    </>
  )
}

export default ProjectCard

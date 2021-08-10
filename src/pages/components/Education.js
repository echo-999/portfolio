import React from 'react';

export const JuniorHighSchool = props => {
  return (
    <div className='flex flex-col items-center mt-4'>
      <div className='text-2xl text-cxdark text-center font-medium'>
        San Joaquin - Kalawaan <br />
        High School
      </div>
      <div className='mt-4 mb-7 text-lg'>Honor Student</div>
      <div className='mt-4 text-white'>Junior High School</div>
    </div>
  )
}
export const SeniorHighSchool = props => {
  return (
    <div className='flex flex-col items-center mt-4'>
      <div className='text-2xl text-cxdark text-center font-medium'>
        Buting Senior <br />
        High School
      </div>
      <div className='mt-4 mb-7 text-lg'>High Honor Student</div>
      <div className='mt-4 text-white'>Senior High School</div>
    </div>
  )
}
export const College = props => {
  return (
    <div className='col-span-2 flex flex-col items-center'>
      <div className='text-3xl text-cxdark font-medium text-center'>
        Polytechnic University of the <br />
        Philippines - Manila
      </div>
      <div className='mt-4 text-lg'>Bachelor of Science in Computer Engineering</div>
      <div className=' mb-7'>2020 - 2021: President's Lister</div>
      <div className='text-white'>College</div>
    </div>
  )
}
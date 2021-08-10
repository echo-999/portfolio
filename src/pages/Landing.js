import React from 'react';

import { JuniorHighSchool, SeniorHighSchool, College } from './components/Education';
import SkillCard from './components/SkillCard';

export default function Landing() {
  return (
    <div className='overflow-x-hidden'>
      <header className='fixed top-0 h-14 w-screen bg-cxgreen-light shadow-lg'>Loading</header>
      <div className='flex flex-col mt-14'>
        {/* -----Introduction Section----- */}
        <section className='w-full h-96 p-7 bg-gradient-to-b from-cxgreen via-cxgreen to-cxgreen-light grid grid-cols-2 grid-rows-4 items-center justify-center gap-x-20'>
          <div className='text-right row-start-2 text-white text-6xl'>Hi, I'm Jerico!</div>
          <div className='text-right row-start-3 text-white text-4xl'>And I'm here to tell my story</div>
          <div className='text-right row-start-4 text-white text-xl self-start'>Let's Talk</div>
          <div className='row-span-4 col-start-2'>
            <div className='border-2 rounded-md border-cxred h-full bg-white'>picture here</div>
          </div>
        </section>
        {/* -----End of Introduction----- */}
        {/* -----Education Section----- */}
        <section className='w-screen p-7 bg-gradient-to-b from-cxgreen-light via-cxgreen-light to-cxgreen flex flex-col'>
          {/* Introduction Text */}
          <div className='relative -top-12 text-center text-cxdark text-2xl font-medium'>
            I am a 3rd year student pursuing BS in Computer Engineering,<br />
            specializing in web development,<br />
            at the Polytechnic University of the Philippines - Manila
          </div>
          {/* Education container */}
          <div className='w-full grid grid-cols-4 justify-center'>
              <JuniorHighSchool />
              <College />
              <SeniorHighSchool />
          </div>
        </section>
        {/* -----End of Education----- */}
        {/* -----Skills Section----- */}
        <section className='w-screen p-7 pt-12 bg-cxgreen flex flex-col items-center'>
          <div className='text-3xl text-white'>Development Skills</div>
          {/* Skills container */}
          <div className='flex flex-row flex-wrap'>
            <SkillCard />
          </div>
        </section>
        {/* -----End of Skills----- */}
      </div>
      
    </div>
  )
}
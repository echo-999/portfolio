import React from 'react';

import { JuniorHighSchool, SeniorHighSchool, College } from './components/Education';
import SkillCard from './components/SkillCard';

export default function Landing() {
  const skillsArr = [
    {title: 'HTML', description: 'HyperText Markup Language', proficiency: 'Working Proficiency', level: 2, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
    {title: 'CSS', description: 'Cascading Style Sheets', proficiency: 'Basic Proficiency', level: 1, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
    {title: 'JS', description: 'JavaScript Language', proficiency: 'Working Proficiency', level: 2, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    {title: 'Material - UI', description: 'A Popular React UI Framework', proficiency: 'Working Proficiency', level: 2, url: 'https://material-ui.com/'},
    {title: 'Tailwind CSS', description: 'A Utility-First CSS Framework', proficiency: 'Basic Proficiency', level: 1, url: 'https://tailwindcss.com/'},
    {title: 'React JS', description: 'A Front-End JavaScript Library', proficiency: 'Working Proficiency', level: 2, url: 'https://reactjs.org/'}
  ]
  return (
    <div className='overflow-x-hidden'>
      <header className='fixed top-0 h-14 w-screen bg-cxgreen-light shadow-cx-dark z-10'>
        my childreeeeeen
      </header>
      <div className='flex flex-col mt-14'>
        {/* -----Introduction Section----- */}
        <section className='w-full h-96 p-7 bg-gradient-to-b from-cxgreen via-cxgreen to-cxgreen-light grid grid-cols-2 grid-rows-4 items-center justify-center gap-x-20'>
          <p className='text-right row-start-2 text-white text-6xl'>Hi, I'm Jerico!</p>
          <p className='text-right row-start-3 text-white text-4xl'>And I'm here to tell my story</p>
          <p className='text-right row-start-4 text-white text-xl self-start'>Let's Talk</p>
          <div className='row-span-4 col-start-2'>
            <div className='border-2 rounded-md border-cxred h-full bg-white'>picture here</div>
          </div>
        </section>
        {/* -----End of Introduction----- */}
        {/* -----Education Section----- */}
        <section className='w-screen px-7 py-44 bg-gradient-to-b from-cxgreen-light via-cxgreen-light to-cxgreen flex flex-col'>
          {/* Introduction Text */}
          <p className='relative -top-12 text-center text-cxdark text-2xl font-medium'>
            I am a 3rd year student pursuing BS in Computer Engineering,<br />
            specializing in web development,<br />
            at the Polytechnic University of the Philippines - Manila
          </p>
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
          <p className='text-3xl text-white mb-14'>Development Skills</p>
          {/* Skills container */}
          <div className='flex flex-row flex-wrap gap-x-6 gap-y-9 items-center justify-center'>
            {skillsArr.map((item, index) => (
              <SkillCard key={index} title={item.title} description={item.description} proficiency={item.proficiency} level={item.level} url={item.url} />
            ))}
          </div>
        </section>
        {/* -----End of Skills----- */}
      </div>
      
    </div>
  )
}
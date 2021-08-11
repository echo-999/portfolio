import React from 'react';

export default function SkillCard(props) {
  const { title, description, proficiency, level, url } = props;
  console.log(url)
  return (
    <div className='border-2 border-cxred rounded-3xl shadow-cx-dark transform rotate-12 hover:rotate-0  bg-cxgreen-light flex flex-col flex-wrap gap-2 px-8 py-2 m-2 items-center'>
      <a href={url} target='_blank' title={`${title} website`} className='text-3xl text-cxdark font-semibold hover:underline'>{title}</a>
      <p className='mb-8 text-cxdark text-lg cursor-default'>{description}</p>
      <ProficiencyBar level={level} />
      <p className='italic text-sm mb-1 cursor-default'>{proficiency}</p>
    </div>
  )
}

const ProficiencyBar = ({ level }) => {
  return (
    <div className='grid grid-cols-3 gap-x-1 w-full justify-evenly mb-8'>
      <div className={`bg-cxgreen-dark rounded-3xl border border-cxdark h-6`}></div>
      <div className={`${level > 1 ? 'bg-cxgreen-dark bg-opacity-80' : 'bg-gray-400'} rounded-3xl border border-cxdark`}></div>
      <div className={`${level === 3 ? 'bg-cxgreen-dark bg-opacity-75' : 'bg-gray-400'} rounded-3xl border border-cxdark`}></div>
    </div>
  )
}
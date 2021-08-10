import React from 'react';

export default function SkillCard(props) {
  const skillsArr = [
    {title: 'HTML', description: 'HyperText Markup Language'},
    {title: 'CSS', description: 'Cascading Style Sheets'},
    {title: 'JS', description: 'JavaScript Language'},
    {title: 'Material - UI', description: 'A Popular React UI Framework'},
    {title: 'Tailwind CSS', description: 'A Utility-First CSS Framework'},
    {title: 'React JS', description: 'A Front-End JavaScript Library'}
  ]
  return (
    <>
      {skillsArr.map((item, index) => (
        <div>
          <h1>{item.title}</h1>
        </div>
        
      ))}
    </>
  )
}
import React from 'react'
import ExperienceCard from './ExperienceCard';
import { MotionDiv } from './MotionDiv';


type Props = {}

function WorkExperience({}: Props) {
  return (
    <MotionDiv
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex flex-col relative  overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80 text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>

      <div className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl'>
       <h3>Experience</h3>
      </div>


    <div className='absolute top-32  w-full flex space-x-5  mb-3 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80'>
      <ExperienceCard />
    </div>
  </MotionDiv>
  )
}

export default WorkExperience
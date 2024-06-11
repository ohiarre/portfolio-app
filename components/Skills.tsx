
import React from 'react'
import Skill from './Skill';
import { MotionDiv } from './MotionDiv';

type Props = {}

export default function Skills({}: Props) {
  return (
    <MotionDiv 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className='h-screen relative flex flex-col xl:flex-row justify-center items-center mx-auto text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0'>
        <div className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>
            <h3>Skills</h3>
        </div>

        <div className='absolute top-32 grid grid-cols-4 gap-5 p-10 mt-5'>
            <Skill />
        </div>
    </MotionDiv>
  )
}
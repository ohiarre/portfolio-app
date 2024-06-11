import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import { MotionDiv } from './MotionDiv'

type Props = {}

function Header({}: Props) {
  return (
   
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <MotionDiv 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon url="https://www.linkedin.com/in/ohiarre/" fgColor="gray" bgColor='transparent'/>
            <SocialIcon url="https://github.com/ohiarre" fgColor="gray" bgColor='transparent'/>
            <SocialIcon url="https://www.twitter.com" fgColor="gray" bgColor='transparent'/>
        </MotionDiv >

        <MotionDiv 
         initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon className="cursor-pointer" href='#contact' network="email" fgColor="gray" bgColor="transparent"/>
        <Link href='#contact'>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-300'>Get in Touch</p>
        </Link>
        </MotionDiv >
    </header>
  )
}

export default Header
'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'


  import React from 'react'
  
  type Props = {}
  
  export default function UseTypewriter({}: Props) {
    const [text] = useTypewriter({
        words: ['Hi, I am Abdulmalik !', 'A Software Engineer...', 'I develop the front end of web applications.'],
        loop: true,
        delaySpeed: 2000,
      })
    
    return (
      <div className='m-0'>{text}<Cursor cursorColor='lightgreen'/></div>
    )
  }
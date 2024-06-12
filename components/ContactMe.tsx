'use client'
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}


type Props = {}

function ContactMe({}: Props) {

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:malikahtaan@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
  }

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <div className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-xl'>
            <h4>Contact</h4>
        </div>

        <div className='absolute top-32 flex flex-col space-y-8 mt-7'>
          
          <div className='text-lg md:text-2xl font-semibold text-center tracking-wider pt-2'>
            <h4>I am open to <span className='decoration-green-500 underline'>job opportunities. </span></h4>
          </div>

          <div className='space-y-3'>
            <div className='flex items-center space-x-5 justify-center'>
              <EnvelopeIcon className='text-green-500 h-5 w-5 md:h-7 md:w-7  animate-pulse'/>
              <p className='text-lg md:text-xl font-light tracking-wide'>malikahtaan@gmail.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <MapPinIcon className='text-green-500 h-5 w-5 md:h-7 md:w-7 animate-pulse'/>
              <p className='text-lg md:text-xl font-light tracking-wide'>Abuja, Nigeria</p>
            </div>
          </div>
          
          <form  onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full mx-auto px-5 md:px-0'>
            <div className='flex space-x-2'>
              <input  {...register("name")} placeholder='Name' className='contactInput w-1/2' type='text'/>
              <input {...register("email")} placeholder='Email' className='contactInput w-1/2' type='email'/>
              </div>
            <input {...register("subject")} placeholder='Subject' className='contactInput' type='text' />
            <textarea {...register("message")} placeholder='Message' className='contactInput' />
            <button type='submit' className='bg-green-500 py-5 px-10 rounded-md text-black font-bold'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default ContactMe
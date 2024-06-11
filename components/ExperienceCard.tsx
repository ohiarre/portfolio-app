import Image from 'next/image'
import React from 'react'
import { MotionDiv } from './MotionDiv'
import { client } from '@/app/lib/sanity'
import { ExperienceCards } from '@/app/lib/interface'

async function getData() {
  const query = `*[_type == 'experience'] | order(_createdAt desc) {
    jobTitle,
    "imageUrl": jobImage.asset->url,
    jobName,
    "imagesUrl": techImages[].asset->url,
    startDate,
    endDate,
    jobDescription,
  }`
  const data = await client.fetch(query, {}, { next: { revalidate: 30 }})
  return data
}

type Props = {}

async function ExperienceCard({}: Props) {
  const data: ExperienceCards[] = await getData()

  return (
    <>
      {data.map((experience, index) => (
        <article key={index} className='flex flex-col bg-[#292929] rounded-lg p-10 items-center space-y-2 md:space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[900px] snap-center opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200  mx-5'>
          <MotionDiv
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={experience.imageUrl}
              alt={`${experience.jobName} image`}
              width={150}
              height={150}
              className="rounded-full w-20 h-20 xl:w-[100px] xl:h-[100px] object-cover object-center"
            />
          </MotionDiv>

          <div className='px-0 md:px-10'>
            <h4 className='text-base md:text-xl  lg:text-2xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-lg lg:text-xl mt-1 text-green-300'>{experience.jobName}</p>
            <div className='flex space-x-2 my-1'>
              {experience.imagesUrl.map((techImage, index) => (
                <Image
                  key={index}
                  src={techImage}
                  alt="tech image"
                  width={200}
                  height={200}
                  className="rounded-full w-8 h-8 object-cover object-center"
                />
              ))}
            </div>
            <p className='uppercase py-3 text-gray-300 text-xs lg:text-sm'>
              {experience.startDate} - {experience.endDate}
            </p>

            <ul className='list-disc space-y-2 ml-5 text-sm lg:text-base'>
              {experience.jobDescription.split('\n').map((point, index) => {
                return (
                  <li key={index}>{point}</li>
                )
              })}
            </ul>
          </div>
        </article>
      ))}
    </>
  )
}

export default ExperienceCard

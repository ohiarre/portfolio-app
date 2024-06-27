import Image from 'next/image';
import React from 'react';
import { MotionDiv } from './MotionDiv';
import { client } from '@/app/lib/sanity'
import { AboutCard } from '@/app/lib/interface';

async function getData() {
  const query = `*[_type == 'about'] {
    title,
    "imageUrl": image.asset->url,
      description
}`
const data = await client.fetch(query, {}, { next: { revalidate: 30 }})
return data
}

type Props = {};

async function About({}: Props) {
  const data: AboutCard[] = await getData();

  return (
    <MotionDiv 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }}
    
    id="about"
    className="relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80">

      {data.map((item) => (
      <React.Fragment key={item.imageUrl}>
     <div className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
      <h3>
        About
      </h3>
    </div>

    <div className='absolute top-32 flex flex-col justify-evenly mx-auto items-center md:text-left md:flex-row m-1 p-3'>

      <MotionDiv 
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" flex-shrink-0 pt-5 pb-2"
      >
        <Image
          src={item.imageUrl}
          alt="about image"
          width={500}
          height={500}
          className="rounded-full md:rounded-lg w-40 h-40 md:w-[300px] md:h-[250px] xl:w-[400px] xl:h-[450px] object-cover"
        />
      </MotionDiv >

      <div className="space-y-5 md:space-y-10 px-5 md:px-10 mt-3 md:mt-0">
      <h4 className="text-2xl md:text-4xl font-semibold">
  {item.title ? item.title : (
    <>
      A <span className="underline decoration-green-600">brief</span> introduction
    </>
  )}
</h4>

        <p className="text-base md:text-lg lg:text-xl">
         {item.description}
        </p>
      </div>
      </div>
      </React.Fragment>
      ))}
    </MotionDiv>

  );
}

export default About


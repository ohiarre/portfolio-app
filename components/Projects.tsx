import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MotionDiv } from './MotionDiv';
import { client } from '@/app/lib/sanity';
import { ProjectsCard } from '@/app/lib/interface';

async function getData() {
  const query = `*[_type == 'projects'] | order(_createdAt desc) {
    "imageUrl": projectImage.asset->url,
      projectLink,
      projectTitle,
      projectDescription,
 }`;
  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });
  return data;
}

type Props = {};

async function Projects({ }: Props) {

  const data: ProjectsCard[] = await getData();

  return (
    <MotionDiv 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex flex-col justify-evenly items-center overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80 mx-auto text-left md:flex-row max-w-full z-0'>
          
        <div className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl mt-2'>
            <h3>Projects</h3>
        </div>

        <div className='absolute top-32 flex snap-x snap-mandatory z-20 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80 mt-3 md:mt-0 md:py-0 space-x-6'>
          {data.map((project, index) => (
            <div key={index} className='flex-shrink-0  w-full snap-center flex flex-col items-center justify-center p-3 m-2 md:h-screen'>
              <div className='flex flex-col items-center justify-center'>
                  <MotionDiv 
                    initial={{
                      y: -100,
                      opacity: 0,
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='border-t-2 border-l-2 p-2 rounded-lg border-green-100/70'
                  >
                    <Image
                      src={project.imageUrl}
                      alt={"project image"}
                      width={500}
                      height={500}
                      className='rounded-lg h-[150px] w-[250px] md:h-[200px] md:w-[400px] lg:h-[250px] lg:w-[400px] object-cover'
                    />
                  </MotionDiv>
                  <div className='space-y-5 max-w-sm md:max-w-xl xl:max-w-2xl'>
                    <Link  href={project.projectLink}>
                    <h4 className='text-lg md:text-xl font-semibold text-center -tracking-wider hover:text-white/50'>{project.projectTitle}
                    </h4>
                    </Link>
                    <p className='rounded-lg text-sm px-10 py-5 bg-gray-700/20 text-center md:text-left -tracking-wide'>{project.projectDescription}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full absolute top-[35%] bg-green-500 left-0 h-[250px] -skew-y-12' />
    </MotionDiv>
  );
}

export default Projects;

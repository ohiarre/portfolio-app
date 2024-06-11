import React from 'react';
import Image from 'next/image';
import { MotionDiv } from './MotionDiv';
import { client } from '@/app/lib/sanity';
import { SkillsCard } from '@/app/lib/interface';

async function getData() {
  const query = `*[_type == 'skills'] {
    "imageUrl": skillImage[].asset->url,
    skillPercentage
  }`;
  const data = await client.fetch(query, {}, { next: { revalidate: 30 }})
  return data;
}

type Props = {
  directionLeft?: boolean;
}

async function Skill({ directionLeft }: Props) {
  const data: SkillsCard[] = await getData();
  return (
    <>
      {data.map((skill, index) => (
        <div key={index} className='group relative flex cursor-pointer md:mx-3'>
          <MotionDiv
            initial={{
              x: directionLeft ? -100 : 100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {skill.imageUrl.map((url, imgIndex) => (
              <Image
                key={imgIndex}
                src={url}
                alt={`skill image ${imgIndex + 1}`}
                width={150}
                height={150}
                className="rounded-full border border-gray-500 p-1 w-16 h-16 md:w-[80px] md:h-[80px] xl:w-[90px] xl:h-[90px] object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
              />
            ))}
          </MotionDiv>

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-[80px] md:h-[80px] xl:w-[90px] xl:h-[90px] rounded-full'>
            <div className='flex items-center justify-center h-full z-0'>
              <p className='text-sm md:text-2xl font-bold text-black opacity-100'>
                {skill.skillPercentage}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Skill;

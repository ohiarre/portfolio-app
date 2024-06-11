import React from 'react'
import UseTypewriter from './UseTypewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/app/lib/sanity'
import { HeroCard } from '@/app/lib/interface'

async function getData() {
    const query = `*[_type == 'hero'] {
        title,
        "imageUrl": image.asset->url
    }`;
    const data = await client.fetch(query, {}, { next: { revalidate: 30 }});
    return data;
}

type Props = {}

async function Hero({}: Props) {
    const data: HeroCard[] = await getData();
    
    return (
        <div className='h-screen flex flex-col space-y-5 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            {data.map((item) => (
                <React.Fragment key={item.imageUrl}>
                    <Image 
                        src={item.imageUrl}
                        alt='hero image'
                        width={250}
                        height={250}
                        className='relative h-32 w-32 rounded-full mx-auto object-cover'
                    />
                    <h2 className='uppercase text-sm text-gray-500 pb-2 tracking-[15px]'>{item.title}</h2>
                </React.Fragment>
            ))}
            <h1 className='text-lg md:text-2xl font-semibold px-10'>
                <UseTypewriter/>
            </h1>
            <div className='pt-5 z-20'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>  
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero

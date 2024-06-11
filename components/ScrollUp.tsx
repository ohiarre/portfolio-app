import { ScrollUpCard } from '@/app/lib/interface'
import { client } from '@/app/lib/sanity'
import Image from 'next/image'
import React from 'react'

async function getData() {
    const query = `*[_type == 'scrollUp'] {
        "imageUrl": image.asset->url,
    }`
  const data = await client.fetch(query, {}, { next: { revalidate: 30 }})
  return data
  }

type Props = {}

async function ScrollUp({}: Props) {
    const data: ScrollUpCard[] = await getData();
  return (
    <div>
        {data.map((scroll) => (
      <Image 

    key={scroll.imageUrl}
    src={scroll.imageUrl}
    alt='scroll image'
    width={500}
    height={500}
    className='relative h-8 w-8 rounded-full mx-auto object-cover filter grayscale hover:grayscale-0 cursor-pointer'
    />
))}
    </div>
  )
}

export default ScrollUp;
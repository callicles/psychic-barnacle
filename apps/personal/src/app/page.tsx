import Image from 'next/image'
import { Inter } from "next/font/google"
import clsx from 'clsx'

import image1 from '../../public/images/photos/image_1.jpg'
import image2 from '../../public/images/photos/image_2.jpg'
import image3 from '../../public/images/photos/image_3.jpg'
import image4 from '../../public/images/photos/image_4.jpg'
import image5 from '../../public/images/photos/image_5.jpg'

const inter = Inter({ subsets: ['latin'] })

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-10">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <>
    <div className='mx-auto max-w-2xl py-12 px-6 lg:max-w-5xl'>
    <div className='mt-9 max-w-2xl'>
    <h1 className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
    Nicolas Joseph
</h1>
<p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'> I am Nicolas, a Tech Leader, Engineer and Entrepreneur based in Portland, OR.
  I am part of the Nike Virtual Studio founding team, where we build the 
  future of virtual collectibles and community for Nike.
</p>
    
    </div>
    </div>

    <Photos />
    </>

  )
}

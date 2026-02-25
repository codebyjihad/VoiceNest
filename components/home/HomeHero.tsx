import Image from 'next/image'
import React from 'react'
import VoiceRecordImage from '@/public/voicerecord.gif'

const HomeHero = () => {
  return (
    <div className="my-20 container max-w-7xl mx-auto p-3 flex flex-col md:flex-row items-center justify-between">
      {/* image */}
      <div>
        <Image
          src={VoiceRecordImage}
          alt="Voice Record Image"
          width={500}
          height={500}
         className='rounded-2xl' />
      </div>

      {/* description */}
      <div className='md:w-1/2 w-full  p-5'>
        <h1 className="text-2xl md:text-5xl text-center md:text-start  text-primary font-bold">Welcome to VoiceNest</h1>
        <p className="text-gray-500 mt-2 text-center text-md">
         VoiceNest is a website where users’ phone calls are automatically recorded as soon as the call starts, and the recording automatically stops when the call ends
        </p>
      </div>
    </div>
  )
}

export default HomeHero
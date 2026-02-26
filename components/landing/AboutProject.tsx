import React from 'react'
import Image from 'next/image'
import voiceImage from '@/public/voiceimage.jpg'

const AboutProject = () => {
  return (
     <div className="my-20 container max-w-7xl mx-auto p-3 flex flex-col-reverse md:flex-row items-center justify-between">

      {/* description */}
      <div className='md:w-1/2 w-full  p-5'>
       <h1 className='text-center font-bold text-2xl text-destructive'>How To i'ts Work</h1>
        <p className="text-gray-500 mt-2 text-center text-md">
        Best wishes for you. First, log in to our app. You will be taken to a dashboard where, using the sidebar options, you can make a phone recording. If you don’t have an account, sign up and provide some details about your work, then you’re done.
        </p>
      </div>
        {/* image */}
      <div>
        <Image
          src={voiceImage}
          alt="Voice Record Image"
          width={400}
          height={400}
         className='rounded-2xl' />
      </div>
    </div>
  )
}

export default AboutProject


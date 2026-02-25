import React from 'react'

const Footer = () => {
    const date = new Date()
  return (
    <div className='p-5 bg-gray-300 dark:bg-black'>
        <div className='flex flex-col justify-center items-center'>
             <div className='mb-3'>
                <p className='text-foreground font-bold text-2xl'>Voice<span className='text-primary'>Nest</span></p>
             </div>
             <div className='border-t-1 w-full border-secondary text-center py-3'>
                    <span className='text-gray-600'>© {date.getFullYear()} Voice Nest. All rights reserved.</span>
             </div>
        </div>
    </div>
  )
}

export default Footer
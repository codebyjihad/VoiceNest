import React from 'react'
import DashBoardImage from '@/public/exampleDahboard.jpg'

const DahboardImage = () => {
  return (
    <div
      className="container max-w-7xl mx-auto w-full h-200 bg-cover bg-center mb-10"
      style={{ backgroundImage: `url(${DashBoardImage.src})` }}
    >
    </div>
  )
}

export default DahboardImage
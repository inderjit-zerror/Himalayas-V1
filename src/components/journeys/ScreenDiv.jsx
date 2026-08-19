import React from 'react'

const ScreenDiv = () => {
  return (
    <div className='w-full h-[50vh] sm:h-screen flex justify-center items-center overflow-hidden mt-[10vh] '>
    <video loop muted autoPlay src="/video/Lake.mp4" className='w-full h-full object-cover object-center'></video>
    </div>
  )
}

export default ScreenDiv

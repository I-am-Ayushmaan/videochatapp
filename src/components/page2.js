import React from 'react'
import Camera from './camera'
import Chatbox from './chatbox'

const Page2 = () => {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='m-4 p-4 rounded-lg'>
          <Camera />
        </div>
        <div className='m-4 p-4 rounded-lg'>
          <Chatbox />
        </div>
      </div>
    </>
  );
  
}

export default Page2

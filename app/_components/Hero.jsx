import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
  return (
    <>
    <section className='px-50'>
        <h1 className='text-2xl lg:text-4xl xl:text-6xl text-center mt-24 font-semibold'>AI YouTube Short Video Generator</h1>
      <h3 className='lg:text-2xl font-semibold text-gray-300 text-center pt-4'>Ai generated scripts, images and voiceovers in seconds. Create, edit and publish engaging shorts with ease!</h3>  
        
        <div className='text-center mt-6 flex justify-center items-center gap-8'>
        <Button variant={'secondary'}>Explore</Button>
        <Button>Get started</Button>
        </div>
    </section>
      
    </>
  )
}

export default Hero
import { Button } from '@/components/ui/button'
import React from 'react'

function Header() {
  return (
    <>
        <div className='flex justify-between items-center'>
            <div><h1>AspectAI</h1></div>
            <div><Button>Get started</Button></div>
        </div>
    </>
  )
}

export default Header
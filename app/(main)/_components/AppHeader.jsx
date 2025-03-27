'use client'
import { Sidebar, SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'
import React from 'react'
import {useAuthContext} from '@/app/provider'

const AppHeader = () => {
  const {user}=useAuthContext();
  return (
    <div className='p-3 flex items-center justify-between'>
      <SidebarTrigger />
        <Image src={user?.photoURL} alt='user' 
        width={40} height={40} className='rounded-full'/>
    </div>
  )
}

export default AppHeader
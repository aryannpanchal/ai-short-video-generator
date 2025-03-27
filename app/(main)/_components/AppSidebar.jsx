import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
import Image from 'next/image'
import React from 'react'

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className='mt-5 justify-center flex items-center gap-3'>
          <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
        <h2 className='font-bold text-2xl'>Video Gen</h2>
        </div>
        <h2 className='text-lg text-grey-400 text-center mt-3'>Ai short video generator</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className='mx-5'>
            <Button className='w-full'>+ Create new video</Button>
          </div>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
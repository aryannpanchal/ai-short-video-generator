'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from './Authentication';
import {useAuthContext} from '../provider'
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const {user}= useAuthContext();
  return (
    <>
        <div className='flex justify-between items-center'>
            <div><h1>AspectAI</h1></div>


          {!user? <Authentication>
                <Button>Get started</Button>
            </Authentication>
            :<div className='flex gap-3 items-center'>
              <Link href={'/dashboard'}>
              <Button>Dashboard</Button>
              </Link>
              <Image src={user?.photoURL} alit='userImage' width={40} height={40} className='rounded-full' />
            </div>  
          }
            



        </div>

    </>
  )
}

export default Header
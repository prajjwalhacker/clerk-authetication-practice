import Image from 'next/image'
import React from 'react'
import logoI from '../../../../public/logo.svg';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <div className='flex p-4 justify-between items-center'>
      <UserButton/>
      <ul className='flex justify-between gap-4'>
        <li>
          Dashboard
        </li>
        <li>
          Questions
        </li> 
        <li>
          Content
        </li>
        <li>
          How it works
        </li>
      </ul>
      <Image src={logoI.src} alt='' height={20} width={20}/>   
    </div>
  )
}

export default Header
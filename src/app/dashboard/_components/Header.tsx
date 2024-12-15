import Image from 'next/image'
import React from 'react'
import logoI from '../../../../public/logo.svg';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <div className='flex p-4 justify-between items-center bg-secondary'>
      <UserButton/>
      <ul className='flex justify-between gap-4'>
        <li className='cursor-pointer hover:text-primary hover:font-bold transition-all'>
          Dashboard
        </li>
        <li className='cursor-pointer hover:text-primary hover:font-bold transition-all'>
          Questions
        </li> 
        <li className='cursor-pointer hover:text-primary hover:font-bold transition-all'>
          Content
        </li>
        <li className='cursor-pointer hover:text-primary hover:font-bold transition-all'>
          How it works
        </li>
      </ul>
      <Image src={logoI.src} alt='' height={20} width={20}/>   
    </div>
  )
}

export default Header
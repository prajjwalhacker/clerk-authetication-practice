import Image from 'next/image'
import React from 'react'
import logoI from '../../../../public/logo.svg';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <div className='flex p-4 justify-between'>
      <UserButton/>
      <Image src={logoI.src} alt='' height={20} width={20}/>   
    </div>
  )
}

export default Header
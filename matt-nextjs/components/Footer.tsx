
"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import MobileFooter from './navigation/MobileFooter';

export const Footer = () => {

  return (
    <footer className=''>
      <div className='fixed xl:hidden  mt-auto'>
        <MobileFooter />
      </div>
    </footer>
  )
}

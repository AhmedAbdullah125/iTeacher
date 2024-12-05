import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SideBar from '@/components/home/SideBar';
import MainContent from '@/components/home/MainContet';

export default function Home() {
  return (
    <main className='main-home'>
      <SideBar/>
      <MainContent/>
    </main>
  );
}
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SideBar from '@/components/home/SideBar';
import MainContent from '@/components/home/MainContet';
import Chat from '@/components/chatbot/Chat';

export default function Chatbot() {
  return (
    <main className='main-home'>
      <SideBar/>
      <Chat></Chat>
    </main>
  );
}
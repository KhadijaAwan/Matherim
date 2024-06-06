"use client"
import Image from 'next/image';
import { useState } from 'react';
import logo from "../../public/logo.png";
import ButtonSection from '@/components/btn';
import InputSection from '@/components/input';

export default function Home() {
  const [answer, setAnswer] = useState('');
  const [query, setQuery] = useState('');

  return (
    <main className="w-[100%] flex min-h-screen flex-col justify-center items-center bg-blue-500">
      <section className='mb-10 flex items-center'>
        <Image src={logo} alt="Logo image" width={40} height={30} className='rounded-[8px] mr-3' />
        <h1 className="text-lg md:text-2xl font-bold text-slate-100">Matherim Calculator</h1>
      </section>
      <div className="bg-slate-50 p-6 md:p-10 rounded-xl shadow-lg w-[85%] sm:w-[320px]">
        <InputSection value={query} className={'bg-slate-50 text-blue-800 w-full mb-2 font-bold text-2xl border-b-2 border-gray-400 focus:outline-none'} />
        <InputSection value={answer} className={'bg-slate-50 text-gray-900 w-full text-2xl font-bold mb-4 focus:outline-none'} />
        <ButtonSection setAnswer={setAnswer} query={query} setQuery={setQuery} />
      </div>
    </main>
  )
}
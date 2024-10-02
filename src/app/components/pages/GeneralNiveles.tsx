'use client'
import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/store';

interface Props {
  param: string;
}
export const GeneralNiveles = ({ param }: Props) => {
  const niveles = useAppSelector((state) => state.AppState.niveles);
  const data = niveles.find(
    (nivel) => nivel.title.toLowerCase() === param.toLowerCase()
  );
  if (!data) return "null";
  return (
    <>
 <section>
  <div className="mx-auto max-w-screen-xl ">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
        
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full  bg-slate-100  flex justify-center items-center ">
        {/* <img
          alt=""
          src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        /> */}
        <Image 
      className="bg-cover rounded-sm " 
      src={data.image}
      alt="" 
      width={900} 
      height={450} 
    />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
          {data.description}
          </p>

          <p>
           
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

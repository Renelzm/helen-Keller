'use client'
import { useAppSelector } from '@/store'
import { Button } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export const SectionMarket = () => {
  const data = useAppSelector( (state ) => state.AppState.niveles)
  return (
    <>
  
<main className="py-12 md:px-20 sm:px-14 px-6">
  <div className="md:flex items-center shadow-md rounded-md  bg-slate-50 p-4" >
    <div className="md:px-10 sm:px-5 ">
        <Image src="https://unoi.com.mx/wp-content/uploads/2022/12/logo_.svg" alt='' width={100} height={100}/>
      <h1 className="text-gray-800 font-bold text-2xl my-2">Sistema Uno </h1>
      <p className="text-gray-700 mb-2 md:mb-6">
      Nuestros planes y programas de estudio están basados en el Sistema UNO Internacional, 
      que esta acorde a la Secretaría de Educación Pública, 
      complementados con el desarrollo de las habilidades emocionales e intelectuales.  
      Promoviendo la capacitación constante de maestros y la participación activa de padres de familia.
    <br /> <br />
    Todo bajo un educativo integral que acompaña a los estudiantes como seres humanos plenos
     a través de pedagogías innovadoras impulsadas por un potente sistema de datos.

      </p>
      <div className=" flex flex-col md:flex-row mt-5  md:justify-between mb-2 items-center md:items-start space-y-4 md:space-y-0 " >
      <Button variant="filled" color="pink" radius="lg">Entrar a sistema de alumnos </Button>
      <Button variant="filled" color="cyan" radius="lg">Plataforma de pagos Unoi</Button>
      <Button variant="outline" color="teal" radius="lg"> <Image src="https://unoi.com.mx/wp-content/uploads/2022/12/logo_.svg" alt='' width={30} height={30} className='mr-2' /> Sitio Oficial</Button>
        
      </div>
    </div>
    <div>
      <Image className="bg-cover rounded-xl" src="/helen-keller/unoi-img.jpg" alt="" width={700} height={50} />
    </div>
  </div>

  {/* DATOS DE NIVELES EEDUCATIVOS */}
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">

{data.map((item, index) => (
  <div key={index} className="shadow-md mt-5 w-full mx-auto">
    <Image 
      className="bg-cover rounded-sm  max-h-64" 
      src={item.image} 
      alt="" 
      width={900} 
      height={450} 
    />
    <div className="px-4 flex flex-col ">
      <h1 className="mt-3 text-2xl font-bold my-2 ">{item.title}</h1>
      <p className="mb-2 ">{item.description}</p>
      <Link href={"/primaria"}>
      <div className="flex  mt-4">
        <span className="mb-2 font-bold text-blue-600 cursor-pointer">Ver más</span>
      </div>
      </Link>
    </div>
  </div>
))}

</div>
  <div className="sm:flex items-center shadow-md mt-10">
    <div>
      <img className="bg-cover" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
    </div>
    <div className="md:px-10 sh sm:px-5">
      <h1 className="text-gray-800 font-bold text-2xl my-2">Actividades extracurriculares</h1>
      <p className="text-gray-700 mb-2 md:mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
      <div className="flex justify-between mb-2">
        <span className="font-thin text-sm">May 20th 2020</span>
        <span className="sm:block hidden mb-2 text-gray-800 font-bold">Read more</span>
      </div>
    </div>
  </div>
</main>
    </>
  )
}

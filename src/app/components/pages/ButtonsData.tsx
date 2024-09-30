'use client'
import { useAppSelector } from '@/store';
import { IconArticle, IconSchool, IconWritingSign } from '@tabler/icons-react';

interface Props {
    param: string;
}

export const ButtonsData = ({param}:Props) => {
      const niveles = useAppSelector( (state) => state.AppState.niveles)
      const data = niveles.find( nivel => nivel.title.toLowerCase() === param.toLowerCase())
  return (
    
<section className=" py-8">

    <div className="container mx-auto text-center px-4">
   
        <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-8 shadow-md rounded-md">
                  <div className="flex justify-center items-center mb-4">
                    <IconWritingSign
                      style={{ width: (80), height: (80) }}
                      color="#f018e8" 
                      />
                      </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Inscripciones</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-8 shadow-md rounded-md  ">
                  <div className="flex justify-center items-center mb-4">
                    <IconArticle
                      style={{ width: (80), height: (80) }}
                      color="#6672b0"
                      />
                      </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Mensualidades</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-8 shadow-md rounded-md  ">
                  <div className="flex justify-center items-center mb-4">
                    <IconSchool
                      style={{ width: (80), height: (80) }}
                      color="var(--mantine-color-blue-filled)"
                      />
                      </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Oferta Educativa</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            
          
        
        </div>
    </div>
</section>
    
  )
}

import { createSlice } from '@reduxjs/toolkit'
import { IconArticle, IconSchool, IconWritingSign } from '@tabler/icons-react';

interface GeneralAppState {
    nombreInstitucion: string
    banners?: banners[]
    niveles: niveles[]
}

interface banners {
  nombreArchivo: string
  alt: string
}

interface niveles {
  title: string
  description: string
  image: string
  to: string
  documents?: documents[],
  color: string,
  }

interface documents {
  nombreArchivo: string
  nombre: string
  color?: string, // Color dinámico
  icon: React.ReactNode,
  iconSize?: number, // Tamaño dinámico
}

const documents = [
  {
    nombreArchivo: 'documento1.pdf',
    nombre: 'Inscripciones',
    icon: <IconWritingSign />,
    iconSize: 80, // Tamaño dinámico
    color:  "#ffab09",// Color dinámico

  },
  {
    nombreArchivo: 'documento2.pdf',
    nombre: 'Mensualidades',
    icon: <IconArticle />,
    color: "#049158",
  },
  {
    nombreArchivo: 'documento3.pdf',
    nombre: 'Oferta Educativa',
    icon: <IconSchool />,
    color: "#a9004f",
 
  }
]


const initialState: GeneralAppState = {
    nombreInstitucion: 'CE Helen Keller',
    banners: [
      {
        nombreArchivo: 'helen-keller/bannerhellenkeller2.jpg',
        alt: 'Bienvenida a estudiantes'
      },
      {
        nombreArchivo: 'helen-keller/bannerhellenkeller.jpg',
        alt: 'Bienvenida a estudiantes'
      }
  ],
  niveles: [
    {
      title: 'Preescolar',
      description: 'Somos un segundo hogar para sus hijos, ofreciéndole un ambiente seguro y agradable en el que se desarrollan, crecen y disfrutan aprender.',
      image: '/helen-keller/kinder.jpg',
      to: "/preescolar",
      color: '#47ab8d',
      documents: documents,
    },
    {
      title: 'Primaria',
      description: 'Contamos con recursos de última generación, a través de diversas metodologías sobre un ambiente bilingüe en donde adquieren el conocimientos y el idioma mediante la vivencia diaria',
      image: '/helen-keller/primaria.jpg',
      to: "/primaria",
      color: '#ffab09',
      documents: documents,
   
    },
    {
      title: 'Secundaria',
      description: 'Buscamos crear estudiantes capaces de aportar al mundo soluciones con niveles educativos necesarios para su excelente desempeño',
      image: '/helen-keller/secundaria.jpg',
      to: "/secundaria",
      color: '#f01879',
      documents: documents,
    },
    
  ]
}

const generalAppSlice = createSlice({
  name: 'generalApp',
  initialState,
  reducers: {}
});

export const {} = generalAppSlice.actions

export default generalAppSlice.reducer
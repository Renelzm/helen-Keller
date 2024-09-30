import { createSlice } from '@reduxjs/toolkit'

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
}
const initialState: GeneralAppState = {
    nombreInstitucion: 'CE Helen Keller',
    banners: [
      {
        nombreArchivo: 'bannerhellenkeller2.jpg',
        alt: 'Bienvenida a estudiantes'
      },
      {
        nombreArchivo: 'bannerhellenkeller.jpg',
        alt: 'Bienvenida a estudiantes'
      }
  ],
  niveles: [
    {
      title: 'Preescolar',
      description: 'Somos un segundo hogar para sus hijos, ofreciéndole un ambiente seguro y agradable en el que se desarrollan, crecen y disfrutan aprender.',
      image: '/kinder.jpg',
      to: "/preescolar"
    },
    {
      title: 'Primaria',
      description: 'Contamos con recursos de última generación, a través de diversas metodologías sobre un ambiente bilingüe en donde adquieren el conocimientos y el idioma mediante la vivencia diaria',
      image: '/primaria.jpg',
      to: "/primaria"
    },
    {
      title: 'Secundaria',
      description: 'Buscamos crear estudiantes capaces de aportar al mundo soluciones con niveles educativos necesarios para su excelente desempeño',
      image: '/secundaria.jpg',
      to: "/secundaria"
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
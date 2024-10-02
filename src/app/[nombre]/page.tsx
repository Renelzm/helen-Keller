
import { GeneralNiveles } from "../components/pages/GeneralNiveles";
import { ButtonsData } from "../components/pages/ButtonsData";


const nivelesRender = [
  { title: 'preescolar'}, { title: 'primaria' }, { title: 'secundaria'}
]

// Genera las rutas estáticas
export async function generateStaticParams() {
  return nivelesRender.map((nivel) => ({
    nombre: nivel.title,
  }));
}

export default function NamePage({ params }: { params: { nombre: string } }) {
 
  // const niveles = useAppSelector( (state) => state.AppState.niveles)
  const datos = nivelesRender.find((n) => n.title.toLowerCase() === params.nombre.toLowerCase()) || null;

  if (!datos) {
    return <div>No se encontró el nivel {params.nombre}</div>;
  }

  return (
    <div >

   
  
      <ButtonsData param={datos.title}/>    
      <GeneralNiveles param={datos.title}/>
    
    </div>
  );
}
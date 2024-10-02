'use client'
import { useAppSelector } from '@/store';
import { Carousel } from '@mantine/carousel'; 
import { Container, Image } from '@mantine/core';


export const CarouselSlider = () => {

  const banners = useAppSelector((state) => state.AppState.banners)

  return (
    <>
     { banners?.length != 0 ? 
     
     <Container  size="70%">

    <Carousel  withIndicators align={'center'}>
      <Carousel.Slide>
      <Image src={`https://si.nccdn.net/page_images/children_crafting-1920x948.jpg`} 
        alt={' banner.alt'} width={400} height={300}   style={{ border: '5px solid black' }}
        />
    </Carousel.Slide>
      { banners!.map( banner => 
      <Carousel.Slide key={banner.nombreArchivo}>
      <Image src={`/${banner.nombreArchivo}`} 
        alt={ banner.alt} width={400} height={300} style={{ border: '5px solid gray' }} 
        />
    </Carousel.Slide>

      )}
  </Carousel>
      </Container>
     : ''}
     
      
    </>

  )
}

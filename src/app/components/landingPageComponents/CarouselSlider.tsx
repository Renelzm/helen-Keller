'use client'
import { useAppSelector } from '@/store';
import { Carousel } from '@mantine/carousel'; 
import { Container, Image } from '@mantine/core';


export const CarouselSlider = () => {

  const banners = useAppSelector((state) => state.AppState.banners)

  return (
    <>
     { banners?.length != 0 ? 
     
     <Container  size="90%">

    <Carousel  withIndicators align={'center'}>
      { banners!.map( banner => 
      <Carousel.Slide key={banner.nombreArchivo}>
      <Image src={`/${banner.nombreArchivo}`} 
        alt={ banner.alt}
        />
    </Carousel.Slide>

      )}
  </Carousel>
      </Container>
     : ''}
     
      
    </>

  )
}

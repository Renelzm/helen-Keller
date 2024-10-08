'use client'
import { Container} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface VideoPlayerProps {
  videoSrc?: string;
}


const VideoPlayer = ({ videoSrc } : VideoPlayerProps)  => {
const isXs = useMediaQuery('(max-width: 576px)');
  return (
    <section className={`relative w-full overflow-hidden mb-24 ${ !isXs ?  "min-h-dvh" : "min-h-96"}`}>
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <iframe
          className="w-full h-full "
         
        src={`${videoSrc}?si=F23JaVE81F5Jag01&amp;start=90&controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="relative z-20 flex items-center justify-center h-full">
        <Container>
          <h1 className="text-4xl font-bold text-white">Bienvenidos</h1>
          <p className="text-lg text-white mt-4">
            Sistema de enseñanza especializada Helen Keller.
          </p>
         
        </Container>
      </div>
    </section>
    
  );
};

export default VideoPlayer;

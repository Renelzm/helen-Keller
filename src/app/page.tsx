
import { CarouselSlider } from "./components/landingPageComponents/CarouselSlider";
import { SectionMarket } from "./components/landingPageComponents/SectionMarket";
import VideoPlayer from './components/landingPageComponents/VideoPlayer';


export default function Home() {
  return (
   <>
   <VideoPlayer  videoSrc="https://www.youtube.com/embed/RqiBROxsLpo?si=f5mcuM4Ufkq_3m0f"/>
   <CarouselSlider />
   <SectionMarket />
   </>
  );
}

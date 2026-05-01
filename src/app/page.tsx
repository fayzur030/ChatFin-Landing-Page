import Navbar from '@/common/Navbar'
import HeroSection from './component/Home/HeaderSection'
import HeroImage from './component/Home/HeroImage'
import Capabilities from './component/Home/Capabilities'
import Works from './component/Home/Works'

export default function Home() {
  return (
    <div className='pb-10'>
      <Navbar />
      <HeroSection />
      <HeroImage />
      <Capabilities />
      <Works />
    </div>
  )
}

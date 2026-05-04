import Image from 'next/image'
import heroImage from '../../assets/heroImage.png'

const HeroImage = () => {
  return (
    <div className='max-w-7xl mx-auto lg:mt-10 mt-6 lg:px-0 md:px-4 px-4'>
      <Image
        src={heroImage}
        alt='hero-image'
        className='lg:w-7xl mx-auto lg:h-[524px]'
      />
    </div>
  )
}

export default HeroImage

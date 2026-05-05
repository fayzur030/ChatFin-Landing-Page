'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../app/assets/hederLogo.png'

const Footer = () => {
  const FooterItems = [
    {
      id: '1',
      title: 'Company',
      subTitle: [
        { name: 'Blog', link: '/blog' },
        { name: 'Solutions', link: '/solutions' },
        { name: 'Partners', link: '/partners' },
      ],
    },
    {
      id: '2',
      title: 'Product',
      subTitle: [
        { name: 'Features', link: '/features' },
        { name: 'Pricing', link: '/pricing' },
        { name: 'Terms & Conditions', link: '/terms' },
      ],
    },
    {
      id: '3',
      title: 'Resources',
      subTitle: [
        { name: 'Privacy Policy', link: '/privacy' },
        { name: 'Solutions', link: '/solutions' },
      ],
    },
  ]

  return (
    <footer className='max-w-7xl mx-auto px-4 md:px-6 lg:px-0 mt-10'>
      <div className='grid grid-cols-12 gap-8'>
        {/* Left Section */}
        <div className='col-span-12 xl:col-span-5'>
          <Image src={logo} alt='headerLogo' width={110} height={50} />

          <p className='text-[#6B7280] mt-4 text-sm md:text-base leading-relaxed'>
            AI assistant built specifically for finance{' '}
            <br className='hidden md:block' />
            functions such as controllers, FP&A, Treasury{' '}
            <br className='hidden md:block' />
            and tax.
          </p>
        </div>

        {/* Right Section */}
        <div className='col-span-12 xl:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6'>
          {FooterItems.map((item) => (
            <div key={item.id}>
              <h2 className='font-semibold mb-4 text-gray-900'>{item.title}</h2>

              {item.subTitle.map((sub, index) => (
                <Link
                  href={sub.link}
                  key={index}
                  className='block text-gray-500 text-sm mb-2 hover:text-black transition duration-200'
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className='w-full h-px bg-gray-200 my-6' />

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-3'>
        <p className='text-gray-500 text-sm text-center md:text-left'>
          © 2025 ChatFin Inc. All Rights Reserved.
        </p>

        <div className='flex gap-4'>
          <Link
            href='/privacy'
            className='text-sm text-gray-500 hover:text-black'
          >
            Privacy
          </Link>
          <Link
            href='/terms'
            className='text-sm text-gray-500 hover:text-black'
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

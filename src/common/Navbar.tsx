'use client'
import Image from 'next/image'
import logo from '../app/assets/hederLogo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState()
  const navItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Products',
      href: '/products',
    },
    {
      label: 'Use cases',
      href: '/use-cases',
    },
    {
      label: 'Partners',
      href: '/partners',
    },
    {
      label: 'Open Sousce',
      href: '/open-source',
    },
  ]

  return (
    <div className='lg:max-w-7xl mx-auto mt-2 flex items-center justify-between shadow md:px-4 lg:px-0'>
      {/* logo */}
      <div>
        <Image src={logo} alt='headerLogo' width={100} height={50} />
      </div>
      {/* nav section */}
      <div className='md:flex items-center justify-between md:gap-3 lg:gap-4 hidden'>
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`font-medium text-[#374151] lg:text-base transition ${
                isActive
                  ? 'text-green-500'
                  : 'text-[#374151] hover:text-green-900 hover:underline'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
      <div className='hidden md:block'>search</div>
    </div>
  )
}

export default Navbar

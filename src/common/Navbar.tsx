'use client'
import Image from 'next/image'
import logo from '../app/assets/hederLogo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'

const Navbar = () => {
  const pathname = usePathname()
  const [openSearch, setOpenSearch] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
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
      label: 'Open Source',
      href: '/open-source',
    },
  ]

  return (
    <div className='lg:max-w-7xl mx-auto mt-2 flex items-center justify-between shadow md:px-4 lg:px-2 relative py-3   '>
      {/* logo */}
      <div>
        <Image src={logo} alt='headerLogo' width={100} height={50} />
      </div>
      {/* nav section */}
      <div className='md:flex items-center justify-between md:gap-3 lg:gap-4 hidden'>
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href)
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
      <div className='hidden md:flex items-center gap-2 cursor-pointer'>
        {openSearch ? (
          <X onClick={() => setOpenSearch(false)} />
        ) : (
          <Search
            color='#6B7280'
            size={18}
            onClick={() => setOpenSearch(true)}
          />
        )}
      </div>
      {openSearch && (
        <div className='absolute top-full right-0 mt-2 w-50 md:w-62.5 bg-white shadow-lg rounded-lg p-1'>
          <input
            type='text'
            placeholder='search...'
            className='w-full outline-none border border-indigo-500 focus:border-2 px-3 py-2 rounded-md'
          />
        </div>
      )}

      {/* Mobile  */}
      <button
        className='lg:hidden md:hidden block'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40'
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 bg-[#374151] text-white h-full w-52.5 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end p-4 '>
          <button aria-label='Search' onClick={() => setIsOpen(!isOpen)}>
            <X />
          </button>
        </div>
        <div className='flex flex-col items-center gap-10'>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-medium text-[#374151] lg:text-base transition ${
                  isActive
                    ? 'text-green-500'
                    : 'text-white hover:text-green-900 hover:underline'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          {/* search */}
          <div className='w-full shadow-lg rounded-lg p-1 px-4 '>
            <input
              type='text'
              placeholder='search...'
              className='w-full outline-none border border-indigo-500 focus:border-2 px-3 py-2 rounded-md'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

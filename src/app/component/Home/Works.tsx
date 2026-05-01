'use client'

import { useState } from 'react'

const Works = () => {
  const [activeTab, setActiveTab] = useState('The Brain')
  const menuItems = [
    'The Brain',
    'Where Data Comes From',
    'How Agents Learn Your Business',
    'How you stay in control',
  ]

  return (
    <div className='md:mt-8 lg:mt-10 mt-6 max-w-7xl mx-auto'>
      <h1 className='text-2xl md:3xl lg:text-4xl font-bold text-center'>
        How it works
      </h1>

      <div className='md:mt-8 md:py-10 grid grid-cols-1lg: gap-12 md:grid-cols-2 lg:grid-cols-2 justify-between items-center lg:px-0 md:px-3 px-2'>
        <div className=''>
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full cursor-pointer' text-left px-6 py-4 rounded-xl text-xl font-bold transition-all duration-300 ${activeTab === item ? 'bg-[#E0F7F6] border-l-4 border-[#00A395] text-[#11182C] shadow-sm ' : 'text-[#374151] hover:text-[#0B1B32]'}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className='bg-green-500 w-2xl h-20'></div>
      </div>
    </div>
  )
}

export default Works

'use client'

import {
  // Check,
  Cpu,
  Database,
  FileText,
  LayoutGrid,
  Lock,
  Settings,
  ShieldCheck,
  Table,
  Zap,
} from 'lucide-react'
import { useState } from 'react'
import Tag from './Tag'

const Works = () => {
  const [activeTab, setActiveTab] = useState('The Brain')
  const [activeRow, setActiveRow] = useState('Computer Vision')
  // const [isSocActive, setIsSocActive] = useState(false)
  const menuItems = [
    'The Brain',
    'Where Data Comes From',
    'How Agents Learn Your Business',
    'How you stay in control',
  ]
  const row1 = [
    { label: 'Gen AI', icon: <Zap size={16} /> },
    { label: 'ML', icon: <Cpu size={16} /> },
    { label: 'Computer Vision', icon: <LayoutGrid size={16} /> },
  ]
  const row2 = [
    { icon: <LayoutGrid size={16} />, label: 'ERP' },
    { icon: <Database size={16} />, label: 'Data lake' },
    { icon: <Table size={16} />, label: 'Excel' },
    { icon: <FileText size={16} />, label: 'PDFs' },
  ]
  const row3 = [
    { icon: <Settings size={16} />, label: 'Orchestration' },
    { icon: <Settings size={16} />, label: 'Configurable agents' },
    { icon: <Database size={16} />, label: 'Prebuilt agents' },
  ]
  const row4 = [
    { icon: <Lock size={16} />, label: 'Security' },
    { icon: <Lock size={16} />, label: 'Access control' },
    { icon: <ShieldCheck size={16} />, label: 'Data governance' },
    { icon: <ShieldCheck size={16} />, label: 'SOC' },
  ]

  return (
    <div className='md:mt-8 lg:mt-10 mt-6 max-w-7xl mx-auto'>
      <h1 className='text-2xl md:3xl lg:text-4xl font-bold text-center'>
        How it works
      </h1>

      <div className='md:mt-8 mt-8 md:py-10 grid grid-cols-1 md:grid-cols-1 lg:gap-12  lg:grid-cols-2 justify-between items-center lg:px-0 md:px-3 px-2'>
        <div className=''>
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full  cursor-pointer' text-left px-6 py-4 rounded-xl text-xl font-bold transition-all duration-300 ${activeTab === item ? 'bg-[#E0F7F6] border-l-4 border-[#00A395] text-[#11182C] shadow-sm ' : 'text-[#374151] hover:text-[#0B1B32]'}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className='bg-[#F9FAFB] text-[#374151] mt-6 lg:mt-0 md:mt-8 font-semibold p-4 py-8 border border-gray-200 shadow rounded-2xl'>
          {/* 1st row */}
          <div className='flex flex-wrap items-center justify-center gap-3'>
            {row1.map((tag1) => (
              <Tag
                key={tag1.label}
                icon={tag1.icon}
                label={tag1.label}
                active={activeRow === tag1.label}
                onClick={() => setActiveRow(tag1.label)}
              />
            ))}
          </div>
          <div className='w-full h-px bg-gray-200 my-4 lg:mb-8' />
          {/* 2nd row */}
          <div className='flex flex-wrap items-center justify-center gap-3 lg:gap-4 lg:mb-8'>
            {row2.map((tag2) => (
              <Tag
                key={tag2.label}
                icon={tag2.icon}
                label={tag2.label}
                active={activeRow === tag2.label}
                onClick={() => setActiveRow(tag2.label)}
              />
            ))}
          </div>
          <div className='w-full h-px bg-gray-200 my-4 lg:mb-8' />
          {/* 3rd row */}
          <div className='flex flex-wrap items-center justify-center gap-3'>
            {row3.map((tag3) => (
              <Tag
                key={tag3.label}
                icon={tag3.icon}
                label={tag3.label}
                active={activeRow === tag3.label}
                onClick={() => setActiveRow(tag3.label)}
              />
            ))}
          </div>
          <div className='w-full h-px bg-gray-200 my-4 ' />
          {/* 4th row */}
          <div className='flex flex-wrap items-center justify-center gap-3 lg:gap-4 lg:mt-6'>
            {row4.map((tag4) => (
              <Tag
                key={tag4.label}
                icon={tag4.icon}
                label={tag4.label}
                active={activeRow === tag4.label}
                onClick={() => setActiveRow(tag4.label)}
              />
            ))}
          </div>
          {/* <div className='text-center mt-5'>
            <Tag
              icon={<Check size={16} />}
              label='SOC'
              active={isSocActive}
              onClick={() => setIsSocActive(!isSocActive)}
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Works

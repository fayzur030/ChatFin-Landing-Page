'use client'
import { useState } from 'react'

const CustomersSaying = () => {
  const [hoverId, setHoverId] = useState<string | null>(null)
  const data = [
    {
      id: '1',
      description: [
        `"Contract compliance monitoring is`,
        ` now automated. We catch issues`,
        `before they become problems."`,
      ],
      title: 'Legal Operations',
      subTitle: 'Fintech',
    },
    {
      id: '2',
      description: [
        `"ChatFin cut our month-end time by`,
        `40%. It's like having an additional`,
        `employee that never sleeps."`,
      ],
      title: 'VP Finance',
      subTitle: 'Tech Company',
    },
    {
      id: '3',
      description: [
        `"The accuracy of their AI`,
        `reconciliation is unmatched. It has`,
        `saved us countless hours and`,
        `reduced human error significantly."`,
      ],
      title: 'Controller',
      subTitle: 'Manufacturing',
    },
  ]
  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-[#11182C] lg:text-4xl md:text-3xl text-center font-bold lg:mt-8 md:mt-8 mt-6 lg:py-10'>
        What Our Customers Are Saying
      </h1>

      <div className='mt-6 grid lg:grid-cols-3 md:grid-cols-3 gap-6 px-3 lg:px-0 md:px-2'>
        {data.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoverId(item.id)}
            onMouseLeave={() => setHoverId(null)}
            className={`p-4 shadow-md border border-gray-200 hover:border-[#10B981] hover:shadow-xl  rounded-lg transition-all duration-500 transform hover:-translate-y-1 ${
              hoverId === item.id
                ? 'border-2 border-[#10B981] shadow-xl'
                : 'border border-gray-200'
            }`}
          >
            <p className='lg:flex lg:flex-col lg:text-lg md:text-base text-[#374151] font-normal'>
              {item.description.map((line, idx) => (
                <span key={idx}>{line}</span>
              ))}
            </p>
            <div className='lg:mt-7 mt-6 border-l-4 border-[#10B981]'>
              <div className='ml-2'>
                <h1 className='text-base text-[#11182C] font-semibold'>
                  {item.title}
                </h1>
                <p className='text-sm text-[#6B7280]'>{item.subTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomersSaying

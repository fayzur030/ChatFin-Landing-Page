import {
  Brain,
  ChartSpline,
  CreditCard,
  Database,
  Eye,
  File,
  FileCode,
  Radar,
  ShieldHalf,
} from 'lucide-react'

const Capabilities = () => {
  const cardData = [
    {
      id: '1',
      icon: Database,
      title: 'Data Query',
    },
    {
      id: '2',
      icon: Brain,
      title: 'AI Reconciliation',
    },
    { id: '3', icon: ChartSpline, title: 'Analytics' },
    {
      id: '4',
      icon: File,
      title: 'Contract Compliance',
    },
    {
      id: '5',
      icon: File,
      title: 'Document Processing',
    },
    {
      id: '6',
      icon: ChartSpline,
      title: 'Analytics',
    },
    {
      id: '7',
      icon: Radar,
      title: 'AI QCR',
    },
    {
      id: '8',
      icon: FileCode,
      title: 'Invoice Automation',
    },
    {
      id: '9',
      icon: CreditCard,
      title: 'Payment Automation',
    },
    {
      id: '10',
      icon: Eye,
      title: 'Pattern Recognition',
    },
  ]

  return (
    <div className='mt-10 max-w-7xl mx-auto'>
      <div className='flex justify-center gap-2'>
        <div className='flex items-center gap-2 bg-green-100 px-2 py-0.5 rounded-full'>
          <ShieldHalf size={18} color='#10B981' />
          <h4 className='text-base font-medium text-[#374151] '>
            Built with enterprise-grade security
          </h4>
        </div>
      </div>
      <div className='mt-6 lg:mt-10'>
        <h1 className='text-2xl lg:text-3xl font-bold text-center'>
          Capabilities
        </h1>
      </div>

      <div className='mt-5 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:px-0 px-3 md:px-2 items-center justify-center gap-4 lg:mt-8'>
        {cardData.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.id}
              title={item.title}
              className='p-6 rounded-xl flex flex-col items-center justify-center gap-1 bg-[#F9FAFB] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
            >
              <Icon size={28} color='#10B981' />
              <span className='text-lg font-bold text-[#11182C]'>
                {item.title}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Capabilities

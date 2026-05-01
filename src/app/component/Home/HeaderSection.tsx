const HeroSection = () => {
  return (
    <div className='lg:mt-18 mt-8 '>
      <div className='px-2 md:px-2 lg:px-0'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-[#111827] text-center'>
          AI Super Agent for{' '}
          <span className='text-[#10B981]'>
            Finance and <br className='hidden lg:block' /> Accounting
          </span>{' '}
          Teams
        </h1>
        <p className='mt-4 text-center text-[#4B5563] lg:text-lg md:text-lg text-base'>
          AI agents built to handle real work across Controllership, FP&A, AP,
          AR, Tax, <br className='hidden md:block lg:block' /> Treasury and
          operations.
        </p>
      </div>
      {/*button */}

      <div className='mt-4 flex justify-center items-center gap-4 '>
        <button className='px-8 py-3 rounded-full border-2 border-[#D1D5DB] font-medium cursor-pointer'>
          Get started
        </button>
        <button className='px-8 py-3 rounded-full bg-[#10B981] text-[#E5E7EB] shadow-lg  shadow-green-300 font-medium cursor-pointer '>
          Book a demo
        </button>
      </div>
    </div>
  )
}

export default HeroSection

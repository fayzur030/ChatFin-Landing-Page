import React from 'react'

const Journey = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-10 md:py-14'>
      <div className='grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg'>
        <div className='bg-[#E5E7EB] p-8 md:p-10 flex flex-col justify-center'>
          <h1 className='text-[#111827] font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight'>
            Your AI journey <br className='hidden lg:block' /> Starts here
          </h1>

          <p className='text-[#4B5563] text-base md:text-base lg:text-lg mt-5 pl-4 border-l-4 border-[#34D399]'>
            Talk to us to see AI agents in action or discuss{' '}
            <br className='hidden md:hidden lg:block' /> your AI roadmap.
          </p>
        </div>

        <div className='bg-[#F3F4F6] p-8 md:p-10'>
          <h2 className='font-bold text-[#111827] text-xl mb-6'>
            Get Started Today
          </h2>

          <form className='flex flex-col gap-4 '>
            {/* Name */}
            <div>
              <label className='text-sm text-gray-600'>Name</label>
              <input
                type='text'
                placeholder='Enter your name'
                className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#10B981] transition bg-[#FFFFFF]'
              />
            </div>

            {/* Email */}
            <div>
              <label className='text-sm text-gray-600'>Email</label>
              <input
                type='email'
                placeholder='Enter your email address'
                className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#10B981] transition bg-[#FFFFFF]'
              />
            </div>

            {/* Message */}
            <div>
              <label className='text-sm text-gray-600'>Message</label>
              <textarea
                rows={4}
                placeholder='Enter your message'
                className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#10B981] transition resize-none bg-[#FFFFFF]'
              ></textarea>
            </div>

            {/* Button */}
            <button
              type='submit'
              className='mt-2 cursor-pointer bg-[#10B981] hover:bg-emerald-600 text-white py-2 rounded-md font-medium transition'
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Journey

'use client'

type TagProps = {
  label: string
  icon?: React.ReactNode
  className?: string
  active?: boolean
  onClick?: () => void
}

const Tag = ({
  label,
  icon,
  className = '',
  active = false,
  onClick,
}: TagProps) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border transition cursor-pointer
      ${
        active
          ? 'bg-[#10B981] text-white border-[#10B981]'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
      }
      ${className}`}
    >
      {icon && <span className='text-base'>{icon}</span>}
      <span>{label}</span>
    </div>
  )
}

export default Tag

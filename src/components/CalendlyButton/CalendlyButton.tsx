import { Calendar } from 'tabler-icons-react'
import { motion } from 'framer-motion'

type CalendlyButtonProps = {
  onOpenCalendly: () => void
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  iconSize?: number
}

const CalendlyButton = ({
  onOpenCalendly,
  children,
  className = '',
  variant = 'accent',
  size = 'md',
  showIcon = true,
  iconSize = 20,
}: CalendlyButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300'
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl',
    accent: 'bg-accent text-white hover:bg-accent-light shadow-lg hover:shadow-xl',
    outline: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white',
  }
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      onClick={onOpenCalendly}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {showIcon && (
        <motion.div
          className="inline-flex items-center justify-center"
          style={{ transformOrigin: 'center' }}
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ type: 'spring', stiffness: 300, duration: 0.6 }}
        >
          <Calendar size={iconSize} />
        </motion.div>
      )}
      <span>{children || 'Schedule Meeting'}</span>
    </motion.button>
  )
}

export default CalendlyButton


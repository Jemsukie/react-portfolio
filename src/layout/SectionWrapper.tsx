import type { TSectionWrapperProps } from '../lib/props-types'

const SectionWrapper = ({ children, containerClass, paddingSectionClass }: TSectionWrapperProps) => {
  return (
    <div className={containerClass}>
      <div className={paddingSectionClass}>
        {children}
      </div>
    </div>
  )
}

export default SectionWrapper


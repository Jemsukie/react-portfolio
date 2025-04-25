import { TSectionWrapperProps } from '../lib/props-types'

const SectionWrapper = ({ children, containerClass, paddingSectionClass }: TSectionWrapperProps) => {
    return (
        <div className="padding-global">
                <div className={containerClass}>
                    <div className={paddingSectionClass}>
                        {children}
                    </div>
                </div>
        </div>
    )
}

export default SectionWrapper

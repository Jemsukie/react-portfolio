export type TReferenceProps = {
    reference: React.MutableRefObject<null>
    className?: string
}

export type TMenuLinks = {
    [key: string]: {
        title: string
        swap: {
            brand: string
            image: string
        }[]
    }
}

export type TSectionWrapperProps = {
    children: React.ReactNode
    containerClass: string
    paddingSectionClass: string
}

export type TScrollAnimationWrapperProps = {
    children: React.ReactNode
    delay?: number
    className?: string
}

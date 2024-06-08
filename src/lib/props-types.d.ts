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

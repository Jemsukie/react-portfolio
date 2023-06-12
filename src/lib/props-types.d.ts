export type TReferenceProps = {
    reference: React.MutableRefObject<null>
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

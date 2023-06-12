export const goToSection = <T extends HTMLElement>(link: React.RefObject<T>) => link.current && link.current.scrollIntoView({ behavior: 'smooth' })

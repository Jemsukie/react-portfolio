export const goToSection = (ref: React.RefObject<HTMLElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}


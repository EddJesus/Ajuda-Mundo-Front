import { ReactNode } from 'react'

import { Container } from './Home.styles'

interface HomeProps {
  children?: ReactNode
}

export const Home = ({ children }: HomeProps) => {
  return (
    <Container>
      <h1>Home</h1>
      {children}
    </Container>
  )
}

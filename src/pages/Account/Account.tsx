import { ReactNode } from 'react'

import { Container } from './Account.styles'

interface AccountProps {
  children?: ReactNode
}

export const Account = ({ children }: AccountProps) => {
  return (
    <Container>
      <h1>Account</h1>
      {children}
    </Container>
  )
}

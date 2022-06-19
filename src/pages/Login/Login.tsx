import { ReactNode } from 'react'

import { Container, FormTitle, Form, Input, Button } from './Login.styles'

interface LoginProps {
  children?: ReactNode
}

export const Login = ({ children }: LoginProps) => {
  return (
    <Container>
      <Form>
        <FormTitle>Login</FormTitle>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Button>Entrar</Button>
        <h1>Ou</h1>
        <Button>Cadastre-se</Button>
      </Form>
    </Container>
  )
}

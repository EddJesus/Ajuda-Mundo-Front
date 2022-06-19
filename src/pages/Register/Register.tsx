import { useContext } from 'react'

import { Container, FormTitle, Form, Input, Button } from './Register.styles'
import { AuthContext } from '../../contexts'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface RegisterProps {
  children?: JSX.Element
}

export const Register = ({ children }: RegisterProps) => {
  const { register, handleSubmit } = useForm()
  const { signUp } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegister = async (
    ongName: string,
    email: string,
    password: string,
  ) => {
    const loggedIn = await signUp(ongName, email, password)

    if (loggedIn) {
      navigate('/home')
    } else {
      window.alert('Erro ao realizar Register!')
    }
  }

  return (
    <Container>
      <Form
        onSubmit={handleSubmit(({ ongName, email, password }) =>
          handleRegister(ongName, email, password),
        )}
      >
        <FormTitle>Cadastro</FormTitle>
        <Input placeholder="Ong name" type={'text'} {...register('ongName')} />
        <Input placeholder="E-mail" type={'email'} {...register('email')} />
        <Input
          placeholder="Senha"
          type={'password'}
          {...register('password')}
        />
        <Button type="submit">Cadastrar ong</Button>
        <h1>Ou</h1>
        <Button onClick={() => navigate('/')}>
          Se já possui conta, faça login
        </Button>
      </Form>
    </Container>
  )
}

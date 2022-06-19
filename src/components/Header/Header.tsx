import { ReactNode } from 'react'

import Logo from '../../assets/imgs/logo.png'
import DefaultHeaderImage from '../../assets/imgs/header_login.jpeg'

import {
  Container,
  WrapperTitle,
  HeaderImage,
  LogoImage,
} from './Header.styles'

interface HeaderProps {
  children?: ReactNode
  headerImage?: string
}

export const Header = ({
  children,
  headerImage = DefaultHeaderImage,
}: HeaderProps) => {
  return (
    <Container>
      <WrapperTitle>
        <LogoImage src={Logo} />
        <h5>AjudaMundo</h5>
      </WrapperTitle>
      <HeaderImage style={{ backgroundImage: `url(${headerImage})` }} />
      {children}
    </Container>
  )
}

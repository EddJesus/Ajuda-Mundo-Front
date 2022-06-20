import { ReactNode, useContext } from 'react'

import DefaultProfileImage from '../../assets/imgs/default_profile_image.jpg'
import { AuthContext } from '../../contexts'

import {
  Container,
  WrapperProfileInfo,
  ProfileImage,
  LabelOngName,
  LabelOngEmail,
  ButtonLogout,
} from './Account.styles'

export const Account = () => {
  const { ong, signOut } = useContext(AuthContext)

  if (!ong) {
    return signOut()
  }

  return (
    <Container>
      <WrapperProfileInfo>
        <ProfileImage
          style={{
            backgroundImage: `url(${
              ong.profileImg ? ong.profileImg : DefaultProfileImage
            })`,
          }}
        />
        <LabelOngName>{ong.name}</LabelOngName>
        <LabelOngEmail>{ong.email}</LabelOngEmail>
        <ButtonLogout type={'button'} onClick={() => signOut()}>
          Sair da conta
        </ButtonLogout>
      </WrapperProfileInfo>
    </Container>
  )
}

import { ReactNode } from 'react'

import {
  Container,
  WrapperActivityImage,
  WrapperActivityName,
  LabelActivityName,
} from './ActivityCard.styles'
import { ActivityType } from '../../types'

interface ActivityCardProps {
  activity: ActivityType
}

export const ActivityCard = ({ activity }: ActivityCardProps) => {
  return (
    <Container>
      <WrapperActivityImage
        style={{ backgroundImage: `url(${activity.mainImg})` }}
      />
      <WrapperActivityName>
        <LabelActivityName>{activity.name}</LabelActivityName>
      </WrapperActivityName>
    </Container>
  )
}

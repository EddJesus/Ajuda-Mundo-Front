import { ReactNode } from 'react'

import {
  Container,
  WrapperLeft,
  WrapperActivities,
  LabelNoActivities,
  WrapperInformation,
  LabelInformation,
  Indicator,
  WrapperRegisterActivity,
  IconRegisterActivity,
  IconHero,
} from './Home.styles'
import ImageIconActivity from '../../assets/imgs/icon_cadastrar_atividade.png'
import ImageHero from '../../assets/imgs/icon_heroi.png'
import { ActivityCard } from '../../components'
import { ActivityType } from '../../types'

interface HomeProps {
  children?: ReactNode
}

const activitiesMock = [
  {
    name: 'Atividade de ensinar crianças ingles',
    points: 200,
    description: 'Mandar video ensinando ingles para crianças',
    mainImg:
      'https://s2.glbimg.com/2pVJegHOBhTyxFSsBY02uKcByyI=/620x430/e.glbimg.com/og/ed/f/original/2012/10/05/dia_das_criancas.jpg',
    status: 0,
    ongId: 1,
    userId: null,
    realizationField: null,
    activityId: 1,
    createdAt: '2022-06-19T21:01:02.000Z',
    updatedAt: '2022-06-19T21:01:02.000Z',
  },
  {
    name: 'Atividade de ensinar crianças ingles',
    points: 200,
    description: 'Mandar video ensinando ingles para crianças',
    mainImg:
      'https://s2.glbimg.com/2pVJegHOBhTyxFSsBY02uKcByyI=/620x430/e.glbimg.com/og/ed/f/original/2012/10/05/dia_das_criancas.jpg',
    status: 0,
    ongId: 1,
    userId: null,
    realizationField: null,
    activityId: 1,
    createdAt: '2022-06-19T21:01:02.000Z',
    updatedAt: '2022-06-19T21:01:02.000Z',
  },
  {
    name: 'Atividade de ensinar crianças ingles',
    points: 200,
    description: 'Mandar video ensinando ingles para crianças',
    mainImg:
      'https://s2.glbimg.com/2pVJegHOBhTyxFSsBY02uKcByyI=/620x430/e.glbimg.com/og/ed/f/original/2012/10/05/dia_das_criancas.jpg',
    status: 0,
    ongId: 1,
    userId: null,
    realizationField: null,
    activityId: 1,
    createdAt: '2022-06-19T21:01:02.000Z',
    updatedAt: '2022-06-19T21:01:02.000Z',
  },
  {
    name: 'Atividade de ensinar crianças ingles',
    points: 200,
    description: 'Mandar video ensinando ingles para crianças',
    mainImg:
      'https://s2.glbimg.com/2pVJegHOBhTyxFSsBY02uKcByyI=/620x430/e.glbimg.com/og/ed/f/original/2012/10/05/dia_das_criancas.jpg',
    status: 0,
    ongId: 1,
    userId: null,
    realizationField: null,
    activityId: 1,
    createdAt: '2022-06-19T21:01:02.000Z',
    updatedAt: '2022-06-19T21:01:02.000Z',
  },
  {
    name: 'Atividade de ensinar crianças ingles',
    points: 200,
    description: 'Mandar video ensinando ingles para crianças',
    mainImg:
      'https://s2.glbimg.com/2pVJegHOBhTyxFSsBY02uKcByyI=/620x430/e.glbimg.com/og/ed/f/original/2012/10/05/dia_das_criancas.jpg',
    status: 0,
    ongId: 1,
    userId: null,
    realizationField: null,
    activityId: 1,
    createdAt: '2022-06-19T21:01:02.000Z',
    updatedAt: '2022-06-19T21:01:02.000Z',
  },
]

// const activitiesMock: ActivityType[] = []

export const Home = ({ children }: HomeProps) => {
  return (
    <Container>
      <WrapperLeft>
        <Indicator>Cadastrar nova atividade</Indicator>
        <WrapperRegisterActivity>
          <IconRegisterActivity
            src={ImageIconActivity}
            onClick={() => window.alert('teste')}
          />
        </WrapperRegisterActivity>
        <Indicator>Atividades cadastradas</Indicator>
        {activitiesMock.length > 0 ? (
          <WrapperActivities>
            {activitiesMock.map((activity) => (
              <ActivityCard activity={activity} />
            ))}
          </WrapperActivities>
        ) : (
          <LabelNoActivities>Nenhuma atividade cadastrada</LabelNoActivities>
        )}
      </WrapperLeft>
      <WrapperInformation>
        <LabelInformation>
          O AjudaMundo Nasceu com o espírito de ajudar o próximo e fazer a
          diferença na sociedade! Empatia, amizade, colaboração e criatividade
          são as palavras que representam nosso time, quer você fazer a
          diferença também? Se junte ao AjudaMundo!
        </LabelInformation>
        <IconHero src={ImageHero} />
      </WrapperInformation>
    </Container>
  )
}

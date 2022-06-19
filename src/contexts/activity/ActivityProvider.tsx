import { ActivityContext } from './ActivityContext'
import { useApi } from '../../hooks'
import { ActivityType, CreateActivityType } from '../../types'

type ActivityProviderType = {
  children: JSX.Element
}

export const ActivityProvider = ({ children }: ActivityProviderType) => {
  const api = useApi()

  const getActivities = async (): Promise<ActivityType[]> => {
    try {
      const token = localStorage.getItem('access-token')

      if (token) {
        const { activities } = await api.getActivities(token)
        return activities
      } else {
        throw new Error('Falha na requisição axios!')
      }
    } catch (error) {
      console.log('Erro ao buscar atividades', error)
      throw error
    }
  }

  const createActivity = async (
    fields: CreateActivityType,
  ): Promise<boolean> => {
    try {
      const token = localStorage.getItem('access-token')

      if (token) {
        const response = await api.createActivity(token, fields)
        if (response.result.activityId) {
          return true
        } else {
          throw new Error('Falha ao criar atividade!')
        }
      } else {
        throw new Error('Falha na requisição axios!')
      }
    } catch (error) {
      console.log('Erro ao criar atividade', error)
      throw error
    }
  }

  return (
    <ActivityContext.Provider value={{ getActivities, createActivity }}>
      {children}
    </ActivityContext.Provider>
  )
}

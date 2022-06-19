import { createContext } from 'react'
import { ActivityType, CreateActivityType } from '../../types'

export type ActivityContextType = {
  getActivities: () => Promise<ActivityType[]>
  createActivity: (fields: CreateActivityType) => Promise<boolean>
}

export const ActivityContext = createContext<ActivityContextType>(null!)

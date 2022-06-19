import { createContext } from 'react'

import { OngType } from '../../types'

export type AuthContextType = {
  ong: OngType | null
  signIn: (email: string, password: string) => Promise<boolean>
  signOut: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)

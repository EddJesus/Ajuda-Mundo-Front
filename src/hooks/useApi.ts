import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const useApi = () => ({
  validateToken: async (token: string) => {},
  signIn: async (email: string, password: string) => {
    const response = await api.post('/ong/login', { email, password })

    return response.data
  },
  getOngData: async (token: string) => {
    const response = await api.get('/ong/login/get-ong', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  },
  signUp: async (ongName: string, email: string, password: string) => {
    const response = await api.post('/ong', { name: ongName, email, password })

    return response.data
  },
})

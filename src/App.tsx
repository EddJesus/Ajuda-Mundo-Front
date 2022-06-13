import { useState } from 'react'
import { Home } from './pages/Home'
import { Ong } from './pages/Ong'
import { Login } from './pages/Login'
import './App.css'
import { EditOng } from './pages/Ong/editOng/EditOng'
import { EditAtividadeOng } from './pages/Ong/editAtividadeOng/EditAtividadeOng'
import { CreateAtividadeOng } from './pages/Ong/createAtividadeOng/createAtividadeOng'
import { AtividadeOng } from './pages/Ong/atividadeOng/atividadeOng'
import { AtividadeUser } from './pages/User/atividadeUser/atividadeUser'
import { User } from './pages/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />
  )
}

export default App

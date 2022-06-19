import React from 'react'

import GlobalStyles from './styles/GlobalStyles'

import { Routing } from './routes/index'
import { AuthProvider } from './contexts'

function App() {
  return (
    <>
      <AuthProvider>
        <Routing />
      </AuthProvider>
      <GlobalStyles />
    </>
  )
}

export default App

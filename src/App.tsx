import React from 'react'

import GlobalStyles from './styles/GlobalStyles'

import { Routing } from './routes/index'
import { Header, Footer } from './components'

function App() {
  return (
    <>
      <Header />
      <Routing />
      <GlobalStyles />
      <Footer />
    </>
  )
}

export default App

import React, { useContext } from 'react'

import { Login, Home, NotFound } from '../pages'
import { Header, Footer } from '../components'
import { AuthContext, RequireAuth } from '../contexts'

import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom'

const Routing = () => {
  const { ong } = useContext(AuthContext)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ong ? <Navigate to={'/home'} /> : <Login />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export { Routing }

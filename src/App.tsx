import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './features/layout/layout'
import Home from './features/layout/Home'
import User from './features/user/User'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<User />} />
      </Route>
    </Routes>
  )
}

export default App

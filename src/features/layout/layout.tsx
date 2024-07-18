import React from 'react'
import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <Stack>
      <Header />
      <Stack direction={'row'} spacing={1}>
        <Box>
          <Stack spacing={1}>
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
          </Stack>
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Stack>
      <Footer />
    </Stack>
  )
}

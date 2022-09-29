import React from 'react'
import { Container } from '@chakra-ui/react'

export const Layout = ({ children }): JSX.Element => {
  return (
    <Container maxW='1200px'>
      {children}
    </Container>
  )
}

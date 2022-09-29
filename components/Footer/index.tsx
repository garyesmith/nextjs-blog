import React from 'react'
import { Box, Text, Spacer } from '@chakra-ui/react'

export const Footer = (): JSX.Element => {
  return (
    <Box marginTop='6' marginBottom='33'>
        <Text fontSize="xs" color='gray.600'>&copy; 2022 All Rights Reserved.</Text>
        <Spacer h={10} />
    </Box>
  )
}

import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export const Introduction = ({ children }): JSX.Element => {
  return (
    <Box marginTop='10' marginBottom='10'>
      <Text fontSize='1xl'>{children}</Text>
    </Box>
  );
}


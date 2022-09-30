import React from 'react'
import Link from 'next/link'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export const Header = (): JSX.Element => {
  return (
    <>
      <Box 
        bgGradient='linear(to-r, blue.700, gray.300)' 
        boxShadow='xl' 
        borderRadius='lg' 
        overflow='hidden' 
        marginTop='5' 
        paddingLeft='3'
        paddingRight='3'
        paddingTop='6'
        paddingBottom='6'
        marginBottom='5'
        >
        <HStack color='white' _hover={{ color: 'blue.100', cursor: 'pointer' }}>
          <Link href="/">
            <StarIcon w={10} h={10} marginLeft='3' marginRight='2' />
          </Link>
          <Link href="/">
            <Heading as='h1' size='xl' noOfLines={1} data-testid="mainHeading">A Demo Blog</Heading>
          </Link>
        </HStack>
      </Box>
    </>
  )
}

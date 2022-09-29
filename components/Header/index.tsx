import React from 'react'
import { useRouter } from 'next/router'
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
        marginBottom='5'
        >
        <Heading as='h1' size='xl' noOfLines={1} color='white' padding='6'>
          <HStack color='white' _hover={{ color: 'blue.50', cursor: 'pointer' }}>
            <Link href="/"><><StarIcon marginRight='3' />A Demo Blog</></Link>
          </HStack>
        </Heading>
      </Box>
    </>
  )
}

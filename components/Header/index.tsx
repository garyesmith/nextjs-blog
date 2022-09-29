import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export const Header = (): JSX.Element => {
  return (
    <>
      <Box bgGradient='linear(to-r, blue.700, gray.300)' boxShadow='xl' borderRadius='lg' overflow='hidden' marginTop='5' marginBottom='5'>
        <Heading as='h1' size='xl' noOfLines={1} color='white' padding='6'>
          <HStack>
            <StarIcon color="white" marginRight='1' />
            <Link href="/">Demo Blog</Link>
          </HStack>
        </Heading>
      </Box>
    </>
  )
}

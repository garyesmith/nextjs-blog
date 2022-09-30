import React from 'react'
import { Box, Text, HStack, Flex, Spacer } from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export const Footer = (): JSX.Element => {
  return (
    <Box paddingTop='12' paddingBottom='12'>
      <Flex>
        <Text fontSize="xs" color='gray.600' data-testid="footerText">&copy; {new Date().getFullYear()} Some Corp. All Rights Reserved.</Text>
        <Spacer />
        <HStack>
          <a href="https://www.facebook.com" target="_blank"><FaFacebook color="#4267B2"/></a>
          <a href="https://www.twitter.com" target="_blank"><FaTwitter color="#1DA1F2" /></a>
          <a href="https://www.instagram.com" target="_blank"><FaInstagram color="gray" /></a>
        </HStack>
      </Flex>
    </Box>
  )
}

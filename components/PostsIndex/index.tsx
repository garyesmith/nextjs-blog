import React, { useState } from 'react'
import { usePosts } from '../../hooks/usePosts'
import NextLink from 'next/link';
import { Center, Button, SimpleGrid, Box, Heading, Text, Link, Badge, HStack, keyframes } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { format } from 'date-fns'

export const PostsIndex = (): JSX.Element => {
  const [postCount, setPostCount] = useState(5);
  const { data, isLoading, isFetching } = usePosts(postCount)

  if (isLoading) return <div>Loading</div>

  function addMorePosts(e) {
    setPostCount(postCount + 5);
  }

  const animationKeyframes = keyframes`
    0% { transform: scale(0.9) }
    50% { transform: scale(1.1) }
    100% { transform: scale(1) }
  `;

  const animation = `${animationKeyframes} 1s ease-in-out`;

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <SimpleGrid minChildWidth='270px' spacing='20px'>
        {data?.map((post, postIndex) => (
          <Box 
            key={post.id} 
            borderWidth='0' 
            borderRadius='md'
            boxShadow='xl'
            overflow = 'hidden' 
            padding='0'
            bgColor='white'
            animation={animation}
            paddingBottom='5'
          >
            <NextLink href={`/posts/${encodeURIComponent(post.id)}`} passHref>
              <Link>
                <Box 
                  bgColor='blue.800' 
                  paddingTop='8' 
                  paddingBottom='4'
                  paddingLeft='4' 
                  paddingRight='4'>
                    <Heading fontSize='3xl' color='white'>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</Heading>
                </Box>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  paddingTop='5'
                  paddingLeft='3'
                  paddingRight='3'
                  paddingBottom='2'
                >
                  <HStack>
                    <Text>Posted {format(new Date(post.createdAt), 'MMM d, yyyy')}</Text>
                    {postIndex==0 && <Badge borderRadius='full' px='2' bgColor='orange' marginLeft="3">Newest</Badge>}
                  </HStack>
                </Box>
                <Box 
                  paddingTop='2' 
                  paddingLeft='3' 
                  paddingRight='3' 
                  paddingBottom='2'>
                  <Text noOfLines={4}>{post.description}</Text>
                </Box>
                <Box
                  color='gray.800'
                  fontWeight='normal'
                  letterSpacing='normal'
                  fontSize='xs'
                  paddingLeft='1'
                  paddingTop='2'
                  paddingBottom='2'
                  ml='2'
                >
                  By {post.authors?.map((author, index) => {
                      if (index<post.authors.length-1) {
                        return (
                          <span><b>{author.name}</b> and </span>
                        )
                      } else {
                        return (
                          <b>{author.name}</b>
                        )                       
                      }
                    }
                  )}
                </Box>
              </Link>
            </NextLink>
          </Box>
        ))}
      </SimpleGrid>
      {postCount <= 95 && (
        <Center>
          <Button
            leftIcon={<ChevronDownIcon />}
            colorScheme='blue'
            marginTop='8'
            marginBottom='8'
            onClick={addMorePosts}
            disabled={isFetching}
            loadingText='Loading...'
            isLoading={isFetching}
          >
            More Posts
          </Button>
        </Center>
      )}
    </Box>
  )
}

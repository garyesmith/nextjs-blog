import React, { useState } from 'react'
import { usePosts } from '../../hooks/usePosts'
import NextLink from 'next/link';
import { Center, Button, SimpleGrid, Box, Heading, Text, Link, keyframes } from '@chakra-ui/react'
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
        {data?.map((post) => (
          <Box 
            key={post.id} 
            borderWidth='0' 
            borderRadius='md'
            boxShadow='xl'
            overflow = 'hidden' 
            padding='0'
            bgColor='white'
            animation={animation}
          >
            <NextLink href={`/posts/${encodeURIComponent(post.id)}`} passHref>
              <Link>
                <Box 
                  bgColor='orange.900' 
                  paddingTop='6' 
                  paddingBottom='2'
                   paddingLeft='3' 
                   paddingRight='3'>
                    <Heading fontSize='3xl' color='white'>{post.title}</Heading>
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
                  Posted {format(new Date(post.createdAt), 'MMM d, yyyy')}
                </Box>
                <Box 
                  paddingTop='2' 
                  paddingLeft='3' 
                  paddingRight='3' 
                  paddingBottom='2'>
                  <Text noOfLines={4}>{post.description}</Text>
                </Box>
                <Text>By {post.authors?.map((author, index) => {
                      let name=author.name;
                      if (index<post.authors.length-1) name+=' and ';
                      return name;
                    }
                  )}
                </Text>
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

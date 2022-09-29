import React, { useState } from 'react'
import { usePosts } from '../../hooks/usePosts'
import NextLink from 'next/link';
import { Center, Button, SimpleGrid, Box, Heading, Text, Link, Badge, HStack, keyframes } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { format } from 'date-fns'

export const PostsIndex = (): JSX.Element => {
  const [postCount, setPostCount] = useState(5);
  const [isMorePosts, setIsMorePosts] = useState(true);
  const { data, isLoading, isFetching } = usePosts(postCount);

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
      <SimpleGrid minChildWidth='270px' spacing='20px' marginBottom='5'>
        {data.pageData?.map((post, postIndex) => (
          <Box 
            key={postIndex} 
            _hover={{ backgroundColor: 'blue.50' }}
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
              <Link _hover={{ textDecoration: 'none' }}>
                <Box 
                  bgColor='black'
                  paddingTop='3' 
                  paddingBottom='3'
                  paddingLeft='4' 
                  paddingRight='4'>
                    <Heading fontSize='2xl' color='white'>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</Heading>
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
                          <span key={index}><b>{author.name}</b> and </span>
                        )
                      } else {
                        return (
                          <b key={index}>{author.name}</b>
                        )                       
                      }
                    }
                  )}
                </Box>                
                <Box 
                  paddingTop='2' 
                  paddingLeft='3' 
                  paddingRight='3' 
                  paddingBottom='2'>
                  <Text noOfLines={4}>{post.description}</Text>
                </Box>
              </Link>
            </NextLink>
          </Box>
        ))}
      </SimpleGrid>
      {postCount<data.total && (
        <Center>
          <Button
            leftIcon={<ChevronDownIcon />}
            bgColor='blue.700'
            _hover={{backgroundColor: 'blue.600'}}
            color='white'
            marginTop='2'
            marginBottom='8'
            onClick={addMorePosts}
            disabled={isFetching}
            loadingText='Loading...'
            isLoading={isFetching}
            paddingRight='6'
          >
            More Posts
          </Button>
        </Center>
      )}
    </Box>
  )
}

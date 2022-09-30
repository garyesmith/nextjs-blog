import React, { useState } from 'react'
import { usePosts } from '../../hooks/usePosts'
import NextLink from 'next/link';
import { Center, Button, SimpleGrid, Box, Heading, Text, Link, Badge, HStack, Avatar, Spacer, ScaleFade } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { format } from 'date-fns'

export const PostsIndex = (): JSX.Element => {
  const [postCount, setPostCount] = useState(5);
  const { data, isLoading, isFetching } = usePosts(postCount);

  if (isLoading) return <div>Loading</div>

  function addMorePosts(e) {
    setPostCount(postCount + 5);
  }

  return (
    <Box data-testid="posts_index_component">    
      <SimpleGrid minChildWidth='270px' spacing='20px' marginBottom='12'>
        {data.pageData?.map((post, postIndex) => (
          <ScaleFade
            key={postIndex}
            initialScale={0.8}
            in={true}
          >
            <Box 
              _hover={{ backgroundColor: 'blue.50' }}
              borderWidth='0' 
              borderRadius='md'
              boxShadow='xl'
              overflow = 'hidden' 
              padding='0'
              bgColor='white'
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
                      <Heading fontSize='2xl' color='white' data-testid="posts_index_heading">{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</Heading>
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
                      <Text>Published {format(new Date(post.createdAt), 'MMM d, yyyy')}</Text>
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
                  
                    <HStack margin='2'>
                    {post.comments.length>0 && (
                      <Text margin='2' color='gray.500' fontSize='sm'>{post.comments.length} Comments</Text>
                    )}
                    {post.comments.length<=0 && (
                      <Text />
                    )}
                      <Spacer />
                      <Box>
                        {post.authors?.map((author) => (
                          <Avatar key={author.id} size="xs" margin="1" name={author.name} src={author.avatar} />
                        ))}
                      </Box> 
                    </HStack>
                  
                </Link>
              </NextLink>
            </Box>
          </ScaleFade>
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

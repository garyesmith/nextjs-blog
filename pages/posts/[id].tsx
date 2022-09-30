import React, { useState, useEffect } from 'react'
import { Layout, Header, Footer } from '../../components'
import { fetchOnePost, fetchAllPostIds } from '../../hooks'
import { Heading, Text, Box, Button, Link, HStack, Avatar } from '@chakra-ui/react'
import { ChevronLeftIcon, ChatIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import { format } from 'date-fns'

const Post = ({ post }): JSX.Element => {

  const [headingTitle, setHeadingTitle] = useState('A Demo Blog');
  const [pageTitle, setPageTitle] = useState('A Demo Blog');


  useEffect(() => {
    setHeadingTitle(post.title.charAt(0).toUpperCase() + post.title.slice(1));
    setPageTitle(post.title.charAt(0).toUpperCase() + post.title.slice(1) + ' | A Demo Blog');
  }, []);

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />   
      </Head>       
      <Header />
      <Heading marginTop='12' marginBottom='2'>{headingTitle}</Heading>
      <Box
        color='black'
        fontWeight='normal'
        letterSpacing='normal'
        fontSize='sm'
        paddingTop='3'
        paddingBottom='3'
      >
        <HStack>
          {post.authors?.map((author, index) => (
            <Box key={author.id} marginRight="3"><Avatar size="xs" name={author.name} src={author.avatar} /> {author.name}</Box>
          ))}
        </HStack>
      </Box>      
      <Text
       color='black'
       fontWeight='semibold'
       letterSpacing='wide'
       fontSize='sm'
       textTransform='none'
       marginBottom='2'>
        Published {format(new Date(post.createdAt), 'MMMM d, yyyy h:mm:ss')}.
        {post.updatedAt.length && post.createdAt !== post.updatedAt && (
          <>&nbsp;Updated {format(new Date(post.updatedAt), 'MMMM d, yyyy h:mm:ss')}</>
        )}
      </Text>
      <Text marginTop='6' marginBottom='3' fontSize='lg' width='95%'>
        {post.description}
      </Text>
      <Box>
        <Heading fontSize="lg" marginTop="6">Comments</Heading>
        {post.comments.map((comment) => (
          <Box key={comment.id} bgColor="gray.100" borderRadius="md" marginTop="5" marginBottom="5" padding="5">
            <HStack>
              <ChatIcon w={10} h={10} color="gray.300" marginRight="5" />
              <Box>
                <Text fontWeight="bold" fontSize="sm" marginBottom="1">{comment.title}</Text>
                <Text fontWeight="normal" fontSize="sm" marginBottom="1">{comment.description}</Text>
                <Text fontWeight="normal" fontSize="xs" color="gray.600">{format(new Date(comment.updatedAt), 'MMMM d, yyyy h:mm:ss')}</Text>
              </Box>
            </HStack>
          </Box>
        ))}
      </Box>
      <Link href="/">
        <Button
              leftIcon={<ChevronLeftIcon />}
              bgColor='blue.700'
              _hover={{backgroundColor: 'blue.600'}}
              color='white'
              marginTop='2'
              marginBottom='8'
              paddingRight='6'
            >
              Back to Index
        </Button>
      </Link>
      <Footer />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await fetchAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await fetchOnePost(params.id);
  return {
    props: {
      post,
    },
  };
}

export default Post

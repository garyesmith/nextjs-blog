import React, { useState, useEffect } from 'react'
import { Layout, Header, PostFull, Footer } from '../../components'
import { fetchOnePost, fetchAllPostIds } from '../../hooks'
import { Heading, Text, Box, Button, Link, HStack, Avatar } from '@chakra-ui/react'
import { ChevronLeftIcon, ChatIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import { format } from 'date-fns'

const Post = ({ post }): JSX.Element => {
  const [pageTitle, setPageTitle] = useState('A Demo Blog');

  useEffect(() => {
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
      <PostFull {...post} />
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

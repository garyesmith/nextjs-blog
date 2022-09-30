import React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Layout, Header, Introduction, PostsIndex, Footer } from '../components'
import { fetchPosts } from '../hooks'
import Head from 'next/head'

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>A Demo Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />   
      </Head>  
      <Header />
      <Introduction>Welcome to my blog. Lorem ipsum dolor sit amet.</Introduction>
      <PostsIndex />
      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['posts', 5], () => fetchPosts(5))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home

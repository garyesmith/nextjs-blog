import React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Layout, Header, Introduction, PostsIndex, Footer } from '../components'
import { fetchPosts } from '../hooks'

const Home = (): JSX.Element => {
  return (
    <Layout>
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

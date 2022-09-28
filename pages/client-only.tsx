import React from 'react'
import { Layout, Header, Introduction, PostsIndex } from '../components'

const ClientOnly = (): JSX.Element => {
  return (
    <Layout>
      <Header />
      <Introduction>Welcome to my blog. Lorem ipsum dolor sit amet.</Introduction>
      <PostsIndex />
    </Layout>
  )
}

export default ClientOnly

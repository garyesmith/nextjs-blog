import React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Layout, Header, Footer } from '../../components'
import { fetchOnePost, fetchAllPostIds } from '../../hooks'

const Post = ({ postData }): JSX.Element => {
  return (
    <Layout>
      <Header />
      <h1>{postData.title}</h1>
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
  const postData = await fetchOnePost(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default Post

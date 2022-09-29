import React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Layout, Header, Footer } from '../../components'
import { fetchOnePost, fetchAllPostIds } from '../../hooks'
import Head from 'next/head'

const Post = ({ postData }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | A Demo Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>       
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

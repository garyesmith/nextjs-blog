import ky from 'ky-universal'
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async (limit: number = 5) => {
  const parsed = await ky('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts').json()
  const result = parsed.filter((x) => x.id <= limit)
  return result
}

const usePosts = (limit: number) => {
  return useQuery(['posts', limit], () => fetchPosts(limit))
}

const fetchOnePost = async (id: string) => {
  const parsed = await ky('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts').json()
  const result = parsed.filter((x) => x.id == id)
  return {
    id,
    ...result[0],
  };
}

const useOnePost = (limit: number) => {
  return useQuery(['posts', limit], () => fetchOnePost(limit))
}

const fetchAllPostIds = async () => {
  const parsed = await ky('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts').json()

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return parsed.map((x) => {
    return {
      params: {
        id: x.id,
      },
    };
  });
}

export { usePosts, fetchPosts, fetchAllPostIds, useOnePost, fetchOnePost }

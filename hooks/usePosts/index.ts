import ky from 'ky-universal'
import { useQuery } from '@tanstack/react-query'

const postsEndpointUri='https://express-api-for-vercel-garyesmith.vercel.app/posts';

const fetchPosts = async (limit: number = 4) => {
  let parsed: any = await ky(postsEndpointUri);
  parsed=await parsed.json();
  const totalPosts=parsed.length;
  parsed.sort(function(a, b) {
    return b.createdAt.localeCompare(a.createdAt);
  });
  return {
    total: totalPosts,
    pageData: parsed.slice(0,limit)
  }
}

const usePosts = (limit: number) => {
  return useQuery(['posts', limit], () => fetchPosts(limit), { keepPreviousData: true })
}

const fetchOnePost = async (id: string) => {
  const parsed: any = await ky(postsEndpointUri).json()
  const result = parsed.filter((x) => x.id == id)
  return {
    id,
    ...result[0],
  };
}

const useOnePost = (id: string) => {
  return useQuery(['posts', id], () => fetchOnePost(id))
}

const fetchAllPostIds = async () => {
  const parsed: any = await ky(postsEndpointUri).json()

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

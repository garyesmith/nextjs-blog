import ky from 'ky-universal'
import { useQuery } from '@tanstack/react-query'
import { parse } from 'path';

const fetchPosts = async (limit: number = 5) => {
  let parsed: any = await ky('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts');
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
  const parsed: any = await ky('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts').json()
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
  const parsed: any = await ky('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts').json()

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

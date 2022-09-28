import React, { useState } from 'react'
import { usePosts } from '../../hooks/usePosts'
import Link from 'next/link';

export const PostsIndex = (): JSX.Element => {
  const [postCount, setPostCount] = useState(5)
  const { data, isLoading, isFetching } = usePosts(postCount)

  if (isLoading) return <div>Loading</div>

  return (
    <section>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <div>
            <Link href={`/posts/${encodeURIComponent(post.id)}`}>
              <a>{post.title}</a>
            </Link>
            </div>
          </li>
        ))}
      </ul>
      {postCount <= 95 && (
        <button
          onClick={() => setPostCount(postCount + 5)}
          disabled={isFetching}
        >
          {isFetching ? 'Loading...' : 'Show More'}
        </button>
      )}
    </section>
  )
}

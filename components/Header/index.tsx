import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Header = (): JSX.Element => {
  return (
    <header>
      <h1><Link href="/">BLOG</Link></h1>
    </header>
  )
}

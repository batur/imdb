import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <nav>
      <div>
        <Link href="/">
          <h1>DEMO Streaming</h1>
        </Link>
      </div>
      <div>
        <button>Log in</button>
        <button>Start your free trial</button>
      </div>
    </nav>
  )
}

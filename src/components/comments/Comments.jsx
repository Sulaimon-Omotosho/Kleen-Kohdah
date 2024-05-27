'use client'

import React, { useState } from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)

  const data = await res.json()

  if (!res.ok) {
    const error = new Error(data.message)
    throw error
  }

  return data
}

const Comments = ({ postSlug }) => {
  const { status } = useSession()

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}` ||
      `https://uncle-sula-blog.vercel.app/api/comments?postSlug=${postSlug}`,
    fetcher
  )

  const [desc, setDesc] = useState('')

  const handleSubmit = async () => {
    if (!desc.trim()) return

    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc, postSlug }),
    })
    setDesc('')
    mutate()
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            placeholder='Write a comment...'
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href='/login'>Login to comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? 'Loading...'
          : data?.map((comment) => (
              <div className={styles.comment} key={comment._id}>
                <div className={styles.user}>
                  {comment?.user?.image && (
                    <Image
                      src={comment.user.image}
                      alt='user'
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}

                  <div className={styles.userInfo}>
                    <span className={styles.username}>{comment.user.name}</span>
                    <span className={styles.date}>
                      {comment.createdAt.substring(11, 16)} -{' '}
                      {comment.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Comments

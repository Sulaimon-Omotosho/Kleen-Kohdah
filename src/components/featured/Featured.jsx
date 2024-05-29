import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
import Link from 'next/link'

const getData = async () => {
  const res = await fetch(
    // `http://localhost:3000/api/posts/${slug}` ||
    `https://uncle-sula-blog.vercel.app/api/posts/the-frustrations-of-a-new-web-developer`
    // {
    //   cache: 'no-cache',
    // }
  )

  if (!res.ok) {
    throw new Error('Post not found')
  }

  return res.json()
}

const Featured = async () => {
  const data = await getData()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Yall!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        {data?.img && (
          <div className={styles.imgContainer}>
            <Image
              src={data?.img}
              alt='placeholder'
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            <Link href={`/posts/${data?.slug}`}>{data?.title}</Link>
          </h1>
          <div className={styles.postDesc}>
            <p
              dangerouslySetInnerHTML={{ __html: data?.desc.substring(0, 100) }}
            />
            ...
          </div>
          <Link href={`/posts/${data?.slug}`} className={styles.button}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Featured

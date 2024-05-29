import React from 'react'
import styles from './menuPosts.module.css'
// import { popular } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const data = async () => {
  const res = await fetch(
    `http://localhost:3000/api/popular` ||
      `https://uncle-sula-blog.vercel.app/api/popular`
  )

  if (!res.ok) {
    throw new Error('Posts not found')
  }

  return res.json()
}

// const data = getData()
// console.log(data)

const MenuPosts = async ({ withImage }) => {
  const popular = await data()
  // console.log(popular)

  return (
    <div className={styles.items}>
      {popular?.map((pop) => (
        <Link
          key={pop?.id}
          href={`/posts/${pop?.slug}`}
          className={styles.item}
        >
          {withImage && (
            <div className={styles.imgContainer}>
              <Image src={pop?.img} alt='img' fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span
              className={styles.category}
              style={{ background: pop?.cat?.color }}
            >
              {pop?.cat?.title}
            </span>
            <h3 className={styles.postTitle}>{pop?.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{pop?.user?.name}</span>
              <span className={styles.date}>
                {' '}
                - {pop?.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPosts

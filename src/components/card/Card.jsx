import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ key, post }) => {
  return (
    <div className={styles.container} key={key}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt='image' fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {post.createdAt.substring(0, 10)} -{' '}
          </span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
        <div className={styles.desc}>
          <p
            dangerouslySetInnerHTML={{ __html: post?.desc.substring(0, 100) }}
          />
          ...
        </div>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card

import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const baseURL = 'https://uncle-sula-blog.vercel.app'

  const res = await fetch(`${baseURL}/api/categories`)

  if (!res.ok) {
    throw new Error('Categories not found')
  }

  return res.json()
}

const CategoryList = async () => {
  const data = await getData()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data.map((cat, idx) => (
          <Link
            key={idx}
            href={`/blog?cat=${cat.title}`}
            className={styles.category}
            style={{ background: cat.color }}
          >
            {cat.img && (
              <Image
                src={cat.img}
                alt={cat.title}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {cat.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList

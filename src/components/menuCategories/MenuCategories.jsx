import React from 'react'
import styles from './menuCategories.module.css'
import Link from 'next/link'

const getData = async () => {
  const baseURL = 'https://uncle-sula-blog.vercel.app'

  const res = await fetch(`${baseURL}/api/categories`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Categories not found')
  }

  return res.json()
}

const MenuCategories = async () => {
  const data = await getData()

  return (
    <div className={styles.categoryList}>
      {data?.map((cat, idx) => (
        <Link
          key={idx}
          href={`/blog?cat=${cat?.title}`}
          className={styles.categoryItem}
          style={{ background: cat?.color }}
        >
          {cat?.title}
        </Link>
      ))}
    </div>
  )
}

export default MenuCategories

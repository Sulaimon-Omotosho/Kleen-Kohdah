import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/constants'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            href={`/blog?cat=${cat.cat}`}
            className={styles.category}
            style={{ background: cat.color }}
          >
            <Image
              src={cat.img}
              alt={cat.cat}
              width={32}
              height={32}
              className={styles.image}
            />
            {cat.cat}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList

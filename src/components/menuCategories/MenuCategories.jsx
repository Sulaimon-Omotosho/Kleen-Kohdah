import React from 'react'
import styles from './menuCategories.module.css'
import { categories } from '@/constants'
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      {categories.map((cat, idx) => (
        <Link
          key={idx}
          href={`/blog?cat=${cat.cat}`}
          className={styles.categoryItem}
          style={{ background: cat.color }}
        >
          {cat.cat}
        </Link>
      ))}
    </div>
  )
}

export default MenuCategories

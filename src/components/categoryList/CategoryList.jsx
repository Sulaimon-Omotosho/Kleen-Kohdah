import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  { img: '/style.png', cat: 'style', color: '#57c4ff31' },
  { img: '/fashion.png', cat: 'fashion', color: '#da85c731' },
  { img: '/food.png', cat: 'food', color: '#7fb88133' },
  { img: '/travel.png', cat: 'travel', color: '#ff795736' },
  { img: '/culture.png', cat: 'culture', color: '#ffb04f45' },
  { img: '/coding.png', cat: 'coding', color: '#5e4fff31' },
]

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

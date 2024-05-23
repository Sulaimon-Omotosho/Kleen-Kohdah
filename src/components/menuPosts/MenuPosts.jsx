import React from 'react'
import styles from './menuPosts.module.css'
import { popular } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      {popular.map((pop, idx) => (
        <Link key={idx} href='/' className={styles.item}>
          {withImage && (
            <div className={styles.imgContainer}>
              <Image src='/p1.jpeg' alt='img' fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={styles.category} style={{ background: pop.color }}>
              {pop.cat}
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Sulaimon Omotosho</span>
              <span className={styles.date}> - 26.06.2024</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPosts

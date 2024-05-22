import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/p1.jpeg' alt='image' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>26.06.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href='/'>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          libero vel. Laudantium, tempora id? Nulla officia neque officiis ab?
          Veniam eveniet magnam reiciendis cumque esse debitis, quam ab nostrum,
          quibusdam architecto asperiores ipsa fuga...
        </p>
        <Link href='/' className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card

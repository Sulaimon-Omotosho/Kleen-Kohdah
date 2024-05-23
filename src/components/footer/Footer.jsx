import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src='/unclesula-logo.png'
            alt='Uncle Sula'
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>Uncle Sula</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          cumque quae aliquid amet vero fuga voluptates ipsam harum, laborum
          quod corporis! Quo aperiam vel, vitae illum beatae debitis assumenda.
          Enim?
        </p>
        <div className={styles.icons}>
          <Image src='/facebook.png' alt='social' width={18} height={18} />
          <Image src='/instagram.png' alt='social' width={18} height={18} />
          <Image src='/tiktok.png' alt='social' width={18} height={18} />
          <Image src='/youtube.png' alt='social' width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Tiktok</Link>
          <Link href='/'>Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

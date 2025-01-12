import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='instagram' width={24} height={24} />
        <Image src='/tiktok.png' alt='tiktok' width={24} height={24} />
        <Image src='/youtube.png' alt='youtube' width={24} height={24} />
      </div> */}
      <div className={styles.logo}>
        <Link href='/'>Uncle Sula</Link>
      </div>
      <div className={styles.right}>
        <ThemeToggle />
        <div className={styles.links}>
          <Link href='/' className={styles.link}>
            Homepage
          </Link>
          {/* <Link href='/' className={styles.link}>
            Contact
          </Link>
          <Link href='/' className={styles.link}>
            About
          </Link> */}
          <AuthLinks />
        </div>
      </div>
    </div>
  )
}

export default Navbar

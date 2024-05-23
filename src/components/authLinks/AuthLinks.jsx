'use client'

import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const status = 'authenticated'

  return (
    <div className={styles.container}>
      {status === 'notauthenticated' ? (
        <Link href='/login' className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href='/post' className={styles.link}>
            Post
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          {status === 'notauthenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='/post'>Post</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default AuthLinks

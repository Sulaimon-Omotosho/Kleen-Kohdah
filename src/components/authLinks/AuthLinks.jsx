'use client'

import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const { status } = useSession()

  return (
    <div className={styles.container}>
      {status === 'unauthenticated' ? (
        <Link href='/login' className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href='/post' className={styles.link}>
            Post
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/' onClick={() => setOpen(!open)}>
            Homepage
          </Link>
          <Link href='/' onClick={() => setOpen(!open)}>
            About
          </Link>
          <Link href='/' onClick={() => setOpen(!open)}>
            Contact
          </Link>
          {status === 'unauthenticated' ? (
            <Link href='/login' onClick={() => setOpen(!open)}>
              Login
            </Link>
          ) : (
            <>
              <Link href='/post' onClick={() => setOpen(!open)}>
                Post
              </Link>
              <span onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default AuthLinks

'use client'

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext)

  // console.log(theme)

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === 'dark' ? { background: 'white' } : { background: '#0f172a' }
      }
    >
      <Image src='/moon.png' alt='moon' width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === 'dark'
            ? {
                background: '#0f172a',
                left: 1,
                boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.8)',
              }
            : {
                background: 'white',
                right: 1,
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
              }
        }
      ></div>
      <Image src='/sun.png' alt='sun' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle

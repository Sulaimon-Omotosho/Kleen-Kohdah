import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const status = 'authenticated'

const Comments = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea placeholder='Write a comment...' className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href='/login'>Login to comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt='user'
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>Sulaimon Omotosho</span>
              <span className={styles.date}>26.06.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            temporibus iste blanditiis, unde voluptatum eos dolore ipsum
            laboriosam voluptate harum.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt='user'
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>Sulaimon Omotosho</span>
              <span className={styles.date}>26.06.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            temporibus iste blanditiis, unde voluptatum eos dolore ipsum
            laboriosam voluptate harum.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt='user'
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>Sulaimon Omotosho</span>
              <span className={styles.date}>26.06.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            temporibus iste blanditiis, unde voluptatum eos dolore ipsum
            laboriosam voluptate harum.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt='user'
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>Sulaimon Omotosho</span>
              <span className={styles.date}>26.06.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            temporibus iste blanditiis, unde voluptatum eos dolore ipsum
            laboriosam voluptate harum.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt='user'
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>Sulaimon Omotosho</span>
              <span className={styles.date}>26.06.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            temporibus iste blanditiis, unde voluptatum eos dolore ipsum
            laboriosam voluptate harum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments

import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

const getData = async (page, cat) => {
  // const baseURL =
  //   process.env.NODE_ENV === 'development'
  //     ? 'http://localhost:3000'
  //     : 'https://uncle-sula-blog.vercel.app'

  const baseURL = 'https://uncle-sula-blog.vercel.app'

  const res = await fetch(
    `${baseURL}/api/posts?page=${page}&cat=${cat || ''}`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('Posts not found')
  }

  return res.json()
}

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat)

  const POST_PER_PAGE = 5

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Card post={post} key={post._id} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  )
}

export default CardList

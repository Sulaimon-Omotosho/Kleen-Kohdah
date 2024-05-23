import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '@/components/menu/Menu'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImgContainer}>
              <Image src='/p1.jpeg' alt='user' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Sulaimon Omotosho</span>
              <span className={styles.date}>26.06.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='user' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <h2>Lorem ipsum dolor sit, amet!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A vero
              assumenda dolor, omnis deleniti quam sapiente cumque atque earum
              expedita dignissimos enim nulla neque quibusdam explicabo nisi at
              hic dolores, ut accusantium! Qui quis delectus, accusantium
              temporibus hic quod officiis a fugit explicabo dolor voluptates
              necessitatibus incidunt nobis earum maiores!
            </p>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quod accusamus non tenetur harum, blanditiis suscipit debitis
              explicabo sapiente voluptate delectus similique omnis odio vero
              corrupti vitae cupiditate nobis, consequuntur fugiat voluptates
              quos recusandae nesciunt mollitia animi! Odio fuga culpa aliquid
              cum, natus numquam non ab cupiditate tempora minima eum laboriosam
              fugiat delectus sit iure ipsam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              impedit, accusamus voluptate iusto ipsam corporis qui perspiciatis
              repellat corrupti, iure libero, quaerat eius repellendus
              consequuntur possimus eveniet incidunt sapiente nam! Dolorem,
              sequi! Quas consectetur, optio aliquam sit repudiandae, adipisci
              voluptatem provident ipsa soluta beatae doloremque dolorum vero,
              labore enim corrupti ex aperiam mollitia neque repellendus
              sapiente modi. Hic quia iusto sequi reiciendis beatae!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage

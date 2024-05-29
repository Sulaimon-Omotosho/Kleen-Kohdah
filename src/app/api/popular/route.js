import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

// export const GET = async () => {
//   const POST_PER_PAGE = 6

//   const query = {
//     take: POST_PER_PAGE,
//     orderBy: {
//       views: 'desc',
//     },
//     include: { cat: true, user: true },
//   }

//   try {
//     const popular = await prisma.post.findMany(query)

//     return new NextResponse(JSON.stringify(popular, { status: 200 }))
//   } catch (err) {
//     console.error(err)
//     return new NextResponse(
//       JSON.stringify(
//         {
//           message: 'something went wrong!',
//         },
//         { status: 500 }
//       )
//     )
//   }
// }

export default async function handler(req, res) {
  try {
    const data = await prisma.post.findMany({
      orderBy: {
        views: 'desc',
      },
      include: { cat: true, user: true },
      take: 6,
    })
    res.status(200).json({ posts: data })
  } catch (error) {
    console.error(error)
    res.status(500).json({ posts: [] })
  }
}

import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const query = {
    where: {
      editor: true,
    },
    take: 6,
    orderBy: {
      views: 'desc',
    },
    include: { cat: true, user: true },
  }

  try {
    const popular = await prisma.post.findMany(query)

    return new NextResponse(JSON.stringify(popular, { status: 200 }))
  } catch (err) {
    console.error(err)
    return new NextResponse(
      JSON.stringify(
        {
          message: 'something went wrong!',
        },
        { status: 500 }
      )
    )
  }
}

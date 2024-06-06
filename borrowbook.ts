import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function borrowBook(id: number, memberId: number) {
    const book = await prisma.book.update({
    where: {
        id: id,
    },
    data: {
        memberId: memberId,
    }
})
    const allBooks = await prisma.book.findMany()
    console.dir(allBooks)
}

const LORDOFTHERINGS = 3
const JOHNSMITH = 2
borrowBook(LORDOFTHERINGS, JOHNSMITH) 
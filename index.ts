import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.book.create({
        data: {
            title: 'Beebeepop',
            ISBN: 3738749, 
            author: {
                create: {name: 'TweddleDee', biography: 'im a cool guy'},
            },
            member: {
                create: {name: 'John Smith', email: 'john@smith.com', address: '1000 John Smith Way '},
            },
        },
    })

    const allBooks = await prisma.book.findMany()
      console.dir(allBooks)
}


main()





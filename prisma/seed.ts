// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy users
  const post1 = await prisma.user.upsert({
    where: { id: 3 },
    update: {},
    create: {
        name:       "Prueba1",
        apellidop:  'Prueba1',
        apellidom:  'Prueba1',
        mail:      'prueba1@gmail.com',
        password:   '1234'
    },
  });

  const post2 = await prisma.user.upsert({
    where: { id: 4 },
    update: {},
    create: {
        name:       "Prueba2",
        apellidop:  'Prueba2',
        apellidom:  'Prueba2',
        mail:       'prueba2@gmail.com',
        password:   '1234'
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });

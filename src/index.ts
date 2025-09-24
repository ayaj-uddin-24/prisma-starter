import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.create({
  //   data: {
  //     name: "Tanif Uddin",
  //     email: "tanifuddin@gmail.com",
  //     profile: "https://ayazishere.vercel.app/ayaz.jpz",
  //   },
  // });

  // console.log(result);

  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id: 4,
    },
  });

  console.log(result);
}

main();

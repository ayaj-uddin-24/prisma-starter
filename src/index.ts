import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Tanif Uddin",
  //       email: "tanifuddin@gmail.com",
  //       profile: "https://ayazishere.vercel.app/ayaz.jpz",
  //     },
  //     {
  //       name: "Bolla Uddin",
  //       email: "bollauddin@gmail.com",
  //       profile: "https://ayazishere.vercel.app/ayaz.jpz",
  //     },
  //     {
  //       name: "Sahil Uddin",
  //       email: "sahiluddin@gmail.com",
  //       profile: "https://ayazishere.vercel.app/ayaz.jpz",
  //     },
  //     {
  //       name: "Habib Uddin",
  //       email: "habibuddin@gmail.com",
  //       profile: "https://ayazishere.vercel.app/ayaz.jpz",
  //     },
  //   ],
  // });

  // console.log(result);

  // const result = await prisma.user.findUniqueOrThrow({
  //   where: {
  //     id: 4,
  //   },
  // });

  // console.log(result);

  // const updateUser = await prisma.user.update({
  //   where: {
  //     email: "ayajuddin@gmail.com",
  //   },
  //   data: {
  //     name: "Ayaz Uddin",
  //     email: "ayaz@gmail.com",
  //   },
  // });

  // console.log(updateUser);

  // const deleteUser = await prisma.user.delete({
  //   where: {
  //     id: 2,
  //   },
  // });

  // console.log(deleteUser);

  const getUsers = await prisma.user.findMany({
    where: {
      name: {
        contains: "ta",
        mode: "insensitive",
      },
    },
  });

  console.log(getUsers);
}

main();

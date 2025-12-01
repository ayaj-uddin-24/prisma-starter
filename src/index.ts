import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

// Create multiple users
async function createUsers() {
  try {
    const result = await prisma.user.createMany({
      data: [
        {
          name: "Tanif Uddin",
          email: "tanifuddin@gmail.com",
          profile: "https://ayazishere.vercel.app/ayaz.jpg",
        },
        {
          name: "Bolla Uddin",
          email: "bollauddin@gmail.com",
          profile: "https://ayazishere.vercel.app/ayaz.jpg",
        },
        {
          name: "Sahil Uddin",
          email: "sahiluddin@gmail.com",
          profile: "https://ayazishere.vercel.app/ayaz.jpg",
        },
        {
          name: "Habib Uddin",
          email: "habibuddin@gmail.com",
          profile: "https://ayazishere.vercel.app/ayaz.jpg",
        },
      ],
    });

    console.log(`Created users successfully!`, result);
  } catch (error) {
    console.error("Error creating users:", error);
  }
}

// Find a single user by ID
async function findUserById(id: number) {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: { id },
    });

    console.log("User found:", user);
  } catch (error) {
    console.error(`User with ID ${id} not found:`, error);
  }
}

// Update user information
async function updateUser(
  email: string,
  newData: { name?: string; email?: string; profile?: string }
) {
  try {
    const updatedUser = await prisma.user.update({
      where: { email },
      data: newData,
    });

    console.log("User updated successfully:", updatedUser);
  } catch (error) {
    console.error(`Error updating user with email ${email}:`, error);
  }
}

// Delete user by ID
async function deleteUser(id: number) {
  try {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    console.log("User deleted successfully:", deletedUser);
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error);
  }
}

// Search users by name)
async function searchUsersByName(searchTerm: string) {
  try {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
      orderBy: {
        name: "asc",
      },
    });
    console.log("User Found Successfully ", users);
  } catch (error) {
    console.error(`Error searching users:`, error);
  }
}

// Get all users with pagination
async function getAllUsers(skip = 0, take = 10) {
  try {
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take,
        orderBy: {
          id: "asc",
        },
      }),
      prisma.user.count(),
    ]);

    console.log(`Retrieved ${users.length} users (Total: ${total})`);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Main function
async function main() {
  try {
    await createUsers();

    // await findUserById(4);

    // await updateUser("ayajuddin@gmail.com", {
    //   name: "Ayaz Uddin",
    //   email: "ayaz@gmail.com",
    // });

    // await deleteUser(2);

    // await searchUsersByName("ta");

    // await getAllUsers(0, 10);
  } catch (error) {
    console.error("Error in main function:", error);
  } finally {
    await prisma.$disconnect();
    console.log("Database connection closed");
  }
}

main();

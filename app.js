const PrismaClient = require("@prisma/client").PrismaClient;
const express = require("express");

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

// Create a User
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ Error: "User already exist" });
    } else {
      const user = await prisma.user.create({
        data: { name, email },
      });
      return res.json(user);
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});
// test
// Get All Users
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports.app = app;
module.exports.prisma = prisma;

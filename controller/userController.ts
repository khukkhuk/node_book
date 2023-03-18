import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUsers(req: Request, res: Response) {
  try {
    const allUsers = await prisma.users.findMany({
      where: {
        role: {
          equals: 'user',
        },
      },
    });
    res.json(allUsers);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal server error');
  }
}

async function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const user = await prisma.users.findUnique({
      where: { id: parseInt(id) },
    });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal server error');
  }
}

async function createUser(req: Request, res: Response) {
  try {
    const { first_name, last_name, tel, email, username, password } = req.body;
    const user = await prisma.users.create({
      data: {
        first_name,
        last_name,
        tel,
        email,
        username,
        password,
      },
    });
    res.json(user);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal server error');
  }
}

async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const { first_name, last_name, tel, email, username, password } = req.body;

  try {
    const updatedUser = await prisma.users.update({
      where: { id: parseInt(id) },
      data: {
        first_name,
        last_name,
        tel,
        email,
        username,
        password,
      },
    });
    res.json(updatedUser);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal server error');
  }
}

async function deleteUser(req: Request, res: Response) {
  const userId = parseInt(req.params.id);
  try {
    const deletedUser = await prisma.users.delete({
      where: {
        id: userId,
      },
    });
    res.json(deletedUser);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal server error');
  }
}

export { getUsers, getUserById, createUser, updateUser, deleteUser };

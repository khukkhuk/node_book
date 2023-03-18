
import * as express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post('/users', async (req, res) => {
  try {
    const { first_name, last_name, tel, email, username, password } = req.body
    const user = await prisma.users.create({
      data: {
        first_name,
        last_name,
        tel,
        email,
        username,
        password,
      },
    })
    res.json(user)
  } catch (e) {
    console.error(e)
    res.status(500).send('Internal server error')
  }
})

app.put('/users/:id', async (req, res) => {
  const { id } = req.params
  const { first_name, last_name, tel, email, username, password } = req.body

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
    })
    res.json(updatedUser)
  } catch (e) {
    console.error(e)
    res.status(500).send('Internal server error')
  }
})

app.delete('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id)
  try {
    const deletedUser = await prisma.users.delete({
      where: {
        id: userId,
      },
    })
    res.json(deletedUser)
  } catch (e) {
    console.error(e)
    res.status(500).send('Internal server error')
  }
})

app.get('/users', async (req, res) => {
  try {
    const allUsers = await prisma.users.findMany({
      where: {
        role: {
          equals: 'user',
        },
      },
    })
    res.json(allUsers)
  } catch (e) {
    console.error(e)
    res.status(500).send('Internal server error')
  }
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

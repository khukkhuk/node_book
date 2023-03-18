import express, { Request, Response } from 'express'
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controller/userController');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;

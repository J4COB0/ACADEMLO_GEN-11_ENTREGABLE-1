const express = require('express');
const router = express.Router();

// Controllers
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controllers');

//Utils
const { userExists } = require('../middlewares/users.middlewares');

// Enpoints
router.get('/', getAllUsers);
router.post('/', createUser);
router
    .route('/:id')
    .get(userExists, getUserById)
    .patch(userExists, updateUser)
    .delete(userExists, deleteUser);

module.exports = { userRouter: router };

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

// Middlewares
const { userExists } = require('../middlewares/users.middlewares');
const { checkValidations, createUserValidations } = require('../middlewares/validations.middleware');

// Enpoints
router.get('/', getAllUsers);
router.post(
    '/',
    createUserValidations,
    checkValidations,
    createUser
);
router
    .route('/:id')
    .get(userExists, getUserById)
    .patch(userExists, updateUser)
    .delete(userExists, deleteUser);

module.exports = { userRouter: router };

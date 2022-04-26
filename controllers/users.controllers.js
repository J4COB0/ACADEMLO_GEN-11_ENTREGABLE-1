// Models
const { User } = require('../models/user.model');

//Utils
const { filterObject } = require('../utils/filterObject');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({ where: { status: 'active' } });

        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        });
    } catch (error) {
        console.log(error);
    }
};

const getUserById = async (req, res) => {
    try {
        const { user } = req;

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (error) {
        console.log(error);
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            res.status(400).json({
                status: 'error',
                message: 'Must provide all elemets for this request'
            });
        }

        const newUser = await User.create({
            name,
            email,
            password,
            role
        });

        res.status(200).json({
            status: 'success',
            data: {
                newUser
            }
        });
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const { user } = req;
        const data = filterObject(req.body, 'name', 'email');

        await user.update({ ...data });

        res.status(204).json({
            status: 'success'
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { user } = req;
        await user.update({ status: 'disabled' });

        res.status(200).json({
            status: 'success'
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};

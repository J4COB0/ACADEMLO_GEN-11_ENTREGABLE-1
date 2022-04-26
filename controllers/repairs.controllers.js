// Models
const { Repair } = require('../models/repair.model');

const getAllPendings = async (req, res) => {
    const pendings = await Repair.findAll({ where: { status: 'pending' } });

    res.status(200).json({
        status: 'success',
        pendings
    });
};

const getPendingById = async (req, res) => {
    const { pending } = req;

    res.status(200).json({
        status: 'success',
        data: {
            pending
        }
    });
};

const createAppointment = async (req, res) => {
    const { date, userId } = req.body;

    if (!date || !userId) {
        res.status(400).json({
            status: 'error',
            message: 'Must provide all elemets for this request'
        });
    }

    const newAppointment = await Repair.create({
        date,
        userId
    });

    res.status(200).json({
        status: 'success',
        data: {
            newAppointment
        }
    });
};

const updateAppointment = async (req, res) => {
    const { pending } = req;

    await pending.update({ status: 'completed' });

    res.status(204).json({
        status: 'success'
    });
};

const canceldAppointment = async (req, res) => {
    const { pending } = req;

    await pending.update({ status: 'cancelled' });

    res.status(200).json({
        status: 'success'
    });
};

module.exports = {
    getAllPendings,
    getPendingById,
    createAppointment,
    updateAppointment,
    canceldAppointment
};

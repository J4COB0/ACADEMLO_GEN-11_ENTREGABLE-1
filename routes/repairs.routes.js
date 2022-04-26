const express = require('express');
const router = express.Router();

// Controllers
const {
    getAllPendings,
    getPendingById,
    createAppointment,
    updateAppointment,
    canceldAppointment
} = require('../controllers/repairs.controllers');

// Middleware
const { pendingExist } = require('../middlewares/repairs.middlewares');

// Enpoints
router.get('/', getAllPendings);
router.post('/', createAppointment);
router
    .route('/:id')
    .get(pendingExist, getPendingById)
    .patch(pendingExist, updateAppointment)
    .delete(pendingExist, canceldAppointment);

module.exports = { repairRouter: router };

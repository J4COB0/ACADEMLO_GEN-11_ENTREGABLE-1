// Models
const { Repair } = require('../models/repair.model');

const pendingExist = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pending = await Repair.findOne({
            where: {
                status: 'pending',
                id
            }
        });

        if (!pending) {
            res.status(404).json({
                status: 'error',
                message: 'Pending not found, invalid ID'
            });
        }

        req.pending = pending;
        next();
    } catch (error) {
        console.log(error);
    }
};

module.exports = { pendingExist };

//Models
const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError.class');

const userExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findOne({
        where: { status: 'active', id },
        attributes: { exclude: ['password'] }
    });

    if (!user) {
        return next(new AppError('User doesnt exist by given ID', 404));
    }

    req.user = user;
    next();
});

module.exports = { userExists };

const express = require('express');

// Routers
const { userRouter } = require('./routes/users.routes');
const { repairRouter } = require('./routes/repairs.routes');

// Utils
const { globalErrorHandler } = require('./controllers/errors.controller');

// Init express
const app = express();

// Enable JSON
app.use(express.json());

//Endpoints
app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairRouter);

// Global error handler
app.use('*', globalErrorHandler);

module.exports = { app };

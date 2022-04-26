const express = require('express');

// Routers
const { userRouter } = require('./routes/users.routes');
const { repairRouter } = require('./routes/repairs.routes');

// utils
const { db } = require('.//utils/dataBase');

// Init express
const app = express();

// Enable JSON
app.use(express.json());

//Endpoints
app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairRouter);

db.authenticate()
.then(() => console.log('DataBase is authenticated'))
.catch(err => console.log(err))

db.sync({force:true})
.then(() => console.log('DataBase is synced'))
.catch(err => console.log(err))

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Express are running on PORT: ${PORT}`);
});
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./router/tourRoutes')
const userRouter = require('./router/userRoutes')

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hi middleware.');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Router
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app

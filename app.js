const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const gameRouter = require('./routes/gameRoutes');
const userRouter = require('./routes/userRoutes');
const courseRouter = require('./routes/courseRoutes');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(compression());

// 3) ROUTES
app.use('/api/v1/games', gameRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);

module.exports = app;

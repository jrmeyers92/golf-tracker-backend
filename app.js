const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const gameRouter = require('./routes/gameRoutes');
const userRouter = require('./routes/userRoutes');

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

// 3) ROUTES
app.use('/api/v1/games', gameRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

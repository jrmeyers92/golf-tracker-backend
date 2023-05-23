const Game = require('../models/gameModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

exports.getAllGames = catchAsync(async (req, res) => {
  const games = await Game.find();

  res.status(200).json({
    status: 'success',
    results: games.length,
    data: {
      games
    }
  });
});

exports.getGame = factory.getOne(Game);
exports.createGame = factory.createOne(Game);
exports.updateGame = factory.updateOne(Game);
exports.deleteGame = factory.deleteOne(Game);

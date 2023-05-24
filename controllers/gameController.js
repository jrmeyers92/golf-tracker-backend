const Game = require('../models/gameModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

exports.getAllGames = factory.getAll(Game);
exports.getGame = factory.getOne(Game);
exports.createGame = factory.createOne(Game);
exports.updateGame = factory.updateOne(Game);
exports.deleteGame = factory.deleteOne(Game);

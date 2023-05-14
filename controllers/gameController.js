const Game = require('../models/gameModel');
const catchAsync = require('../utils/catchAsync');

exports.createGame = catchAsync(async (req, res) => {
  const newGame = await Game.create(req.body);

  res.status(201).json({
    status: 'success',
    game: newGame
  });
});

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

exports.getGame = catchAsync(async (req, res) => {
  const game = await Game.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      game
    }
  });
});

exports.updateGame = catchAsync(async (req, res) => {
  const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json({
    status: 'success',
    data: {
      game
    }
  });
});

exports.deleteGame = catchAsync(async (req, res) => {
  await Game.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: 'success',
    data: null
  });
});

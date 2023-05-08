const Game = require('../models/gameModel');

exports.createGame = async (req, res) => {
  try {
    const newGame = await Game.create(req.body);

    res.status(201).json({
      status: 'success',
      game: newGame
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();

    res.status(200).json({
      status: 'success',
      results: games.length,
      data: {
        games
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err
    });
  }
};

exports.getGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        game
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err
    });
  }
};

exports.updateGame = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err
    });
  }
};
exports.deleteGame = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err
    });
  }
};

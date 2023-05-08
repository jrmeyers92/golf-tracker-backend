const mongoose = require('mongoose');
// const slugify = require('slugify');
// const validator = require('validator');

const gameSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'A game must have a date that we played']
  },
  course: {
    type: String,
    required: [true, 'A game must have a course']
  },
  jakes_score: {
    type: Number,
    required: [true, 'Jake must have scored something']
  },
  trents_score: {
    type: Number,
    required: [true, 'trent must have scored something']
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;

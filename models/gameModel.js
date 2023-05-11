const mongoose = require('mongoose');
// const slugify = require('slugify');
// const validator = require('validator');

const scoreSchema = new mongoose.Schema({
  name: String,
  score: Number
});

const gameSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'A game must have a date that we played']
  },
  course: {
    type: String
    // required: [true, 'A game must have a course']
  },
  scores: [scoreSchema]
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;

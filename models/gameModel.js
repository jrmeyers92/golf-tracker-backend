const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  name: String,
  score: Number
});

const gameSchema = new mongoose.Schema({
  name_of_round: String,
  description_of_round: String,
  date: {
    type: Date,
    required: [true, 'A game must have a date of when played']
  },
  course: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Course'
    }
  ],
  players: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
  scores: [scoreSchema]
});

gameSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'course',
    select: '-__v'
  });
  next();
});

gameSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'players',
    select: '-__v -role'
  });
  next();
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;

const mongoose = require('mongoose');

const holeSchema = new mongoose.Schema({
  hole_number: Number,
  par: {
    type: Number,
    enum: [3, 4, 5]
  },
  handicap: Number,
  blue_distance: Number,
  white_distance: Number,
  red_distance: Number,
  forward: Number
});

const courseSchema = new mongoose.Schema({
  name: String,
  par: Number,
  length: Number,
  slope: Number,
  address: String,
  city: String,
  state: String,
  zip_code: Number,
  year_built: Number,
  phone_number: Number,
  type: {
    type: Number,
    enum: ['public', 'private']
  },
  hole_count: {
    type: Number,
    enum: [9, 18, 27]
  },
  website: String,
  holes: [holeSchema]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

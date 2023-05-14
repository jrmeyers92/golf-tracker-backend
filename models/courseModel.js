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
  hole_count: {
    type: Number,
    enum: [9, 18, 27]
  },
  par: Number,
  length: Number,
  slope: Number,
  type: {
    type: String,
    enum: ['public', 'private']
  },
  year_built: Number,
  address: String,
  city: String,
  state: String,
  zip_code: Number,
  phone_number: String,
  website: String,
  holes: [holeSchema]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

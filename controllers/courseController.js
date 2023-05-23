const Course = require('../models/courseModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createCourse = catchAsync(async (req, res) => {
  const newCourse = await Course.create(req.body);

  res.status(201).json({
    status: 'success',
    game: newCourse
  });
});

exports.getAllCourses = catchAsync(async (req, res) => {
  const courses = await Course.find();

  res.status(200).json({
    status: 'success',
    results: courses.length,
    data: {
      courses
    }
  });
});

exports.getCourse = catchAsync(async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      course
    }
  });
});

exports.updateCourse = factory.updateOne(Course);

exports.deleteCourse = factory.deleteOne(Course);

const Course = require('../models/courseModel');
const catchAsync = require('../utils/catchAsync');

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

exports.updateCourse = catchAsync(async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json({
    status: 'success',
    data: {
      course
    }
  });
});

exports.deleteCourse = catchAsync(async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: 'success',
    data: null
  });
});

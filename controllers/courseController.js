const Course = require('../models/courseModel');
const catchAsync = require('../utils/catchAsync');

exports.createCourse = catchAsync(async (req, res) => {
  const newCourse = await Course.create(req.body);

  res.status(201).json({
    status: 'success',
    game: newCourse
  });

  res.status(400).json({
    status: 'fail',
    message: err
  });
});

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json({
      status: 'success',
      results: courses.length,
      data: {
        courses
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        course
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err
    });
  }
};
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
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

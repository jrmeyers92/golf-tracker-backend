const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'please eneter your first name']
  },
  last_name: {
    type: String,
    required: [true, 'please eneter your last name']
  },
  email: {
    type: String,
    required: [true, 'please eneter your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please provide a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please provide a password'],
    // this validation only works on CREATE and SAVE (User.create() and User.save())
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same'
    }
  }
});

userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.confirmPassword = undefined;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;

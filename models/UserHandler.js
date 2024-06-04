// Import required libraries
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

// Define schema for user data
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  apiKey: { type: String, default: uuidv4 },
  confirmed: { type: Boolean, default: false },
  otp: { type: String },
  otpExpiry: { type: Date }
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Generate API key method
UserSchema.methods.generateApiKey = function() {
  this.apiKey = uuidv4();
};

// Validate password method
UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

// Export the model
module.exports = mongoose.model('User', UserSchema);
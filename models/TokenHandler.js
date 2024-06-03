// Import mongoose library
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define schema for storing tokens
const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId, // Reference to the user
    required: true,
    ref: "user" // Reference to user model
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600 // Expiry time in seconds
  }
});

// Export the model
module.exports = mongoose.model("Token", tokenSchema);

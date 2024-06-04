// Import the mongoose library for MongoDB interaction
const mongoose = require('mongoose');

//Schema constructor from mongoose
const { Schema } = mongoose;

// new schema for storing image information
const ImageSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, // User's unique ID from the User collection
        ref: 'User', 
        required: true 
    },
    // Base64 encoded string of the image data
    imageData: {
        type: String, 
        required: true 
    },
    mimeType: {
        type: String, 
        required: true 
    },
    // Timestamp when the image was uploaded
    uploadTimestamp: {
        type: Date, // Date type for storing upload time
        default: Date.now 
    }
});

// Export the model so it can be used in other parts of the application
module.exports = mongoose.model('Image', ImageSchema);
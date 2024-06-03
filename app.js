
require('dotenv').config();


const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./route/authenticate_routes');
const fileRoutes = require('./route/file_routes');


console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('JWT_SECRET:', process.env.JWT_SECRET);

const app = express();


connectDB();


app.use(express.json());


app.use('/auth', authRoutes);
app.use('/files', fileRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
KryptoniteApp
Overview
KryptoniteApp is an online application created for the sophisticated civilization of Krypton in the year 3030. Kryptonians may register, authenticate, and post photographs via the app's secure API key system. These photos are kept in the database as Base64 strings and are publicly accessible.

Features
User registration and authentication include email confirmation and two-factor authentication (2FA) using OTP.
API Key Generation: Create API keys to upload files.
File Upload: Send pictures as Base64 strings.
Public Image Access: Access images without authentication.
API Key Management: Invalidate API keys.
Tech Stack
Node.js
Express.js
MongoDB
Mongoose
Redis (optional for OTP storage)
nodemailer (for sending emails)
Directory Structure

project-root/
├── src/
│   ├── controllers/
│   │   ├── AuthenticationHandler.js
│   │   ├── FileHandler.js
│   │   ├── ApiKeyHandler.js
│   ├── models/
│   │   ├── ImageHandler.js
│   │   ├── UserHandler.js
│   │   ├── TokenHandler.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── fileRoutes.js
│   ├── middleware/
│   │   ├── ApiKeyValidator.js
│   │   ├── ImageValidator.js
│   │   ├── AuthenticationMiddleware.js
│   ├── services/
│   │   ├── userService.js
│   │   ├── authService.js
│   │   ├── apiKeyService.js
│   ├── utils/
│   │   ├── email/
│   |   |   |── template/
│   │   |   |    ├── registrationConfirmation.handlebars
│   │   |   |    ├── otp.handlebars
│   |   |   |── sendEmail.js
│   │   ├── redis.js
│   ├── app.js
│   ├── server.js
├── .env
├── package.json
└── README.md


Installation
Clone the repository:

git clone https://github.com/your-username/kryptoniteapp.git
cd kryptoniteapp
Install dependencies:

npm install
Set up environment variables in a .env file:

MONGO_URI=your_mongo_connection_string
REDIS_URL=your_redis_url (if using Redis)
FROM_EMAIL=sender's_email_address
EMAIL_PASSWORD=gmail_app_password
EMAIL_HOST=smtp.gmail.com
EMAIL_USERNAME=same_as_FROM_EMAIL
EMAIL_PORT=465
CLIENT_URL=localhost
JWT_SECRET=your_JWT_secret
PORT=PORT_NUMBER
BCRYPT_SALT=NUMER_OF_SALT_ROUNDS
Start the server:

npm start
Usage
User Registration and Authentication
Register:

Endpoint: POST /auth/register
Payload: { "name": "username.com","email": "user@example.com", "password": "yourpassword","confirmPassword": "password" }
Login and 2FA:

Endpoint: POST /auth/login
Payload: { "email": "user@example.com", "password": "yourpassword" }
Followed by OTP submission.
File Upload
Upload Image:
Endpoint: POST /files/upload
Headers: { "x-api-key": "your_api_key" }
Payload: multipart/form-data with an image file.
Public Image Access
Get All Images:

Endpoint: GET /files/images
Get Single Image:

Endpoint: GET /files/images/:id
API Key Management
Invalidate API Key:
Endpoint: POST /auth/invalidateApiKey
Payload: { "apiKey": "your_api_key" }
Contributing
Fork the repository.
Create a new branch: git checkout -b my-feature-branch
Make your changes.
Commit your changes: git commit -m 'Add some feature'
Push to the branch: git push origin my-feature-branch
Submit a pull request.

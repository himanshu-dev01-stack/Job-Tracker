// dotenv -> to load environment variables from .env file, these variables are secret and should not be hardcoded
import dotenv from 'dotenv';
dotenv.config();

// http -> to create the server
import http from 'http';
// app -> express application
import app from './app.js';

const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
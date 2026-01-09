import express from 'express';
import cookieParser from 'cookie-parser';
import connect from './src/config/mongodb.config';

// express app
const app = express();

// connect to database
connect();

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.get('/', (req, res) => {
  res.send('Welcome to the Job Tracker App');
});

//exporting app
export default app;
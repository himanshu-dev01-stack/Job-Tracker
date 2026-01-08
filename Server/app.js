import express from 'express';
import cookieParser from 'cookie-parser';

// express app
const app = express();

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
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRouter from './api/users';
import './db';
import defaultErrHandler from './errHandler'
import moviesRouter from './api/movies';   
import collectRouter from './api/collect';   
import authenticate from './authenticate';
import playlist from './api/playlist';

dotenv.config();

const app = express();
const port = process.env.PORT; 

app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter);
app.use('/register', usersRouter)
app.use('/api/movies',authenticate,  moviesRouter);
app.use('/api/collect',authenticate,  collectRouter);
app.use('/api/palylist', moviesRouter, playlist);
app.use(defaultErrHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
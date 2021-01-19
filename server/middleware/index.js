import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieCleaner from './auth.js';
import dbConnect from './dbConnect.js';

const __dirname = path.resolve();
const FileStore = sessionFileStore(session);

const config = (app) => {
  dotenv.config();
  app.use(cors());
  dbConnect();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());

  app.use(
    session({
      store: new FileStore(),
      name: 'user_sid',
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 86400000,
        httpOnly: true,
      },
    }),
  );

  app.use(cookieCleaner);
};

export default config;

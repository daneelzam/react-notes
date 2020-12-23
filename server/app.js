import express from 'express';
import config from './middleware/index.js';
import authorizationRouter from './routes/authorization.js';

const app = express();
config(app);
app.use('/', authorizationRouter);
export default app;

import express from 'express';
import config from './middleware/index.js';
import authorizationRouter from './routes/authorization.js';
import mainRouter from './routes/main.js'

const app = express();
config(app);
app.use('/api/notes', mainRouter);
app.use('/api/auth', authorizationRouter);
export default app;

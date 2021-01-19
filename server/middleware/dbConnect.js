import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

// const localDb = 'mongodb://localhost:27017/reactNotes';
const globalDb = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.himu2.mongodb.net/${process.env.DB_NAME}`;

const dbConnect = () => {
  mongoose.connect(globalDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

export default dbConnect;

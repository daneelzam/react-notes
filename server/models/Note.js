import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const noteSchema = new Schema({
  title: String,
  body: String,
});
const Note = model('Note', noteSchema);
export default Note;

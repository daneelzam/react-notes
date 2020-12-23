import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const notebookSchema = new Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
});
const Notebook = model('Notebook', notebookSchema);
export default Notebook;

/* eslint-disable no-underscore-dangle */
import express from 'express';
import User from '../models/User.js';
import Notebook from '../models/Notebook.js';
import Note from '../models/Note.js';

const router = express.Router();

router.get('/notebook/:email', async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email });
  try {
    const notebookList = await Notebook.find({
      author: user._id,
    }).populate('notes');
    return res.json(notebookList);
  } catch (error) {
    return res.status(401).end();
  }
});

router.post('/notebook', async (req, res) => {
  const { title, email } = req.body;
  const user = await User.findOne({ email });

  const notebook = new Notebook({
    author: user._id,
    title,
  });

  try {
    await notebook.save();
    return res.json(notebook);
  } catch (error) {
    return res.status(401).end();
  }
});

router.post('/note', async (req, res) => {
  const { title, body, notebookID } = req.body;
  const notebook = await Notebook.findOne({ _id: notebookID });

  const note = new Note({
    title,
    body,
  });

  try {
    await note.save();
    notebook.notes.push(note);
    await notebook.save();
    const actualNotebook = await Notebook.findOne({ _id: notebookID }).populate('notes');
    return res.json(actualNotebook);
  } catch (error) {
    return res.status(401).end();
  }
});

export default router;

const express = require('express');
const router = express.Router();
const Note = require('../models/note.js');

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch {
    res.send('Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch {
    res.send('Error');
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    note.name = req.body.name;
    note.description = req.body.description;
    const savedNote = note.save();
    res.json(savedNote);
  } catch {
    res.send('Error');
  }
});

router.post('/', async (req, res) => {
  try {
    const note = new Note({
      name: req.body.name,
      description: req.body.description,
    });
    const savedNote = await note.save();
    res.send(savedNote);
  } catch {
    res.send('Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const noteToBeDeleted = await Note.findById(req.params.id);
    await Note.deleteOne(noteToBeDeleted);
    res.send('Note deleted successfully');
  } catch {
    res.send('Error');
  }
});

module.exports = router;

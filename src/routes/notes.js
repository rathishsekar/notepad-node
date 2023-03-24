const express = require('express');
const router = express.Router();
const Note = require('../models/note.js');
const {
  noteValidation,
  validateRequestSchema,
} = require('../middlewares/validation/note.js');
const { check, validationResult } = require('express-validator');

router.get('/notes/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch {
    res.send('Error');
  }
});

router.get('/notes/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch {
    res.send('Error');
  }
});

router.post(
  '/notes',
  noteValidation,
  validateRequestSchema,
  async (req, res) => {
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
  }
);

router.patch('/notes/:id', async (req, res) => {
  try {
    if (!(await Note.exists({ _id: req.params.id }))) {
      res.send('Note not found');
    } else {
      const note = await Note.findById(req.params.id);
      note.name = req.body.name;
      note.description = req.body.description;
      res.json(await note.save());
    }
  } catch {
    res.send('Error');
  }
});

router.delete('/notes/:id', async (req, res) => {
  try {
    if (!(await Note.exists({ _id: req.params.id }))) {
      res.send('Note not found');
    } else {
      await Note.deleteOne({ _id: req.params.id });
      res.send('Note deleted successfully');
    }
  } catch {
    res.send('Error');
  }
});

module.exports = router;

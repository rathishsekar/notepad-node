const notesService = require('../services/notes.js');

exports.getNotes = async (req, res) => {
  try {
    const result = await notesService.getAllNotes();
    res.json(result);
  } catch {
    res.status(400).send('Error');
  }
};

exports.getNote = async (req, res) => {
  try {
    const note = await notesService.getNote(req.params.id);
    res.json(note);
  } catch {
    res.status(400).send('Error');
  }
};

exports.searchNote = async (req, res) => {
  try {
    const note = await notesService.searchNote(req.params.name);
    res.json(note);
  } catch {
    res.status(400).send('Error');
  }
};

exports.createNote = async (req, res) => {
  try {
    const createdNote = await notesService.createNote(req.body);
    res.send(createdNote);
  } catch {
    res.status(400).send('Error');
  }
};

exports.updateNote = async (req, res) => {
  try {
    const updatedNote = await notesService.updateNote(req.params.id, req.body);
    res.send(updatedNote);
  } catch {
    res.status(400).send('Error');
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await notesService.deleteNote(req.params.id);
    res.send('Note deleted successfully');
  } catch {
    res.status(400).send('Error');
  }
};

const Note = require('../models/note.js');

exports.getAllNotes = async (req, res) => {
  return await Note.find();
};

exports.getNote = async (id) => {
  return await Note.findById(id);
};

exports.searchNote = async (name) => {
  return await Note.find({
    $or: [
      {
        name: { $regex: name },
      },
    ],
  });
};

exports.createNote = async (noteToBeCreated) => {
  const note = new Note({
    name: noteToBeCreated.name,
    description: noteToBeCreated.description,
  });
  return await note.save();
};

exports.updateNote = async (id, noteToBeUpdated) => {
  if (!(await Note.exists({ _id: id }))) {
    res.status(404).send('Note not found');
  } else {
    const note = await Note.findById(id);
    note.name = noteToBeUpdated.name;
    note.description = noteToBeUpdated.description;
    return await note.save();
  }
};

exports.deleteNote = async (id) => {
  if (!(await Note.exists({ _id: id }))) {
    res.status(404).send('Note not found');
  } else {
    await Note.deleteOne({ _id: id });
  }
};

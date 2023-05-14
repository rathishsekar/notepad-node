const Note = require('../models/note.js');
const Tag = require('../models/tag.js');

exports.getAllNotes = async (req, res) => {
  return await Note.find().populate('tags');
};

exports.getNote = async (id) => {
  return await Note.findById(id).populate('tags');
};

exports.searchNote = async (name) => {
  return await Note.find({
    $or: [
      {
        name: { $regex: name },
      },
    ],
  }).populate('tags');
};

exports.createNote = async (noteToBeCreated) => {
  const tag = new Tag({
    tagName: noteToBeCreated.tag,
  });
  const createdTag = await tag.save();

  const note = new Note({
    name: noteToBeCreated.name,
    description: noteToBeCreated.description,
    tags: tag._id,
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
    return await note.save().populate('tags');
  }
};

exports.deleteNote = async (id) => {
  if (!(await Note.exists({ _id: id }))) {
    res.status(404).send('Note not found');
  } else {
    await Note.deleteOne({ _id: id });
  }
};

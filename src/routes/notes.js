const express = require('express');
const router = express.Router();
const controller = require('../controllers/notes.js');
const {
  noteValidation,
  validateRequestSchema,
} = require('../middlewares/validation/note.js');

router.get('/notes/', controller.getNotes);

router.get('/notes/:id', controller.getNote);

router.get('/notes/search/:name', controller.searchNote);

router.post(
  '/notes',
  noteValidation,
  validateRequestSchema,
  controller.createNote
);

router.patch(
  '/notes/:id',
  noteValidation,
  validateRequestSchema,
  controller.updateNote
);

router.delete('/notes/:id', controller.deleteNote);

module.exports = router;

const { check, validationResult } = require('express-validator');

exports.noteValidation = [
  check('name')
    .isLength({ min: 3, max: 20 })
    .withMessage('Name should have min lenght of 3 and max lenght of 20'),
  check('description')
    .isLength({ min: 10, max: 200 })
    .withMessage('Name should have min lenght of 3 and max lenght of 250'),
];

exports.validateRequestSchema = (req, res, next) => {
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const router = require('express').Router();
const TodoList = require('./todoList.model');

router.route('/').post(async (req, res, next) => {
  res.send('Hello!');
});

router
  .route('/:id')
  .get(async (req, res, next) => {})
  .put(async (req, res, next) => {})
  .delete(async (req, res, next) => {});

module.exports = router;

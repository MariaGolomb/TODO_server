const router = require('express').Router();
const todoListService = require('./todoList.service');

router.route('/').post(async (req, res, next) => {
  try {
    const newList = await todoListService.createTodoList(req.body);
    await res.status(200).json(newList);
  } catch (error) {
    return next(error);
  }
});

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const todoList = await todoListService.getTodoListById(req.params.id);
      await res.status(200).json(todoList);
    } catch (error) {
      return next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      await todoListService.updateTodoList(req.params.id, req.body);
      await res.status(200).send('ok');
    } catch (error) {
      return next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await todoListService.deleteTodoList(req.params.id);
      await res.status(200).send('ok');
    } catch (error) {
      return next(error);
    }
  });

module.exports = router;

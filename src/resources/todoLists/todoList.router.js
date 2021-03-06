const router = require('express').Router();
const todoListService = require('./todoList.service');
const columnRouter = require('./todoList.column.router');
const cardListRouter = require('../cardsLists/cardList.router');

router.use(columnRouter);
router.use(cardListRouter);

router.route('/').post(async (req, res, next) => {
  try {
    const newList = await todoListService.createTodoList();
    await res.status(200).json(newList);
  } catch (error) {
    return next(error);
  }
});

/*
  .put(async (req, res, next) => {
    try {
      const result = await todoListService.updateTodoList(
        req.params.id,
        req.body
      );
      await res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  });
*/

router
  .route('/:listId')
  .get(async (req, res, next) => {
    try {
      const todoList = await todoListService.getTodoListById(req.params.listId);
      await res.status(200).json(todoList);
    } catch (error) {
      return next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await todoListService.deleteTodoList(req.params.listId);
      await res.status(200).send('ok');
    } catch (error) {
      return next(error);
    }
  });
/*
router
  .route('/:listId/column')
  .post(async (req, res, next) => {
    // add new column, return column Id
    try {
      const updatedList = await todoListService.addNewColumn(
        req.params.listId,
        req.body
      );
      await res.status(200).json(updatedList);
    } catch (error) {
      return next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const updatedList = await todoListService.updateColumn(
        req.params.listId,
        req.body
      );
      await res.status(200).json(updatedList);
    } catch (error) {
      return next(error);
    }
  });

router.route('/:listId/column/:columnId').delete(async (req, res, next) => {
  try {
    const updatedList = await todoListService.deleteColumn(
      req.params.listId,
      req.params.columnId
    );
    await res.status(200).json(updatedList);
  } catch (error) {
    return next(error);
  }
});
*/

module.exports = router;

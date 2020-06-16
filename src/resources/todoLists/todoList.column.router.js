const router = require('express').Router();
const todoListService = require('./todoList.service');

router
  .route('/:listId/column')
  .post(async (req, res, next) => {
    // add new column, return updated list
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

module.exports = router;

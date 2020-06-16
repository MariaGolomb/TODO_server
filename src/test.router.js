const router = require('express').Router();
const cardListService = require('./resources/cardsLists/cardList.service');

const TodoList = require('./resources/todoLists/todoList.model');

router.route('/').post(async (req, res, next) => {
  try {
    console.log('///');
    const result = await cardListService.createCardList({ todoListId: 'qwe' });
    await res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
});

router.route('/:param').post(async (req, res, next) => {
  try {
    const result = await cardListService.updateCardList(
      req.params.param,
      req.body.cardList
    );
    await res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
});

router.route('/push/:listId/:columnId').post(async (req, res, next) => {
  try {
    const newColumn = req.body;
    const listId = req.params.listId;
    const newColumnId = req.params.columnId;
    // findByIdAndUpdate()

    /*
    const result = await TodoList.updateOne(
      { _id: listId },
      { $push: { columns: newColumn } }
    );
*/
    const selector = `columns.${req.body._id}`;

    const result = await TodoList.findOneAndUpdate(
      { _id: listId, 'columns._id': newColumnId },
      {
        $set: { 'columns.$': newColumn },
      },
      { lean: true, new: true }
    );
    await res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

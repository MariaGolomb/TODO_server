const router = require('express').Router();
const cardListService = require('./cardList.service');

router
  .route('/:listId/card')
  .post(async (req, res, next) => {
    try {
      const updatedList = await cardListService.addNewCard(
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
      const updatedList = await cardListService.updateCard(
        req.params.listId,
        req.body
      );
      await res.status(200).json(updatedList);
    } catch (error) {
      return next(error);
    }
  });

router.route('/:listId/card/:cardId').delete(async (req, res, next) => {
  try {
    const updatedList = await cardListService.deleteCard(
      req.params.listId,
      req.params.cardId
    );
    await res.status(200).json(updatedList);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

const router = require('express').Router();
const cardListService = require('./resources/cardsLists/cardList.service');
router.route('/').post(async (req, res, next) => {
  try {
    const result = await cardListService.createCardList(req.body.cardList);
    await res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
});

router.route('/:param').post(async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

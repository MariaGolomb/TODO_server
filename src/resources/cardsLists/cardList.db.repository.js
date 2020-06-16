const cardList = require('./cardList.model');

const createCardList = async (data) => {
  // return cardList.create(data);
  return cardList.create(data);
};

const getCardListById = async (id) => {
  return cardList.findOne({ _id: id });
};

const updateCardList = (id, data) => {
  return cardList.updateOne({ _id: id }, data, { upsert: true }).exec();
};

const getCardListByTodoListId = (id) => {
  return cardList.findOne({ todoListId: id });
};

const addNewCard = async (id, cardData) => {
  return cardList.findOneAndUpdate(
    { todoListId: id },
    {
      $push: { cards: cardData },
    },
    { lean: true, new: true }
  );
};

const deleteCard = async (listId, cardId) => {
  return cardList.findOneAndUpdate(
    { todoListId: listId },
    {
      $pull: { cards: { _id: cardId } },
    },
    { lean: true, new: true }
  );
};

const updateCard = async (listId, cardData) => {
  return cardList.findOneAndUpdate(
    { todoListId: listId, 'cards._id': cardData._id },
    {
      $set: { 'cards.$': cardData },
    },
    { lean: true, new: true }
  );
};

const deleteCardListByTodoListId = async (id) => {
  return (await cardList.deleteOne({ todoListId: id })).deletedCount === 1;
};

module.exports = {
  createCardList,
  getCardListById,
  updateCardList,
  getCardListByTodoListId,
  deleteCardListByTodoListId,
  addNewCard,
  deleteCard,
  updateCard
};

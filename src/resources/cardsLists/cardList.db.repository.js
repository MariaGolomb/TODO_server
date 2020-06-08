const cardList = require('./cardList.model');

const createCardList = async (data) => {
  return cardList.create(data);
};

const getCardListById = async (id) => {
  return cardList.findOne({ _id: id });
};

const updateCardList = (id, data) => {
  return cardList.update({ _id: id }, data);
};

const getCardListByTodoListId = (id) => {
  return cardList.findOne({ todoListId: id });
};

module.exports = {
  createCardList,
  getCardListById,
  updateCardList,
  getCardListByTodoListId,
};

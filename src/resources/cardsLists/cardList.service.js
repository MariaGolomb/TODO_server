const cardListRepo = require('./cardList.db.repository');

const createCardList = async (data) => {
  const cardList = await cardListRepo.createCardList(data);
  return cardList;
};

const updateCardList = async (id, data) => {
  await cardListRepo.updateCardList(id, data);
};

const handleCardList = async (data) => {
  const id = data.id;
  const cardListToUpdate = await cardListRepo.getCardListById(id);
  if (cardListToUpdate) {
    await updateCardList(id, data);
  } else {
    await createCardList(data);
  }
};

const getCardListByTodoListId = async (id) => {
  return await cardListRepo.getCardListByTodoListId(id);
};

module.exports = {
  createCardList,
  updateCardList,
  handleCardList,
  getCardListByTodoListId,
};

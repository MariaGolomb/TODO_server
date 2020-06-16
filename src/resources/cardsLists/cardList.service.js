const cardListRepo = require('./cardList.db.repository');

const createCardList = async (data) => {
  const cardList = await cardListRepo.createCardList(data);
  return cardList;
};

const updateCardList = async (id, data) => {
  await cardListRepo.updateCardList(id, data);
};

const deleteCardListByTodoListId = async (id) => {
  return await cardListRepo.deleteCardListByTodoListId(id);
};
/*
const handleCardList = async (data) => {
  const id = data._id;
  const cardListToUpdate = await cardListRepo.getCardListById(id);
  if (cardListToUpdate) {
    await updateCardList(id, data);
  } else {
    await createCardList(data);
  }
};
*/

const getCardListByTodoListId = async (id) => {
  return await cardListRepo.getCardListByTodoListId(id);
};

const addNewCard = async (listId, cardData) => {
  return await cardListRepo.addNewCard(listId, cardData);
};

const deleteCard = async (listId, cardId) => {
  return await cardListRepo.deleteCard(listId, cardId);
};

const updateCard = async (listId, cardData) => {
  return await cardListRepo.updateCard(listId, cardData);
};

module.exports = {
  createCardList,
  updateCardList,
  getCardListByTodoListId,
  deleteCardListByTodoListId,
  addNewCard,
  deleteCard,
  updateCard,
};

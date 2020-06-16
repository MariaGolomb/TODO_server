const todoListRepo = require('./todoList.db.repository');
const createError = require('http-errors');
const cardListService = require('../cardsLists/cardList.service');

const createTodoList = async () => {
  const result = {};
  const todoList = await todoListRepo.createTodoList();
  result.todoList = todoList;
  const cardList = await cardListService.createCardList({
    todoListId: result.todoList._id,
  });
  result.cardList = cardList;
  return result;
};

const getTodoListById = async (id) => {
  const todoList = await todoListRepo.getTodoListById(id);
  const cardList = await cardListService.getCardListByTodoListId(id);
  if (!todoList) {
    throw createError(404, `Can't find todoList with id ${id}`);
  }

  return { todoList, cardList };
};

const updateTodoList = async (id, params) => {
  const result = {};

  const todoList = await todoListRepo.updateTodoList(id, params.todoList);
  result.todoList = todoList;

  if (params.cardList) {
    const cardList = await cardListService.updateCardList(params.cardList);
    result.cardList = cardList;
  }
  return result;
};

const deleteTodoList = async (id) => {
  const isDeleted = await todoListRepo.deleteTodoList(id);

  if (!isDeleted) {
    throw createError(404, `Can't find todoList with id ${id}`);
  }
  cardListService.deleteCardListByTodoListId(id);

  return isDeleted;
};

const addNewColumn = async (listId, columnData) => {
  const todoList = await todoListRepo.addNewColumn(listId, columnData);
  const cardList = await cardListService.getCardListByTodoListId(listId);
  return { todoList, cardList };
};

const deleteColumn = async (listId, columnId) => {
  const todoList = await todoListRepo.deleteColumn(listId, columnId);
  const cardList = await cardListService.getCardListByTodoListId(listId);
  return { todoList, cardList };
};

const updateColumn = async (listId, columnData) => {
  const todoList = await todoListRepo.updateColumn(listId, columnData);
  const cardList = await cardListService.getCardListByTodoListId(listId);
  return { todoList, cardList };
};

module.exports = {
  createTodoList,
  deleteTodoList,
  getTodoListById,
  updateTodoList,
  addNewColumn,
  deleteColumn,
  updateColumn
};

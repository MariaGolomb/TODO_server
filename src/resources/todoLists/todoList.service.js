const todoListRepo = require('./todoList.db.repository');
const createError = require('http-errors');
const cardListService = require('../cardsLists/cardList.service');

const createTodoList = async (params) => {
  const result = {};
  const todoList = await todoListRepo.createTodoList(params.todoList);
  result.todoList = todoList;

  if (params.cardList) {
    const cardList = await cardListService.createCardList(params.cardList);
    result.cardList = cardList;
  }
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
    const cardList = await cardListService.handleCardList(params.cardList);
    result.cardList = cardList;
  }
  return result;
};

const deleteTodoList = async (id) => {
  const isDeleted = await todoListRepo.deleteTodoList(id);

  if (!isDeleted) {
    throw createError(404, `Can't find todoList with id ${id}`);
  }

  return isDeleted;
};

module.exports = {
  createTodoList,
  deleteTodoList,
  getTodoListById,
  updateTodoList,
};

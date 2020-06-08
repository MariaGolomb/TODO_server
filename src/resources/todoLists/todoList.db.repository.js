const TodoList = require('./todoList.model');

const createTodoList = async (params) => {
  return TodoList.create(params);
};

const getTodoListById = async (id) => {
  return TodoList.findOne({ _id: id });
};

const updateTodoList = async (id, params) => {
  return TodoList.update({ _id: id }, params);
};

const deleteTodoList = async (id) => {
  return (await TodoList.deleteOne({ _id: id })).deletedCount === 1;
};

module.exports = {
  createTodoList,
  getTodoListById,
  updateTodoList,
  deleteTodoList,
};

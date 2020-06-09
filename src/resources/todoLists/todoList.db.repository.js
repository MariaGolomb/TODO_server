const TodoList = require('./todoList.model');

const createTodoList = async (params) => {
  return TodoList.create(params);
};

const getTodoListById = async (id) => {
  return TodoList.findOne({ _id: id });
};

const updateTodoList = async (id, params) => {
  return TodoList.findOneAndUpdate({ _id: id }, params, {
    returnNewDocument: true,
    useFindAndModify: false,
  });
};

const deleteTodoList = async (id) => {
  return (await TodoList.deleteOne({ _id: id })).deletedCount === 1;
};

const addNewColumn = async (id, columnData) => {
  return TodoList.findByIdAndUpdate(
    id,
    {
      $push: { columns: columnData },
    },
    { lean: true, new: true }
  );
};

const deleteColumn = async (listId, columnId) => {
  return TodoList.findOneAndUpdate(
    { _id: listId },
    {
      $pull: { columns: { _id: columnId } },
    },
    { lean: true, new: true }
  );
};

const updateColumn = async (listId, columnData) => {
  return TodoList.findOneAndUpdate(
    { _id: listId, 'columns._id': columnData._id },
    {
      $set: { 'columns.$': columnData },
    },
    { lean: true, new: true }
  );
};

module.exports = {
  createTodoList,
  getTodoListById,
  updateTodoList,
  deleteTodoList,
  addNewColumn,
  deleteColumn,
  updateColumn,
};

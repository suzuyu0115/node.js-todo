const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const getAllTasks = await Task.find({});
    res.status(200).json(getAllTasks);
  } catch (err) {
    res.status(500).json(err);
  }
}

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  } catch (err) {
    res.status(500).json(err);
  }
}

const getSingleTask = async (req, res) => {
  try {
    const getSingleTask = await Task.findById(req.params.id);
    res.status(200).json(getSingleTask);
  } catch (err) {
    res.status(500).json(err);
  }
}

const updateTask = (req, res) => {
  res.send('1つのタスクを更新');
}

const deleteTask = (req, res) => {
  res.send('1つのタスクを削除');
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
}

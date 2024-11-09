const getAllTasks = (req, res) => {
  res.send('タスクを全取得');
}

const createTask = (req, res) => {
  res.send('タスクを投稿');
}

const getSingleTask = (req, res) => {
  res.send('1つのタスクを取得');
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

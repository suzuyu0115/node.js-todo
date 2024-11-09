const express = require('express');
const app = express();

const PORT = 8080;

app.listen(PORT, console.log('サーバー起動中^_^...'));


app.get('/api/v1/tasks', (req, res) => {
  res.send('タスクを全取得');
});

app.post('/api/v1/tasks', (req, res) => {
  res.send('タスクを投稿');
});

app.get('/api/v1/tasks/:id', (req, res) => {
  res.send('1つのタスクを取得');
});

app.patch('/api/v1/tasks/:id', (req, res) => {
  res.send('1つのタスクを更新');
});

app.delete('/api/v1/tasks/:id', (req, res) => {
  res.send('1つのタスクを削除');
});

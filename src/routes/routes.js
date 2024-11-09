const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('タスクを全取得');
});

router.post('/', (req, res) => {
  res.send('タスクを投稿');
});

router.get('/:id', (req, res) => {
  res.send('1つのタスクを取得');
});

router.patch('/:id', (req, res) => {
  res.send('1つのタスクを更新');
});

router.delete('/:id', (req, res) => {
  res.send('1つのタスクを削除');
});

module.exports = router;

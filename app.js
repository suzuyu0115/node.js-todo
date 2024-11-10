const express = require('express');
const app = express();
const mongoose = require("mongoose");require("dotenv").config();

const PORT = 8080;
app.use(express.json());

const start = async () => {
  try {
    app.listen(PORT, console.log('サーバー起動中^_^...'));
    await mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log('DB接続中...') });
  } catch (err) {
    console.log(err);
  }
}

const router = require('./src/routes/routes');
app.use('/api/v1/tasks', router);

start();

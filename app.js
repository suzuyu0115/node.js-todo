const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, console.log('サーバー起動中^_^...'));

const taskRouter = require('./src/routes/taskRouter');
app.use('/api/v1/tasks', taskRouter);

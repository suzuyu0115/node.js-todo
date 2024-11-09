const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, console.log('サーバー起動中^_^...'));

const router = require('./src/routes/routes');
app.use('/api/v1/tasks', router);
